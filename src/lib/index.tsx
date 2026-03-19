import Tweener, { Bezier } from 'lesca-object-tweener';
import { ReactNode, memo, useEffect, useMemo, useRef, useState } from 'react';
import { Type, isNumber, offsetChar } from './mise';
import BezierEasing from 'bezier-easing';

type Props = {
  children: ReactNode | string;
  duration?: number;
  pause?: boolean;
  preChar?: string;
  delay?: number;
  list?: string[];
  onEnd?: Function;
  easing?: number[];
  fps?: number;
  opacity?: number;
};

type EachProps = {
  char: string;
  type: Type;
  index: number;
  duration: number;
  pause: boolean;
  preChar: string;
  delay: number;
  list: string[];
  onEnd: Function;
  totalIndex: number;
  fps: number;
  opacity?: number;
};

const EachChars = memo(
  ({
    char,
    type,
    index,
    duration,
    pause,
    preChar,
    delay,
    list,
    totalIndex,
    onEnd,
    fps,
    opacity,
  }: EachProps) => {
    const [text, setText] = useState(preChar);
    const ref = useRef({ index: 0, frame: 0, start: 0 });
    const spanRef = useRef<HTMLSpanElement>(null);
    const tweener = useMemo(() => {
      return new Tweener({});
    }, []);

    useEffect(() => {
      tweener.add({
        from: { index: 0 },
        to: { index: 1 },
        duration: duration,
        delay,
        onStart: () => {
          ref.current.start = new Date().getTime();
          if (spanRef.current) spanRef.current!.style.opacity = String(opacity);
        },
        onUpdate: (offset: any) => {
          const offsetTime = new Date().getTime() - ref.current.start;
          const offsetFrame = Math.floor((offsetTime / 1000) * fps);

          if (ref.current.frame === offsetFrame) return;
          ref.current.frame = offsetFrame;
          setText(offsetChar(char, offset.index, type, list));
        },
        onComplete: (offset: any) => {
          setText(offsetChar(char, offset.index, type, list) || char);
          if (spanRef.current) spanRef.current!.style.opacity = '1';
          if (totalIndex - 1 === index) onEnd?.();
        },
      });
    }, [char]);

    useEffect(() => {
      if (pause) tweener.stop();
      else tweener.play();
    }, [pause]);

    return <span ref={spanRef}>{text}</span>;
  },
);

const CharTransition = memo(
  ({
    children,
    duration = 1000,
    pause = false,
    preChar = '　',
    delay = 0,
    list = [],
    easing = Bezier.linear,
    fps = 60,
    opacity = 1,
    onEnd = function () {},
  }: Props) => {
    const [chars, setChars] = useState('' as ReactNode);

    const easingMethod = useMemo(() => {
      return BezierEasing(easing[0], easing[1], easing[2], easing[3]);
    }, [easing, duration]);

    useEffect(() => {
      if (typeof children === 'string') {
        const type = isNumber(children) ? Type.number : Type.string;
        setChars(
          Array.from(children).map((e, i) => (
            <EachChars
              char={e}
              key={`${e}${i}`}
              duration={easingMethod(i / children.length) * duration}
              totalIndex={children.length}
              type={type}
              index={i}
              pause={pause}
              preChar={preChar}
              delay={delay}
              list={list}
              onEnd={onEnd}
              fps={fps}
              opacity={opacity}
            />
          )),
        );
      }
    }, [children, pause]);

    return <>{chars}</>;
  },
);

export default CharTransition;
