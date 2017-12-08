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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector2 = function () {
    function Vector2(x, y) {
        _classCallCheck(this, Vector2);

        this.x = x;
        this.y = y;
    }

    _createClass(Vector2, [{
        key: "add",
        value: function add(v) {
            return new Vector2(this.x + v.x, this.y + v.y);
        }
    }, {
        key: "subtract",
        value: function subtract(v) {
            return new Vector2(this.x - v.x, this.y - v.y);
        }
    }, {
        key: "normalize",
        value: function normalize() {
            var hyp = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
            return new Vector2(this.x / hyp, this.y / hyp);
        }
    }, {
        key: "multiply",
        value: function multiply(scalar) {
            return new Vector2(this.x * scalar, this.y * scalar);
        }
    }, {
        key: "copy",
        value: function copy() {
            return new Vector2(this.x, this.y);
        }
    }]);

    return Vector2;
}();

exports.default = Vector2;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(21);
module.exports = __webpack_require__(0);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vectors = __webpack_require__(7);

var _vectors2 = _interopRequireDefault(_vectors);

var _timers = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Initial Setup
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var play = document.querySelector('#play');
var stop = document.querySelector('#stop');
var clear = document.querySelector('#clear');
var speedSelect = document.querySelector('#speed');

canvas.width = innerWidth / 2;
canvas.height = canvas.width;

var colors = ['#2a2a2a', '#6b7783', '#511c16', '#0c3c60', '#ff703f'];
var speed = 400;
var paused = true;
play.addEventListener('click', function () {
    paused = false;
    update();
});
stop.addEventListener('click', function () {
    paused = true;
});
clear.addEventListener('click', function () {
    grid.cells.forEach(function (row) {
        row.forEach(function (cell) {
            cell.active = false;
            cell.draw();
        });
    });
});
speedSelect.addEventListener('mousemove', function (e) {
    var value = e.target.value;
    speed = 1000 / value;
    console.log(speed);
});
// Event Listeners
addEventListener('resize', function () {
    canvas.width = innerHeight / 2;
    canvas.height = canvas.width;
    start();
});
canvas.addEventListener('click', function (e) {
    var mouse = new _vectors2.default(e.clientX, e.clientY);
    var offset = new _vectors2.default(e.target.offsetLeft, e.target.offsetTop);
    grid.toggleCell(grid.getIndexAtCoord(mouse.subtract(offset)));
});

// Utility 
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function distance(v1, v2) {
    var xDist = v2.x - v1.x;
    var yDist = v2.y - v1.y;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

var Grid = function () {
    function Grid(width, height) {
        _classCallCheck(this, Grid);

        this.width = width;
        this.height = height;
        this.cellDim = canvas.width / width;
        this.cells = [];
    }

    _createClass(Grid, [{
        key: 'getIndexAtCoord',
        value: function getIndexAtCoord(coord) {
            return new _vectors2.default(Math.floor(coord.x / this.cellDim), Math.floor(coord.y / this.cellDim));
        }
    }, {
        key: 'toggleCell',
        value: function toggleCell(index) {
            console.log(index);
            this.cells[index.x][index.y].active = !this.cells[index.x][index.y].active;
            this.cells[index.x][index.y].draw();
        }
    }, {
        key: 'draw',
        value: function draw() {
            for (var x = 0; x < this.width; x++) {
                this.cells[x] = [];
                for (var y = 0; y < this.height; y++) {
                    var pos = new _vectors2.default(canvas.width / grid.width * x, canvas.height / grid.height * y);
                    this.cells[x][y] = new Cell(pos);
                    this.cells[x][y].draw();
                }
            }
        }
    }]);

    return Grid;
}();

var grid = new Grid(30, 30);

var Cell = function () {
    function Cell(pos) {
        _classCallCheck(this, Cell);

        this.pos = pos.copy();
        this.active = false;
        this.newState = false;
    }

    _createClass(Cell, [{
        key: 'applyState',
        value: function applyState() {
            this.active = this.newState;
        }
    }, {
        key: 'draw',
        value: function draw() {
            console.log(this.active);
            c.beginPath();
            c.fillStyle = this.active ? 'yellow' : '#aaa';
            c.strokeStyle = 'black';
            c.rect(this.pos.x, this.pos.y, canvas.width / grid.width, canvas.height / grid.height);
            c.fill();
            c.stroke();
            c.closePath();
        }
    }]);

    return Cell;
}();
// Implementation


function start() {
    grid.draw();
}
var directions = {
    n: new _vectors2.default(0, -1),
    ne: new _vectors2.default(1, -1),
    e: new _vectors2.default(1, 0),
    se: new _vectors2.default(1, 1),
    s: new _vectors2.default(0, 1),
    sw: new _vectors2.default(-1, 1),
    w: new _vectors2.default(-1, 0),
    nw: new _vectors2.default(-1, -1)
};
// Animation Loop
function update() {
    if (!paused) {
        for (var x = 0; x < grid.cells.length; x++) {
            for (var y = 0; y < grid.cells[0].length; y++) {
                var neighbors = 0;
                for (var dir in directions) {
                    var d = directions[dir];
                    try {
                        if (grid.cells[x + d.x][y + d.y].active) neighbors++;
                    } catch (e) {}
                }
                if (neighbors <= 1 || neighbors >= 4) {
                    grid.cells[x][y].newState = false;
                } else if (neighbors === 3) {
                    grid.cells[x][y].newState = true;
                } else if (neighbors === 2) {
                    grid.cells[x][y].newState = true;
                }
            }
        }
        for (var _x = 0; _x < grid.cells.length; _x++) {
            for (var _y = 0; _y < grid.cells[0].length; _y++) {
                grid.cells[_x][_y].applyState();
                grid.cells[_x][_y].draw();
            }
        }
    }
    (0, _timers.setTimeout)(update, speed);
}

start();
update();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(4);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3)
  , document = __webpack_require__(2).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , core      = __webpack_require__(0)
  , ctx       = __webpack_require__(11)
  , hide      = __webpack_require__(14)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(16)
  , createDesc = __webpack_require__(19);
module.exports = __webpack_require__(1) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(5)(function(){
  return Object.defineProperty(__webpack_require__(12)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(10)
  , IE8_DOM_DEFINE = __webpack_require__(15)
  , toPrimitive    = __webpack_require__(20)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var path      = __webpack_require__(18)
  , invoke    = __webpack_require__(6)
  , aFunction = __webpack_require__(4);
module.exports = function(/* ...pargs */){
  var fn     = aFunction(this)
    , length = arguments.length
    , pargs  = Array(length)
    , i      = 0
    , _      = path._
    , holder = false;
  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
  return function(/* ...args */){
    var that = this
      , aLen = arguments.length
      , j = 0, k = 0, args;
    if(!holder && !aLen)return invoke(fn, pargs, that);
    args = pargs.slice();
    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
    while(aLen > k)args.push(arguments[k++]);
    return invoke(fn, args, that);
  };
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(3);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global     = __webpack_require__(2)
  , $export    = __webpack_require__(13)
  , invoke     = __webpack_require__(6)
  , partial    = __webpack_require__(17)
  , navigator  = global.navigator
  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
var wrap = function(set){
  return MSIE ? function(fn, time /*, ...args */){
    return set(invoke(
      partial,
      [].slice.call(arguments, 2),
      typeof fn == 'function' ? fn : Function(fn)
    ), time);
  } : set;
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout:  wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

/***/ })
/******/ ]);
//# sourceMappingURL=canvas.bundle.js.map