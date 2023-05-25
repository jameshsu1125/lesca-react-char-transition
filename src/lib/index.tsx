import Tweener from 'lesca-object-tweener';
import { ReactNode, memo, useEffect, useMemo, useState } from 'react';
import { Type, isNumber, offsetChar } from './mise';

type Props = {
  children: ReactNode | string;
  duration?: number;
  gap?: number;
  pause?: boolean;
  preChar?: string;
  delay?: number;
  list?: string[];
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
  list: string[];
};

const EachChars = memo(
  ({ char, type, index, duration, gap, pause, preChar, delay, list }: EachProps) => {
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
          setText(offsetChar(char, offset.index, type, list));
        },
        onComplete: (offset: any) => {
          setText(offsetChar(char, offset.index, type, list) || char);
        },
      });
    }, [char]);

    useEffect(() => {
      if (pause) tweener.stop();
      else tweener.play();
    }, [pause]);

    return <>{text}</>;
  },
);

const CharTransition = memo(
  ({
    children,
    duration = 1000,
    gap = 0,
    pause = false,
    preChar = '　',
    delay = 0,
    list = [],
  }: Props) => {
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
              list={list}
            />
          )),
        );
      }
    }, [children, pause]);

    return <> {chars}</>;
  },
);

export default CharTransition;
