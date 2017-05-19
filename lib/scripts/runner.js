'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = run;

require('babel-polyfill');

var _tasks = require('./tasks');

var Tasks = _interopRequireWildcard(_tasks);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

function format(time) {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

function run(fn, options) {
  var start = new Date();
  console.log('[' + format(start) + '] Starting \'' + fn.name + '\'...'); //eslint-disable-line
  return fn(options).then(function () {
    var end = new Date();
    var time = end.getTime() - start.getTime();
    console.log('[' + format(end) + '] Finished \'' + fn.name + '\' after ' + time + ' ms'); //eslint-disable-line
  });
}

// if invoked via babel-node, execute the task
if (process.argv.length > 2) {
  delete require.cache[__filename];
  var taskName = process.argv[2];
  run(Tasks[taskName], process.argv[3]).catch(function (err) {
    console.error(err.stack); // eslint-disable-line
  });
}
module.exports = exports['default'];