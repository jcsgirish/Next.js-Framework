"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStaticSideProps: function() { return /* binding */ getStaticSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\nconst DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"First meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tourists_posing_at_the_National_Monument_of_Scotland.jpg/1860px-Tourists_posing_at_the_National_Monument_of_Scotland.jpg\",\n        address: \"scotland\",\n        description: \"This is first meetup\"\n    },\n    {\n        id: \"m2\",\n        title: \"second meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tourists_posing_at_the_National_Monument_of_Scotland.jpg/1860px-Tourists_posing_at_the_National_Monument_of_Scotland.jpg\",\n        address: \"scotland\",\n        description: \"This is second meetup\"\n    }\n];\nfunction Homepage(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        meetups: props.meetups\n    }, void 0, false, {\n        fileName: \"D:\\\\Nextjs-2\\\\pages\\\\index.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_c = Homepage;\nasync function getStaticSideProps(context) {\n    const req = context.req;\n    const res = context.res;\n    return {\n        props: {\n            meetups: DUMMY_MEETUPS\n        }\n    };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);\nvar _c;\n$RefreshReg$(_c, \"Homepage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUV5RDtBQUV6RCxNQUFNQyxnQkFBZ0I7SUFDdEI7UUFDSUMsSUFBRztRQUNIQyxPQUFNO1FBQ05DLE9BQU07UUFDTkMsU0FBUTtRQUNSQyxhQUFZO0lBQ2hCO0lBQ0E7UUFDSUosSUFBRztRQUNIQyxPQUFNO1FBQ05DLE9BQU07UUFDTkMsU0FBUTtRQUNSQyxhQUFZO0lBQ2hCO0NBQ0M7QUFFRCxTQUFTQyxTQUFTQyxLQUFLO0lBQ25CLHFCQUNJLDhEQUFDUixzRUFBVUE7UUFBQ1MsU0FBVUQsTUFBTUM7Ozs7OztBQUVwQztLQUpTRjtBQUtGLGVBQWVHLG1CQUFtQkMsT0FBTztJQUM1QyxNQUFNQyxNQUFLRCxRQUFRQztJQUNuQixNQUFNQyxNQUFNRixRQUFRRTtJQUVwQixPQUFPO1FBQ0hMLE9BQU07WUFDRkMsU0FBUVI7UUFDWjtJQUVKO0FBQ0o7QUFFQSwrREFBZU0sUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCJcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbntcclxuICAgIGlkOidtMScsXHJcbiAgICB0aXRsZTonRmlyc3QgbWVldHVwJyxcclxuICAgIGltYWdlOidodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzIvMjEvVG91cmlzdHNfcG9zaW5nX2F0X3RoZV9OYXRpb25hbF9Nb251bWVudF9vZl9TY290bGFuZC5qcGcvMTg2MHB4LVRvdXJpc3RzX3Bvc2luZ19hdF90aGVfTmF0aW9uYWxfTW9udW1lbnRfb2ZfU2NvdGxhbmQuanBnJyxcclxuICAgIGFkZHJlc3M6J3Njb3RsYW5kJyxcclxuICAgIGRlc2NyaXB0aW9uOidUaGlzIGlzIGZpcnN0IG1lZXR1cCdcclxufSxcclxue1xyXG4gICAgaWQ6J20yJyxcclxuICAgIHRpdGxlOidzZWNvbmQgbWVldHVwJyxcclxuICAgIGltYWdlOidodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzIvMjEvVG91cmlzdHNfcG9zaW5nX2F0X3RoZV9OYXRpb25hbF9Nb251bWVudF9vZl9TY290bGFuZC5qcGcvMTg2MHB4LVRvdXJpc3RzX3Bvc2luZ19hdF90aGVfTmF0aW9uYWxfTW9udW1lbnRfb2ZfU2NvdGxhbmQuanBnJyxcclxuICAgIGFkZHJlc3M6J3Njb3RsYW5kJyxcclxuICAgIGRlc2NyaXB0aW9uOidUaGlzIGlzIHNlY29uZCBtZWV0dXAnXHJcbn0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBIb21lcGFnZShwcm9wcyl7XHJcbiAgICByZXR1cm4oIFxyXG4gICAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9IHtwcm9wcy5tZWV0dXBzfSAvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNTaWRlUHJvcHMoY29udGV4dCl7XHJcbiAgICBjb25zdCByZXEgPWNvbnRleHQucmVxO1xyXG4gICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIG1lZXR1cHM6RFVNTVlfTUVFVFVQU1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZXBhZ2UiXSwibmFtZXMiOlsiTWVldHVwTGlzdCIsIkRVTU1ZX01FRVRVUFMiLCJpZCIsInRpdGxlIiwiaW1hZ2UiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJIb21lcGFnZSIsInByb3BzIiwibWVldHVwcyIsImdldFN0YXRpY1NpZGVQcm9wcyIsImNvbnRleHQiLCJyZXEiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});