import { memo, useEffect, ReactNode, useState, useMemo } from 'react';
import Tweener, { Bezier } from 'lesca-object-tweener';
import { isNumber, offsetChar, Type } from './mise';

type Props = {
  children: ReactNode | string;
  duration?: number;
  gap?: number;
  pause?: boolean;
  preChar?: string;
};

type EachProps = {
  char: string;
  type: Type;
  index: number;
  duration: number;
  gap: number;
  pause: boolean;
  preChar: string;
};

const EachChars = memo(({ char, type, index, duration, gap, pause, preChar }: EachProps) => {
  const [text, setText] = useState(preChar);
  const tweener = useMemo(() => {
    return new Tweener({});
  }, []);

  useEffect(() => {
    tweener.add({
      from: { index: 0 },
      to: { index: 1 },
      duration: duration + index * gap,
      onUpdate: (offset: any) => {
        setText(offsetChar(char, offset.index, type));
      },
      onComplete: (offset: any) => {
        setText(offsetChar(char, offset.index, type) || char);
      },
    });
  }, [char]);

  useEffect(() => {
    console.log(pause);

    if (pause) tweener.stop();
    else tweener.play();
  }, [pause]);

  return <>{text}</>;
});

const CharTransition = memo(
  ({ children, duration = 1000, gap = 0, pause = false, preChar = '　' }: Props) => {
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
            />
          )),
        );
      }
    }, [children, pause]);

    return <> {chars}</>;
  },
);

export default CharTransition;
