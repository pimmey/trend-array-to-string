# trend-array-to-string
Not your usual array to string

## Install it
```
npm i -S trend-array-to-string
```

## Usage
### ES6
```js
import arrayToString from 'trend-array-to-string';
const array = [1, 3, 4, 5, 6, 7, 8];
const fancyString = arrayToString(array);
console.log(fancyString); // 1,3-8
```
### ES5
```js
var arrayToString = require('trend-array-to-string').default;
var array = [1, 3, 4, 5, 6, 7, 8];
var fancyString = arrayToString(array);
console.log(fancyString); // 1,3-8
```


## Developing
```
npm i
npm test
```
