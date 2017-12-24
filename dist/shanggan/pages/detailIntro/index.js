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

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * @file 上甘之家详细介绍页
	 * @author niejianhui
	 */
	var app = getApp();
	Page({
	    data: {
	        currentTab: ''
	    },
	    switchTab: function switchTab(e) {
	        var me = this;
	        var currentTab = me.data.currentTab;
	        var target = e.currentTarget;
	        var tab = target.dataset.tab;
	        if (currentTab === tab) {
	            tab = '';
	        }
	        me.setData({
	            currentTab: tab
	        });
	    },
	    viewImage: function viewImage(e) {
	        var images = ['https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=baac6448307adab429dd1311eabdd879/562c11dfa9ec8a1321928080f103918fa1ecc0c2.jpg'];
	        wx.previewImage({
	            urls: images
	        });
	    }
	});

/***/ })
/******/ ]);