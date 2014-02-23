## level-client

Create and return LevelDB client if necessary, reuse if already given

## Install

```bash
$ npm install level-client
```

## Usage

```js
foo = require('level-client')('data-stuff')
bar = require('level-client')(foo)
qux = require('level-client')(foo)

foo == bar == qux
// => true
```
