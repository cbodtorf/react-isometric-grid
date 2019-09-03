!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define([], factory) : "object" == typeof exports ? exports.ReactSortableTree = factory() : root.ReactSortableTree = factory();
}("undefined" != typeof self ? self : this, function() {
    /******/
    return function(modules) {
        /******/
        /******/
        // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/
            // Check if module is in cache
            /******/
            if (installedModules[moduleId]) /******/
            return installedModules[moduleId].exports;
            /******/
            // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: !1,
                /******/
                exports: {}
            };
            /******/
            /******/
            // Return the exports of the module
            /******/
            /******/
            /******/
            // Execute the module function
            /******/
            /******/
            /******/
            // Flag the module as loaded
            /******/
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.l = !0, module.exports;
        }
        // webpackBootstrap
        /******/
        // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/
        // Load entry module and return exports
        /******/
        /******/
        /******/
        /******/
        // expose the modules object (__webpack_modules__)
        /******/
        /******/
        /******/
        // expose the module cache
        /******/
        /******/
        /******/
        // define getter function for harmony exports
        /******/
        /******/
        /******/
        // getDefaultExport function for compatibility with non-harmony modules
        /******/
        /******/
        /******/
        // Object.prototype.hasOwnProperty.call
        /******/
        /******/
        /******/
        // __webpack_public_path__
        /******/
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.d = function(exports, name, getter) {
            /******/
            __webpack_require__.o(exports, name) || /******/
            Object.defineProperty(exports, name, {
                /******/
                configurable: !1,
                /******/
                enumerable: !0,
                /******/
                get: getter
            });
        }, __webpack_require__.n = function(module) {
            /******/
            var getter = module && module.__esModule ? /******/
            function() {
                return module.default;
            } : /******/
            function() {
                return module;
            };
            /******/
            /******/
            return __webpack_require__.d(getter, "a", getter), getter;
        }, __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 7);
    }([ /* 0 */
    /***/
    function(module, exports, __webpack_require__) {
        // style-loader: Adds some css to the DOM by adding a <style> tag
        // load the styles
        var content = __webpack_require__(9);
        "string" == typeof content && (content = [ [ module.i, content, "" ] ]);
        // Prepare cssTransformation
        var options = {
            insertAt: "top",
            hmr: !0
        };
        options.transform = void 0;
        // add the styles to the DOM
        __webpack_require__(11)(content, options);
        content.locals && (module.exports = content.locals);
    }, /* 1 */
    /***/
    function(module, exports) {
        module.exports = require("react");
    }, /* 2 */
    /***/
    function(module, exports) {
        module.exports = require("prop-types");
    }, /* 3 */
    /***/
    function(module, exports) {
        module.exports = require("react-style-proptype");
    }, /* 4 */
    /***/
    function(module, exports) {
        module.exports = require("dynamics.js");
    }, /* 5 */
    /***/
    function(module, exports) {
        module.exports = require("classnames");
    }, /* 6 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        // from: http://stackoverflow.com/a/21913575
        function getComputedTranslateY(obj) {
            if (!window.getComputedStyle) return 0;
            var style = getComputedStyle(obj), transform = style.transform || style.webkitTransform || style.mozTransform, mat = transform.match(/^matrix3d\((.+)\)$/);
            return mat ? parseFloat(mat[1].split(", ")[13]) : (mat = transform.match(/^matrix\((.+)\)$/), 
            mat ? parseFloat(mat[1].split(", ")[5]) : 0);
        }
        // some helper functions
        function scrollY() {
            return window.pageYOffset || window.document.documentElement.scrollTop;
        }
        function extend(a, b) {
            return Object.assign(a, b);
        }
        function getViewportH() {
            var client = window.document.documentElement.clientHeight, inner = window.innerHeight;
            return client < inner ? inner : client;
        }
        function isValidColor(color) {
            if ("#" === color.charAt(0)) {
                var hexValue = color.substring(1);
                return [ 3, 4, 6, 8 ].indexOf(hexValue.length) > -1 && parseInt(hexValue, 16);
            }
            return /^(rgb|hsl)a?\((\d+%?(deg|rad|grad|turn)?[,\s]+){2,3}[\s]*[\d]+%?\)$/i.test(color);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.getComputedTranslateY = getComputedTranslateY, exports.scrollY = scrollY, 
        exports.extend = extend, exports.getViewportH = getViewportH, exports.isValidColor = isValidColor;
    }, /* 7 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.Cell = void 0;
        var _reactIsometricGrid = __webpack_require__(8), _reactIsometricGrid2 = _interopRequireDefault(_reactIsometricGrid), _cell = __webpack_require__(17), _cell2 = _interopRequireDefault(_cell);
        exports.default = _reactIsometricGrid2.default, exports.Cell = _cell2.default;
    }, /* 8 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(1), _react2 = _interopRequireDefault(_react), _propTypes = __webpack_require__(2), _propTypes2 = _interopRequireDefault(_propTypes), _reactStyleProptype = __webpack_require__(3), _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype), _dynamics = __webpack_require__(4), _dynamics2 = _interopRequireDefault(_dynamics), _classnames = __webpack_require__(5), _classnames2 = _interopRequireDefault(_classnames), _reactIsometricGrid = __webpack_require__(0), _reactIsometricGrid2 = _interopRequireDefault(_reactIsometricGrid), _isometricGrid = __webpack_require__(13), _isometricGrid2 = _interopRequireDefault(_isometricGrid), ReactIsometricGrid = function(_Component) {
            function ReactIsometricGrid() {
                return _classCallCheck(this, ReactIsometricGrid), _possibleConstructorReturn(this, (ReactIsometricGrid.__proto__ || Object.getPrototypeOf(ReactIsometricGrid)).apply(this, arguments));
            }
            return _inherits(ReactIsometricGrid, _Component), _createClass(ReactIsometricGrid, [ {
                key: "componentDidMount",
                value: function() {
                    var _props = this.props, onGridLoaded = _props.onGridLoaded, perspective = _props.perspective, transform = _props.transform, stackItemsAnimation = _props.stackItemsAnimation;
                    this.isometricGrid = new _isometricGrid2.default(document.querySelector("." + _reactIsometricGrid2.default.isolayer), {
                        perspective: perspective,
                        transform: transform,
                        stackItemsAnimation: stackItemsAnimation,
                        onGridLoaded: onGridLoaded
                    });
                }
            }, {
                key: "render",
                value: function() {
                    var _classNames, _props2 = this.props, style = _props2.style, shadow = _props2.shadow, children = _props2.children;
                    return _react2.default.createElement("div", {
                        className: (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, _reactIsometricGrid2.default.isolayer, !0), 
                        _defineProperty(_classNames, _reactIsometricGrid2.default["isolayer--shadow"], shadow), 
                        _classNames)),
                        style: style
                    }, _react2.default.createElement("ul", {
                        className: _reactIsometricGrid2.default.grid
                    }, children));
                }
            } ]), ReactIsometricGrid;
        }(_react.Component);
        ReactIsometricGrid.propTypes = {
            // have a shadow under the cells
            shadow: _propTypes2.default.bool,
            // ongridloaded callback
            onGridLoaded: _propTypes2.default.func,
            // style
            style: _reactStyleProptype2.default,
            // children (Cell elements)
            children: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired,
            // perspective value, # of px distance from z origin
            perspective: _propTypes2.default.number,
            // transform of the isometric grid in 3d space
            // https://www.w3schools.com/cssref/css3_pr_transform.asp
            transform: _propTypes2.default.string,
            // animation values for each cell dynamicjs
            stackItemsAnimation: _propTypes2.default.shape({
                // object of the properties/values you want to animate
                // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function
                properties: _propTypes2.default.func,
                // object representing the animation like duration and easing
                // https://github.com/michaelvillar/dynamics.js#dynamicsanimateel-properties-options
                options: _propTypes2.default.func
            })
        }, ReactIsometricGrid.defaultProps = {
            shadow: !1,
            onGridLoaded: function() {},
            style: {
                height: "600px",
                width: "600px",
                position: "absolute",
                left: 0,
                top: 0
            },
            perspective: 3e3,
            transform: "scale3d(0.8,0.8,1) rotateY(45deg) rotateZ(-10deg)",
            stackItemsAnimation: {
                properties: function(pos) {
                    return {
                        rotateX: -15 * (pos + 1)
                    };
                },
                options: function(pos, totalItems) {
                    return {
                        type: _dynamics2.default.spring,
                        delay: 30 * (totalItems - pos - 1)
                    };
                }
            }
        }, exports.default = ReactIsometricGrid;
    }, /* 9 */
    /***/
    function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(10)(!1), // imports
        // module
        exports.push([ module.i, "*,\n*::after,\n*::before {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.rst__grid,\n.rst__grid__item,\n.rst__grid__link {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n\n.rst__grid {\n  position: relative;\n  margin: 0 auto;\n  padding: 0;\n  list-style: none; }\n\n.rst__grid__item {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.rst__grid__link {\n  position: relative;\n  z-index: 1;\n  display: block; }\n\n.rst__grid__link.rst__grid__link--onclick:hover {\n  cursor: pointer; }\n\n.rst__grid__img {\n  display: block;\n  max-width: 100%; }\n\n.rst__grid__title {\n  font-size: 0.65em;\n  font-weight: 600;\n  position: absolute;\n  z-index: -1;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  opacity: 0;\n  color: #fff;\n  -webkit-transform: translate3d(0, -20px, 0);\n  transform: translate3d(0, -20px, 0);\n  -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;\n  -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\n  transition: opacity 0.3s, -webkit-transform 0.3s;\n  transition: transform 0.3s, opacity 0.3s;\n  transition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s; }\n\n.rst__grid__item:hover .rst__grid__title {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n.rst__layer {\n  position: relative;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n/* Shadow effect */\n.rst__isolayer--shadow .rst__grid__link::before {\n  content: '';\n  position: absolute;\n  z-index: -1;\n  top: 5px;\n  right: 5px;\n  bottom: 5px;\n  left: 5px;\n  opacity: 0.6;\n  background: rgba(0, 0, 0, 0.8);\n  -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.8);\n          box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.8);\n  -webkit-transform: translateZ(-1px) scale(0.95);\n  transform: translateZ(-1px) scale(0.95);\n  -webkit-transition: transform 0.3s, opacity 0.3s, box-shadow 0.3s;\n  -webkit-transition: opacity 0.3s, -webkit-transform 0.3s, -webkit-box-shadow 0.3s;\n  transition: opacity 0.3s, -webkit-transform 0.3s, -webkit-box-shadow 0.3s;\n  transition: transform 0.3s, opacity 0.3s, box-shadow 0.3s;\n  transition: transform 0.3s, opacity 0.3s, box-shadow 0.3s, -webkit-transform 0.3s, -webkit-box-shadow 0.3s;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden; }\n\n.rst__isolayer--shadow .rst__grid__item:hover .rst__grid__link::before {\n  opacity: 0.2;\n  -webkit-box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.8);\n          box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.8);\n  -webkit-transform: translateZ(-1px) scale(1);\n  transform: translateZ(-1px) scale(1); }\n\n.rst__isolayer .rst__grid__item {\n  padding: 15px; }\n\n.rst__isolayer .rst__grid__link div.rst__layer {\n  opacity: 0.4; }\n", "" ]), 
        // exports
        exports.locals = {
            grid: "rst__grid",
            grid__item: "rst__grid__item",
            grid__link: "rst__grid__link",
            "grid__link--onclick": "rst__grid__link--onclick",
            grid__img: "rst__grid__img",
            grid__title: "rst__grid__title",
            layer: "rst__layer",
            "isolayer--shadow": "rst__isolayer--shadow",
            isolayer: "rst__isolayer"
        };
    }, /* 10 */
    /***/
    function(module, exports) {
        function cssWithMappingToString(item, useSourceMap) {
            var content = item[1] || "", cssMapping = item[3];
            if (!cssMapping) return content;
            if (useSourceMap && "function" == typeof btoa) {
                var sourceMapping = toComment(cssMapping);
                return [ content ].concat(cssMapping.sources.map(function(source) {
                    return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */";
                })).concat([ sourceMapping ]).join("\n");
            }
            return [ content ].join("\n");
        }
        // Adapted from convert-source-map (MIT)
        function toComment(sourceMap) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
        }
        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
        // css base code, injected by the css-loader
        module.exports = function(useSourceMap) {
            var list = [];
            // return the list of modules as css string
            // import a list of modules into the list
            return list.toString = function() {
                return this.map(function(item) {
                    var content = cssWithMappingToString(item, useSourceMap);
                    return item[2] ? "@media " + item[2] + "{" + content + "}" : content;
                }).join("");
            }, list.i = function(modules, mediaQuery) {
                "string" == typeof modules && (modules = [ [ null, modules, "" ] ]);
                for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    "number" == typeof id && (alreadyImportedModules[id] = !0);
                }
                for (i = 0; i < modules.length; i++) {
                    var item = modules[i];
                    // skip already imported module
                    // this implementation is not 100% perfect for weird media query combinations
                    //  when a module is imported multiple times with different media queries.
                    //  I hope this will never occur (Hey this way we have smaller bundles)
                    "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), 
                    list.push(item));
                }
            }, list;
        };
    }, /* 11 */
    /***/
    function(module, exports, __webpack_require__) {
        function addStylesToDom(styles, options) {
            for (var i = 0; i < styles.length; i++) {
                var item = styles[i], domStyle = stylesInDom[item.id];
                if (domStyle) {
                    domStyle.refs++;
                    for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j](item.parts[j]);
                    for (;j < item.parts.length; j++) domStyle.parts.push(addStyle(item.parts[j], options));
                } else {
                    for (var parts = [], j = 0; j < item.parts.length; j++) parts.push(addStyle(item.parts[j], options));
                    stylesInDom[item.id] = {
                        id: item.id,
                        refs: 1,
                        parts: parts
                    };
                }
            }
        }
        function listToStyles(list, options) {
            for (var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
                var item = list[i], id = options.base ? item[0] + options.base : item[0], css = item[1], media = item[2], sourceMap = item[3], part = {
                    css: css,
                    media: media,
                    sourceMap: sourceMap
                };
                newStyles[id] ? newStyles[id].parts.push(part) : styles.push(newStyles[id] = {
                    id: id,
                    parts: [ part ]
                });
            }
            return styles;
        }
        function insertStyleElement(options, style) {
            var target = getElement(options.insertInto);
            if (!target) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];
            if ("top" === options.insertAt) lastStyleElementInsertedAtTop ? lastStyleElementInsertedAtTop.nextSibling ? target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling) : target.appendChild(style) : target.insertBefore(style, target.firstChild), 
            stylesInsertedAtTop.push(style); else if ("bottom" === options.insertAt) target.appendChild(style); else {
                if ("object" != typeof options.insertAt || !options.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
                target.insertBefore(style, nextSibling);
            }
        }
        function removeStyleElement(style) {
            if (null === style.parentNode) return !1;
            style.parentNode.removeChild(style);
            var idx = stylesInsertedAtTop.indexOf(style);
            idx >= 0 && stylesInsertedAtTop.splice(idx, 1);
        }
        function createStyleElement(options) {
            var style = document.createElement("style");
            return options.attrs.type = "text/css", addAttrs(style, options.attrs), insertStyleElement(options, style), 
            style;
        }
        function createLinkElement(options) {
            var link = document.createElement("link");
            return options.attrs.type = "text/css", options.attrs.rel = "stylesheet", addAttrs(link, options.attrs), 
            insertStyleElement(options, link), link;
        }
        function addAttrs(el, attrs) {
            Object.keys(attrs).forEach(function(key) {
                el.setAttribute(key, attrs[key]);
            });
        }
        function addStyle(obj, options) {
            var style, update, remove, result;
            // If a transform function was defined, run it on the css
            if (options.transform && obj.css) {
                if (!(result = options.transform(obj.css))) // If the transform function returns a falsy value, don't add this css.
                // This allows conditional loading of css
                return function() {};
                // If transform returns a value, use that instead of the original css.
                // This allows running runtime transformations on the css.
                obj.css = result;
            }
            if (options.singleton) {
                var styleIndex = singletonCounter++;
                style = singleton || (singleton = createStyleElement(options)), update = applyToSingletonTag.bind(null, style, styleIndex, !1), 
                remove = applyToSingletonTag.bind(null, style, styleIndex, !0);
            } else obj.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (style = createLinkElement(options), 
            update = updateLink.bind(null, style, options), remove = function() {
                removeStyleElement(style), style.href && URL.revokeObjectURL(style.href);
            }) : (style = createStyleElement(options), update = applyToTag.bind(null, style), 
            remove = function() {
                removeStyleElement(style);
            });
            return update(obj), function(newObj) {
                if (newObj) {
                    if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
                    update(obj = newObj);
                } else remove();
            };
        }
        function applyToSingletonTag(style, index, remove, obj) {
            var css = remove ? "" : obj.css;
            if (style.styleSheet) style.styleSheet.cssText = replaceText(index, css); else {
                var cssNode = document.createTextNode(css), childNodes = style.childNodes;
                childNodes[index] && style.removeChild(childNodes[index]), childNodes.length ? style.insertBefore(cssNode, childNodes[index]) : style.appendChild(cssNode);
            }
        }
        function applyToTag(style, obj) {
            var css = obj.css, media = obj.media;
            if (media && style.setAttribute("media", media), style.styleSheet) style.styleSheet.cssText = css; else {
                for (;style.firstChild; ) style.removeChild(style.firstChild);
                style.appendChild(document.createTextNode(css));
            }
        }
        function updateLink(link, options, obj) {
            var css = obj.css, sourceMap = obj.sourceMap, autoFixUrls = void 0 === options.convertToAbsoluteUrls && sourceMap;
            (options.convertToAbsoluteUrls || autoFixUrls) && (css = fixUrls(css)), sourceMap && (// http://stackoverflow.com/a/26603875
            css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */");
            var blob = new Blob([ css ], {
                type: "text/css"
            }), oldSrc = link.href;
            link.href = URL.createObjectURL(blob), oldSrc && URL.revokeObjectURL(oldSrc);
        }
        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
        var stylesInDom = {}, isOldIE = function(fn) {
            var memo;
            return function() {
                return void 0 === memo && (memo = fn.apply(this, arguments)), memo;
            };
        }(function() {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            return window && document && document.all && !window.atob;
        }), getElement = function(fn) {
            var memo = {};
            return function(selector) {
                if (void 0 === memo[selector]) {
                    var styleTarget = fn.call(this, selector);
                    // Special case to return head of iframe instead of iframe itself
                    if (styleTarget instanceof window.HTMLIFrameElement) try {
                        // This will throw an exception if access to iframe is blocked
                        // due to cross-origin restrictions
                        styleTarget = styleTarget.contentDocument.head;
                    } catch (e) {
                        styleTarget = null;
                    }
                    memo[selector] = styleTarget;
                }
                return memo[selector];
            };
        }(function(target) {
            return document.querySelector(target);
        }), singleton = null, singletonCounter = 0, stylesInsertedAtTop = [], fixUrls = __webpack_require__(12);
        module.exports = function(list, options) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            options = options || {}, options.attrs = "object" == typeof options.attrs ? options.attrs : {}, 
            // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
            // tags it will allow on a page
            options.singleton || "boolean" == typeof options.singleton || (options.singleton = isOldIE()), 
            // By default, add <style> tags to the <head> element
            options.insertInto || (options.insertInto = "head"), // By default, add <style> tags to the bottom of the target
            options.insertAt || (options.insertAt = "bottom");
            var styles = listToStyles(list, options);
            return addStylesToDom(styles, options), function(newList) {
                for (var mayRemove = [], i = 0; i < styles.length; i++) {
                    var item = styles[i], domStyle = stylesInDom[item.id];
                    domStyle.refs--, mayRemove.push(domStyle);
                }
                if (newList) {
                    addStylesToDom(listToStyles(newList, options), options);
                }
                for (var i = 0; i < mayRemove.length; i++) {
                    var domStyle = mayRemove[i];
                    if (0 === domStyle.refs) {
                        for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
                        delete stylesInDom[domStyle.id];
                    }
                }
            };
        };
        var replaceText = function() {
            var textStore = [];
            return function(index, replacement) {
                return textStore[index] = replacement, textStore.filter(Boolean).join("\n");
            };
        }();
    }, /* 12 */
    /***/
    function(module, exports) {
        /**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
        module.exports = function(css) {
            // get current location
            var location = "undefined" != typeof window && window.location;
            if (!location) throw new Error("fixUrls requires window.location");
            // blank or null?
            if (!css || "string" != typeof css) return css;
            var baseUrl = location.protocol + "//" + location.host, currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");
            // send back the fixed css
            return css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
                // strip quotes (if they exist)
                var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function(o, $1) {
                    return $1;
                }).replace(/^'(.*)'$/, function(o, $1) {
                    return $1;
                });
                // already a full url? no change
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) return fullMatch;
                // convert the url to a full url
                var newUrl;
                // send back the fixed url(...)
                //TODO: should we add protocol?
                return newUrl = 0 === unquotedOrigUrl.indexOf("//") ? unquotedOrigUrl : 0 === unquotedOrigUrl.indexOf("/") ? baseUrl + unquotedOrigUrl : currentDir + unquotedOrigUrl.replace(/^\.\//, ""), 
                "url(" + JSON.stringify(newUrl) + ")";
            });
        };
    }, /* 13 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _dynamics = __webpack_require__(4), _dynamics2 = _interopRequireDefault(_dynamics), _imagesloaded = __webpack_require__(14), _imagesloaded2 = _interopRequireDefault(_imagesloaded), _masonryLayout = __webpack_require__(15), _masonryLayout2 = _interopRequireDefault(_masonryLayout), _misc = __webpack_require__(6), _animationFrame = __webpack_require__(16), _reactIsometricGrid = __webpack_require__(0), _reactIsometricGrid2 = _interopRequireDefault(_reactIsometricGrid), defaultOptions = {
            // grid perspective value
            perspective: 0,
            // grid transform
            transform: "",
            // each grid item animation (for the subitems)
            stackItemsAnimation: {
                // this follows the dynamics.js (https://github.com/michaelvillar/dynamics.js) animate fn syntax
                // properties (pos is the current subitem position)
                properties: function(pos) {
                    return {
                        translateZ: 50 * (pos + 1)
                    };
                },
                // animation options (pos is the current subitem position); itemstotal is the total number of subitems
                options: function() {
                    return {
                        type: _dynamics2.default.bezier,
                        duration: 500,
                        points: [ {
                            x: 0,
                            y: 0,
                            cp: [ {
                                x: .2,
                                y: 1
                            } ]
                        }, {
                            x: 1,
                            y: 1,
                            cp: [ {
                                x: .3,
                                y: 1
                            } ]
                        } ]
                    };
                }
            },
            // callback for loaded grid
            onGridLoaded: function() {
                return !1;
            }
        }, IsometricGrid = function() {
            function IsometricGrid(el, options) {
                _classCallCheck(this, IsometricGrid), this.isolayerEl = el, this.options = (0, _misc.extend)({}, defaultOptions), 
                (0, _misc.extend)(this.options, options), this.isolayerEl && (this.gridEl = this.isolayerEl.querySelector("." + _reactIsometricGrid2.default.grid), 
                // grid items
                this.gridItems = [].slice.call(this.gridEl.querySelectorAll("." + _reactIsometricGrid2.default.grid__item)), 
                this.gridItemsTotal = this.gridItems.length, this.didscroll = !1, this.init(), // animation frame functions
                this.requestAnimationFrame = (0, _animationFrame.getRequestAnimationFrame)(), this.cancelAnimationFrame = (0, 
                _animationFrame.getCancelAnimationFrame)());
            }
            return _createClass(IsometricGrid, [ {
                key: "init",
                value: function() {
                    var self = this;
                    (0, _imagesloaded2.default)(this.gridEl, function() {
                        // initialize masonry
                        self.msnry = new _masonryLayout2.default(self.gridEl, {
                            itemSelector: "." + _reactIsometricGrid2.default.grid__item,
                            isFitWidth: !0,
                            horizontalOrder: !0
                        }), self.isolayerEl.style.WebkitTransformStyle = "preserve-3d", self.isolayerEl.style.transformStyle = "preserve-3d";
                        var transformValue = 0 !== self.options.perspective ? "perspective(" + self.options.perspective + "px) " + self.options.transform : self.options.transform;
                        self.isolayerEl.style.WebkitTransform = transformValue, self.isolayerEl.style.transform = transformValue, 
                        // init/bind events
                        self.initEvents(), // grid is "loaded" (all images are loaded)
                        self.options.onGridLoaded();
                    });
                }
            }, {
                key: "initEvents",
                value: function() {
                    var self = this;
                    this.gridItems.forEach(function(item) {
                        item.addEventListener("mouseenter", function(e) {
                            return self.expandSubItems(e.target);
                        }), item.addEventListener("mouseleave", function(e) {
                            return self.collapseSubItems(e.target);
                        });
                    });
                }
            }, {
                key: "expandSubItems",
                value: function(item) {
                    var self = this, itemLink = item.querySelector("a"), subItems = [].slice.call(itemLink.querySelectorAll("." + _reactIsometricGrid2.default.layer)), subItemsTotal = subItems.length;
                    itemLink.style.zIndex = this.gridItemsTotal, item.style.zIndex = this.gridItemsTotal, 
                    // eslint-disable-line no-param-reassign
                    subItems.forEach(function(subitem, pos) {
                        _dynamics2.default.stop(subitem), _dynamics2.default.animate(subitem, self.options.stackItemsAnimation.properties(pos), self.options.stackItemsAnimation.options(pos, subItemsTotal));
                    });
                }
            }, {
                key: "collapseSubItems",
                value: function(item) {
                    var itemLink = item.querySelector("a");
                    [].slice.call(itemLink.querySelectorAll("." + _reactIsometricGrid2.default.layer)).forEach(function(subitem) {
                        _dynamics2.default.stop(subitem), _dynamics2.default.animate(subitem, {
                            // enough to reset any transform value previously set
                            translateZ: 0
                        }, {
                            duration: 100,
                            complete: function() {
                                itemLink.style.zIndex = 1, item.style.zIndex = 1;
                            }
                        });
                    });
                }
            } ]), IsometricGrid;
        }();
        exports.default = IsometricGrid;
    }, /* 14 */
    /***/
    function(module, exports) {
        module.exports = require("imagesloaded");
    }, /* 15 */
    /***/
    function(module, exports) {
        module.exports = require("masonry-layout");
    }, /* 16 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function getRequestAnimationFrame() {
            for (var _window = window, requestAnimationFrame = _window.requestAnimationFrame, prefix = void 0, i = 0; i < prefixes.length && !requestAnimationFrame; i += 1) prefix = prefixes[i], 
            requestAnimationFrame = requestAnimationFrame || window[prefix + "RequestAnimationFrame"];
            // fallback to setTimeout and clearTimeout if either request/cancel is not supported
            return requestAnimationFrame || (requestAnimationFrame = function() {
                return function(callback) {
                    var currTime = new Date().getTime(), timeToCall = Math.max(0, 16 - (currTime - lastTime)), id = window.setTimeout(function() {
                        callback(currTime + timeToCall);
                    }, timeToCall);
                    return lastTime = currTime + timeToCall, id;
                };
            }), requestAnimationFrame;
        }
        function getCancelAnimationFrame() {
            for (var _window2 = window, cancelAnimationFrame = _window2.cancelAnimationFrame, prefix = void 0, i = 0; i < prefixes.length && !cancelAnimationFrame; i += 1) prefix = prefixes[i], 
            cancelAnimationFrame = cancelAnimationFrame || window[prefix + "CancelAnimationFrame"] || window[prefix + "CancelRequestAnimationFrame"];
            // fallback to setTimeout and clearTimeout if either request/cancel is not supported
            return requestAnimationFrame && cancelAnimationFrame || (cancelAnimationFrame = function(id) {
                window.clearTimeout(id);
            }), getCancelAnimationFrame;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.getRequestAnimationFrame = getRequestAnimationFrame, exports.getCancelAnimationFrame = getCancelAnimationFrame;
        /** ******************************************* */
        /** https://gist.github.com/desandro/1866474 * */
        /** ******************************************* */
        var prefixes = "webkit moz ms o".split(" "), lastTime = 0;
    }, /* 17 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _react = __webpack_require__(1), _react2 = _interopRequireDefault(_react), _propTypes = __webpack_require__(2), _propTypes2 = _interopRequireDefault(_propTypes), _reactStyleProptype = __webpack_require__(3), _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype), _classnames = __webpack_require__(5), _classnames2 = _interopRequireDefault(_classnames), _uniqid = __webpack_require__(18), _uniqid2 = _interopRequireDefault(_uniqid), _reactIsometricGrid = __webpack_require__(0), _reactIsometricGrid2 = _interopRequireDefault(_reactIsometricGrid), _misc = __webpack_require__(6), DEFAULT_STYLE = {
            transformStyle: "preserve-3d",
            width: "200px",
            height: "200px"
        }, DEFAULT_LAYER_STYLE = {
            width: "200px",
            height: "200px"
        }, Cell = function(_Component) {
            function Cell() {
                return _classCallCheck(this, Cell), _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
            }
            return _inherits(Cell, _Component), _createClass(Cell, [ {
                key: "render",
                value: function() {
                    var _classNames, _props = this.props, layers = _props.layers, href = _props.href, title = _props.title, style = _props.style, layerStyle = _props.layerStyle, onClick = _props.onClick, layerList = layers.map(function(layer) {
                        return layer ? _react2.default.isValidElement(layer) ? _react2.default.cloneElement(layer, {
                            className: (0, _classnames2.default)([ _reactIsometricGrid2.default.grid__img, _reactIsometricGrid2.default.layer, layer.props.className ]),
                            key: (0, _uniqid2.default)(),
                            style: _extends({}, DEFAULT_LAYER_STYLE, layerStyle)
                        }) : (0, _misc.isValidColor)(layer) ? _react2.default.createElement("div", {
                            className: _reactIsometricGrid2.default.layer,
                            key: (0, _uniqid2.default)(),
                            style: _extends({}, DEFAULT_LAYER_STYLE, layerStyle, {
                                backgroundColor: layer
                            })
                        }) : _react2.default.createElement("img", {
                            alt: "",
                            className: (0, _classnames2.default)([ _reactIsometricGrid2.default.grid__img, _reactIsometricGrid2.default.layer ]),
                            key: (0, _uniqid2.default)(),
                            src: layer,
                            style: _extends({}, DEFAULT_LAYER_STYLE, layerStyle)
                        }) : null;
                    });
                    return _react2.default.createElement("li", {
                        className: _reactIsometricGrid2.default.grid__item
                    }, _react2.default.createElement("a", {
                        className: (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, _reactIsometricGrid2.default.grid__link, !0), 
                        _defineProperty(_classNames, _reactIsometricGrid2.default["grid__link--onclick"], !!onClick), 
                        _classNames)),
                        href: href || null,
                        onClick: onClick,
                        style: _extends({}, DEFAULT_STYLE, style)
                    }, layerList.reverse(), !!title && _react2.default.createElement("span", {
                        className: _reactIsometricGrid2.default.grid__title
                    }, title)));
                }
            } ]), Cell;
        }(_react.Component);
        Cell.propTypes = {
            // arry of images to be in the stack, or hex string for layer colors
            layers: _propTypes2.default.arrayOf(_propTypes2.default.node).isRequired,
            // onclick navigation link
            href: _propTypes2.default.string,
            // onClick function
            onClick: _propTypes2.default.func,
            // optional tital for the stack
            title: _propTypes2.default.string,
            // styling for the Cell element
            style: _reactStyleProptype2.default,
            // styling for the individual layers
            layerStyle: _reactStyleProptype2.default
        }, Cell.defaultProps = {
            href: null,
            onClick: null,
            title: null,
            style: DEFAULT_STYLE,
            layerStyle: DEFAULT_LAYER_STYLE
        }, exports.default = Cell;
    }, /* 18 */
    /***/
    function(module, exports) {
        module.exports = require("uniqid");
    } ]);
});