import { ReactNode } from 'react';
declare type Props = {
    children: ReactNode | string;
    duration?: number;
    gap?: number;
    pause?: boolean;
    preChar?: string;
};
declare const CharTransition: import("react").MemoExoticComponent<({ children, duration, gap, pause, preChar }: Props) => JSX.Element>;
export default CharTransition;
