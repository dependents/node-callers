### callers [![npm](http://img.shields.io/npm/v/callers.svg)](https://npmjs.org/package/callers) [![npm](http://img.shields.io/npm/dm/callers.svg)](https://npmjs.org/package/callers)

> Get the modules that call a function of another module

`npm install callers`

### Usage

```js
var callers = require('callers');

callers({
  filename: 'file/that/has/the/function',
  directory: 'path/to/all/js/files',
  success: function(err, callers) {

  }
});
```