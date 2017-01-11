require('babel-register')({
  presets: ['react', 'es2015'],
});

require('babel-polyfill');


global.document = require('jsdom').jsdom(`
  <head>
    <meta charset='UTF-8'>
    <title>Scrabble Starting Kit</title>
  </head>
  <body>
    <div id='application'></div>
  </body>
`);

global.window = global.document.defaultView;
global.navigator = global.window.navigator;

// @TODO: Read over the conversation in this issue: https://github.com/sinonjs/sinon/issues/657
// @TODO: Set up your test environment so that you can hijack any and all ajax calls

// global.XMLHttpRequest = global.window.XMLHttpRequest;
//
// global.sinon = require('sinon');
// global.sinon.useFakeXMLHttpRequest();
//
// global.window.XMLHttpRequest = global.XMLHttpRequest;
// global.$ = require('jquery')(global.window);
