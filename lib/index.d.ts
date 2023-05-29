import { ReactNode } from 'react';
type Props = {
    children: ReactNode | string;
    duration?: number;
    gap?: number;
    pause?: boolean;
    preChar?: string;
    delay?: number;
    list?: string[];
    onEnd?: Function;
};
declare const CharTransition: import("react").MemoExoticComponent<({ children, duration, gap, pause, preChar, delay, list, onEnd, }: Props) => import("react/jsx-runtime").JSX.Element>;
export default CharTransition;
