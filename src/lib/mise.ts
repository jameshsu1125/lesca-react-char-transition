export enum Type {
  number = 0,
  string = 1,
}

export const isNumber = (str: string) => {
  var pattern = /^\d+\.?\d*$/;
  return pattern.test(str);
};

const chars = {
  [Type.number]: Array.from(new Array(10).keys()).map((e) => String(e)),
  [Type.string]: Array.from(new Array(26).keys()).map((e) => String.fromCharCode(e + 97)),
};

export const offsetChar = (
  char: string,
  offset: number = 1,
  type: Type,
  tranCharList: string[],
) => {
  const pattern = tranCharList.length > 0 ? tranCharList : chars[type];
  if (offset === 1) return char;
  return pattern[Math.floor(Math.random() * pattern.length)];
};
