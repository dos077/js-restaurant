/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst setScroll = () => {\n  let elements = document.querySelectorAll('.bg-cover');\n  let stories = document.querySelectorAll('.story');\n  let startPoints = [];\n  let logoEnd = document.querySelector('#logo').offsetTop + document.querySelector('#logo').offsetHeight;\n\n  elements.forEach(function(el){ startPoints.push(el.offsetTop); });\n\n  window.addEventListener('scroll', function(){\n    y = window.scrollY;\n    for(i=0;i<startPoints.length;i++) {\n      el = elements[i];\n      if(y>startPoints[i]) {\n        height = stories[i].offsetHeight;\n        if(y<=(startPoints[i]+height)) {\n          el.style.position = '';\n          el.style.top = '';\n        } else {\n          el.style.position = 'relative';\n          el.style.top = height + 'px';\n        }\n      } else {\n        el.style.position = ''; el.style.top = '';\n      }\n    }\n    if(y>logoEnd) { \n      document.querySelector('.floating-menu').classList.add('colored'); \n    } else {\n      document.querySelector('.floating-menu').classList.remove('colored');\n    }\n  });\n}\n\nconst setFloatingMenu = () => {\n  document.querySelector('#open-menu').addEventListener('click', function(){\n    document.querySelector('.floating-menu').classList.add('expand');\n  });\n  \n  document.querySelector('#close-menu').addEventListener('click', function(){\n    document.querySelector('.floating-menu').classList.remove('expand');\n  });  \n}\n\nconst setTabNav = () => {\n  let navLinks = document.querySelectorAll('.tabs .nav a');\n  navLinks.forEach(function(link){\n    link.addEventListener('click', function(){\n      let lastLink = document.querySelector('.tabs .nav .current');\n      lastLink.classList.remove('current');\n      this.classList.add('current');\n      let tabs = document.querySelectorAll('.tabs .tab');\n      tabs.forEach(function(tab){\n        tab.classList.add('hide');\n      });\n      document.getElementById(this.id+'-tab').classList.remove('hide');\n    });\n  });\n}\n\nconst setGalleryClick = () => {\n  let tns = document.querySelectorAll('.gallery .thumbnails img');\n  tns.forEach(function(tn){\n    tn.addEventListener('click', function(){\n      let display = document.querySelector('.gallery #display');\n      display.style.backgroundImage = \"url('\" + this.src + \"')\";\n    });\n  });\n}\n\nwindow.addEventListener('load',function(){\n  setScroll();\n  setFloatingMenu();\n  setTabNav();\n  setGalleryClick();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });