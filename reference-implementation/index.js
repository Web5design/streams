'use strict';

global.BaseReadableStream = require('./lib/base-readable.js');
global.ReadableStream = function () {};

global.BaseWritableStream = require('./lib/base-writable.js');
global.WritableStream = function () {};

global.TeeStream = function () {};
global.LengthBufferingStrategy = function () {};
global.CountBufferingStrategy = function () {};
