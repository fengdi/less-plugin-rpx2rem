

less-plugin-rpx2rem
=======================

Convert rpx to rem plugin for less.js

## lessc usage

```
npm install -g less-plugin-rpx2rem
```

and then on the command line,

```
lessc file.less --rpx2rem
```

You can set the 'ratio' option to control the ratio of rpx to rem (default 100).


```
lessc --rpx2rem="ratio=75" index.less index.css. 
```

## Programmatic usage

```
var rpx2rem-plugin = require('less-plugin-rpx2rem');
less.render(lessString, { plugins: [rpx2rem-plugin] })
  .then(
```

## Browser usage

Browser usage is not supported at this time.