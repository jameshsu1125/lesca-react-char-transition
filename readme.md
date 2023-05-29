[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![React](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](https://lesscss.org/)
[![React](https://img.shields.io/badge/Typescript-4277c0?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![React](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![NPM](https://img.shields.io/badge/DEV-Jameshsu1125-9cf?style=for-the-badge)](https://www.npmjs.com/~jameshsu1125)

# Why use it?

simple way to transition char in pure string react component

#### [Live Demo](https://jameshsu1125.github.io/lesca-react-char-transition/)

# Installation

```sh
npm install lesca-react-char-transition --save
```

## Usage

As a Node module:

```javascript
import CharTransition from 'lesca-react-char-transition';
```

In the component

```jsx
const component = () => {
  return (
    <CharTransition duration={1000} gap={0} preChar='?' pause={false}>
      James
    </CharTransition>
  );
};
```

### Props

| Props                 |           description            | default |
| :-------------------- | :------------------------------: | ------: |
| **duration**:_number_ |       transition duration        |    1000 |
| **gap**:_number_      |     each char transition gap     |       0 |
| **preChar**:_string_  | first char display when it pause |      '' |
| **pause**:_boolean_   |         pause transition         |   false |
| **list**:_boolean_    |        list of char world        |   false |
| **onEnd**:_boolean_   |       transition complete        |    null |

### Features

- maintain if necessary
