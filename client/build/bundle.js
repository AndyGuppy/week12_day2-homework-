/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Birds = __webpack_require__(2);

var UI = function() {
  var birds = new Birds();
  birds.all(function(result){
    this.render(result);
  }.bind(this));
}

UI.prototype = {
  createText: function(text, label) {
    var p = document.createElement('p');
    p.innerHTML = label + text;
    console.log(p);
    return p;
  },

  appendText: function(element, text, label) {
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  createNote: function(li, note) {
    this.appendText(li, '\t\t<strong>NOTE</strong>', '  ');
    this.appendText(li, note.date, ' \tDate: ');
    this.appendText(li, note.author, ' \tAuthor: ');
    this.appendText(li, note.comment, ' \tComment: '); 
    this.appendText(li, '--------------------------------', '  ');
  },

  render: function(birds) {
    var container = document.getElementById('birds');

    for (var bird of birds) {
      var li = document.createElement('li');
      this.appendText(li, bird.specie, 'Specie: ');
      this.appendText(li, bird.latinName, 'latin Name: ');
      this.appendText(li, bird.family, 'Family: ');
      
      for (var note of bird.notes){
        this.createNote(li, note);
      }

      container.appendChild(li);
    }
  }
}

module.exports = UI;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var Bird = function(options) {
  this.specie = options.specie;
  this.latinName = options.latinName;
  this.family = options.family;
  this.notes = options.notes || [];
 
  
}

Bird.prototype = {
  addNote: function(note) {
    this.notes.push(note);
  }
}

module.exports = Bird;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Bird = __webpack_require__(1);
var Note = __webpack_require__(4);



var Birds = function(){


}

Birds.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    console.log("Making a request to: - " + url)
    request.send();
  },

  all: function(callback) {
    this.makeRequest('http://localhost:3000/api/birds', function(){
      if(this.status !== 200) return;
        var jsonString = this.responseText;
        var result = JSON.parse(jsonString);

        console.log(result);
        callback(result);

    });
  }
}


module.exports = Birds;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var UI = __webpack_require__(0);

var app = function() {
  new UI();
}

window.onload = app;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var Note = function(options) {
  this.comment = options.comment;
  this.date = options.date;
  this.author = options.author;
}

module.exports = Note;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map