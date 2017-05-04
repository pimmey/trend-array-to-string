# trend-array-to-string
Not your usual array to string

## Installation
```
npm i -S trend-array-to-string
```

## Usage
### ES6
```js
import arrayToString from 'trend-array-to-string';
const array = [1, 3, 4, 5, 6, 7, 8];

arrayToString(array).then(res => console.log('res', res)); // 1,3-8

```
### ES5
```js
var arrayToString = require('trend-array-to-string').default;
var array = [1, 3, 4, 5, 6, 7, 8];

arrayToString(array).then(function (res) {
  console.log('res', res); // 1,3-8
});

```


## Install dev dependencies and run tests
```
npm i
npm test
```
