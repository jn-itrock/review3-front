"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Title/styles.ts":
/*!****************************************!*\
  !*** ./src/components/Title/styles.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Background: function() { return /* binding */ Background; },\n/* harmony export */   ReviewTitleImage: function() { return /* binding */ ReviewTitleImage; },\n/* harmony export */   ReviewTitleWrapper: function() { return /* binding */ ReviewTitleWrapper; },\n/* harmony export */   Title: function() { return /* binding */ Title; },\n/* harmony export */   Wrapper: function() { return /* binding */ Wrapper; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    padding: 0px 206px;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    color: \",\n        \";\\n    font-size: \",\n        \";\\n    font-weight: \",\n        \";\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    position: relative;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    position: absolute;\\n    bottom: 10;\\n    z-index: 10000;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    position: absolute;\\n    top: 0;\\n    width: 462px;\\n    height: 40px;\\n    flex-shrink: 0;\\n    background-color: \",\n        \";\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div(_templateObject());\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.span(_templateObject1(), (param)=>{\n    let { theme } = param;\n    return theme.colors.black;\n}, (param)=>{\n    let { theme } = param;\n    return theme.fonts.size.xxl;\n}, (param)=>{\n    let { theme } = param;\n    return theme.fonts.weight.xxl;\n});\nconst ReviewTitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div(_templateObject2());\nconst ReviewTitleImage = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.img(_templateObject3());\nconst Background = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div(_templateObject4(), (param)=>{\n    let { theme } = param;\n    return theme.colors.green;\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RpdGxlL3N0eWxlcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFFcEMsTUFBTUMsVUFBVUQscURBQU1BLENBQUNFLEdBQUcsb0JBRy9CO0FBRUssTUFBTUMsUUFBUUgscURBQU1BLENBQUNJLElBQUkscUJBQ25CO1FBQUMsRUFBQ0MsS0FBSyxFQUFDO1dBQUtBLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztBQUFELEdBQzFCO1FBQUMsRUFBQ0YsS0FBSyxFQUFDO1dBQUtBLE1BQU1HLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHO0FBQUQsR0FDOUI7UUFBQyxFQUFDTCxLQUFLLEVBQUM7V0FBS0EsTUFBTUcsS0FBSyxDQUFDRyxNQUFNLENBQUNELEdBQUc7QUFBRCxHQUNuRDtBQUVLLE1BQU1FLHFCQUFxQloscURBQU1BLENBQUNFLEdBQUcscUJBRTNDO0FBRU0sTUFBTVcsbUJBQW1CYixxREFBTUEsQ0FBQ2MsR0FBRyxxQkFJeEM7QUFFSyxNQUFNQyxhQUFhZixxREFBTUEsQ0FBQ0UsR0FBRyxxQkFNWjtRQUFDLEVBQUNHLEtBQUssRUFBQztXQUFLQSxNQUFNQyxNQUFNLENBQUNVLEtBQUs7QUFBRCxHQUNyRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UaXRsZS9zdHlsZXMudHM/MDEyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMHB4IDIwNnB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLnNwYW5gXG4gICAgY29sb3I6ICR7KHt0aGVtZX0pID0+IHRoZW1lLmNvbG9ycy5ibGFja307XG4gICAgZm9udC1zaXplOiAkeyh7dGhlbWV9KSA9PiB0aGVtZS5mb250cy5zaXplLnh4bH07XG4gICAgZm9udC13ZWlnaHQ6ICR7KHt0aGVtZX0pID0+IHRoZW1lLmZvbnRzLndlaWdodC54eGx9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFJldmlld1RpdGxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuYFxuXG5leHBvcnQgY29uc3QgUmV2aWV3VGl0bGVJbWFnZSA9IHN0eWxlZC5pbWdgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTA7XG4gICAgei1pbmRleDogMTAwMDA7XG5gO1xuXG5leHBvcnQgY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogNDYycHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHt0aGVtZX0pID0+IHRoZW1lLmNvbG9ycy5ncmVlbn07XG5gIl0sIm5hbWVzIjpbInN0eWxlZCIsIldyYXBwZXIiLCJkaXYiLCJUaXRsZSIsInNwYW4iLCJ0aGVtZSIsImNvbG9ycyIsImJsYWNrIiwiZm9udHMiLCJzaXplIiwieHhsIiwid2VpZ2h0IiwiUmV2aWV3VGl0bGVXcmFwcGVyIiwiUmV2aWV3VGl0bGVJbWFnZSIsImltZyIsIkJhY2tncm91bmQiLCJncmVlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Title/styles.ts\n"));

/***/ })

});