# node-stay-awake
Node module which prevents computer from going into automatic sleep. Currently supports windows and mac osx.

## Installation
```
npm install stay-awake
```

## Usage
```
var stayAwake = require('stay-awake');

// do something not so important

// prevent auto sleep
stayAwake.prevent(function(err, data) {
    // handle error
});

// do something which needs the computer to stay awake

// once done allow the computer to sleep as configured in power management
stayAwake.allow(function() {})

```