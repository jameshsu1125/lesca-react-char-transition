import { memo, useEffect, ReactNode, useState, useMemo } from 'react';
import Tweener, { Bezier } from 'lesca-object-tweener';
import { isNumber, offsetChar, Type } from './mise';

type Props = {
  children: ReactNode | string;
  duration?: number;
  gap?: number;
  pause?: boolean;
  preChar?: string;
  delay?: number;
};

type EachProps = {
  char: string;
  type: Type;
  index: number;
  duration: number;
  gap: number;
  pause: boolean;
  preChar: string;
  delay: number;
};

const EachChars = memo(({ char, type, index, duration, gap, pause, preChar, delay }: EachProps) => {
  const [text, setText] = useState(preChar);
  const tweener = useMemo(() => {
    return new Tweener({});
  }, []);

  useEffect(() => {
    tweener.add({
      from: { index: 0 },
      to: { index: 1 },
      duration: duration + index * gap,
      delay,
      onUpdate: (offset: any) => {
        setText(offsetChar(char, offset.index, type));
      },
      onComplete: (offset: any) => {
        setText(offsetChar(char, offset.index, type) || char);
      },
    });
  }, [char]);

  useEffect(() => {
    if (pause) tweener.stop();
    else tweener.play();
  }, [pause]);

  return <>{text}</>;
});

const CharTransition = memo(
  ({ children, duration = 1000, gap = 0, pause = false, preChar = '　', delay = 0 }: Props) => {
    const [chars, setChars] = useState(children);

    useEffect(() => {
      if (typeof children === 'string') {
        const type = isNumber(children) ? Type.number : Type.string;
        setChars(
          Array.from(children).map((e, i) => (
            <EachChars
              char={e}
              key={`${e}${i}`}
              duration={duration}
              type={type}
              index={i}
              gap={gap}
              pause={pause}
              preChar={preChar}
              delay={delay}
            />
          )),
        );
      }
    }, [children, pause]);

    return <> {chars}</>;
  },
);

export default CharTransition;
