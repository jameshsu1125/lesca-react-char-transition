import { ReactNode } from 'react';
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
declare const CharTransition: import("react").MemoExoticComponent<({ children, duration, pause, preChar, delay, list, easing, fps, opacity, onEnd, }: Props) => import("react/jsx-runtime").JSX.Element>;
export default CharTransition;
