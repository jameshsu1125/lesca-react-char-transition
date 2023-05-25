export declare enum Type {
    number = 0,
    string = 1
}
export declare const isNumber: (str: string) => boolean;
export declare const offsetChar: (char: string, offset: number | undefined, type: Type, tranCharList: string[]) => string;
