/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _config = __webpack_require__(5);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function formatNumber(n) {
		n = n.toString();
		return n[1] ? n : '0' + n;
	}
	var util = {
		formatTime: function formatTime(date) {
			var year = date.getFullYear();
			var month = date.getMonth() + 1;
			var day = date.getDate();
			var hour = date.getHours();
			var minute = date.getMinutes();
			var second = date.getSeconds();
			return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
		},
		/**
	  * 全角转半角
	  */
		toSBC: function toSBC(target) {
			var result = '';
			var len = target.length;
			for (var i = 0; i < len; i++) {
				var cCode = target.charCodeAt(i);
				// 全角与半角相差（除空格外）：65248（十进制）
				cCode = cCode >= 0xFF01 && cCode <= 0xFF5E ? cCode - 65248 : cCode;
				// 处理空格
				// cCode = (cCode === 0x03000) ? 0x0020 : cCode;
				// cCode = (cCode === 0x0020) ? '' : cCode;
				result += String.fromCharCode(cCode);
			}
			return result;
		}
	};

	exports.default = util;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var devServer = 'https://beta-m.genshuixue.com';
	var proServer = 'https://m.genshuixue.com';

	var path = null;
	// es6 版本
	if (true) {
	    path = devServer;
	} else if (NODE_ENV === 'production') {
	    path = proServer;
	}
	var config = {
	    // 服务地址
	    SERVER_HOST: path
	};

	exports.default = config;

/***/ })
/******/ ]);