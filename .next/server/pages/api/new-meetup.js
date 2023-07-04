"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next":
/*!****************************************************!*\
  !*** external "next/dist/lib/import-next-warning" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/lib/import-next-warning");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n// /api /new-meetup\n// POST /api/new-meetup\n\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const { title, image, address, description } = data;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient.connect(\"mongodb+srv://thewizard:wizard0004@cluster0.ahkbhop.mongodb.net/meetups?retryWrites=true&w=majority\");\n        const db = client.db();\n        const meetupsCollections = db.collection(\"meetups\");\n        const result = await meetupsCollections.insertOne(data);\n        console.log(result);\n        client.close();\n        res.status(201).json({\n            message: \"Meetup inserted\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next__WEBPACK_IMPORTED_MODULE_0__.json)()(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG1CQUFtQjtBQUNuQix1QkFBdUI7QUFFRTtBQUVhO0FBRXRDLGVBQWVFLFFBQVNDLEdBQUcsRUFBQ0MsR0FBRztJQUMzQixJQUFHRCxJQUFJRSxXQUFTLFFBQ2hCO1FBQ0ksTUFBTUMsT0FBT0gsSUFBSUk7UUFFakIsTUFBTSxFQUFDQyxLQUFLLEVBQUNDLEtBQUssRUFBQ0MsT0FBTyxFQUFDQyxXQUFXLEVBQUMsR0FBRUw7UUFDekMsTUFBTU0sU0FBUSxNQUFPWCxnREFBV0EsQ0FBQ1ksUUFBUTtRQUN6QyxNQUFNQyxLQUFJRixPQUFPRTtRQUVqQixNQUFNQyxxQkFBbUJELEdBQUdFLFdBQVc7UUFDekMsTUFBTUMsU0FBUyxNQUFNRixtQkFBbUJHLFVBQVVaO1FBQ2xEYSxRQUFRQyxJQUFJSDtRQUVaTCxPQUFPUztRQUVQakIsSUFBSWtCLE9BQU8sS0FBS3RCLEtBQUs7WUFBQ3VCLFNBQVE7UUFBaUI7SUFFakQ7QUFHSjtBQUVBLGlFQUFnQnZCLDBDQUFJQSxHQUFLRSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzPzczOTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gL2FwaSAvbmV3LW1lZXR1cFxyXG4vLyBQT1NUIC9hcGkvbmV3LW1lZXR1cFxyXG5cclxuaW1wb3J0IHtqc29ufSBmcm9tICduZXh0J1xyXG5cclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlciAocmVxLHJlcykge1xyXG4gICAgaWYocmVxLm1ldGhvZD09PSdQT1NUJylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcblxyXG4gICAgICAgIGNvbnN0IHt0aXRsZSxpbWFnZSxhZGRyZXNzLGRlc2NyaXB0aW9ufT0gZGF0YTtcclxuICAgICAgICBjb25zdCBjbGllbnQ9IGF3YWl0ICBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL3RoZXdpemFyZDp3aXphcmQwMDA0QGNsdXN0ZXIwLmFoa2Job3AubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKVxyXG4gICAgICAgIGNvbnN0IGRiID1jbGllbnQuZGIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb25zPWRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb25zLmluc2VydE9uZShkYXRhKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG5cclxuICAgICAgY2xpZW50LmNsb3NlKClcclxuXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHttZXNzYWdlOidNZWV0dXAgaW5zZXJ0ZWQnfSlcclxuXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICBqc29uICgpIChoYW5kbGVyKSJdLCJuYW1lcyI6WyJqc29uIiwiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiY2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb25zIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZSIsInN0YXR1cyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();