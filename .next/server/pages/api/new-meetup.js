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

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const { title, image, address, description } = data;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://thewizard:wizard0004@cluster0.ahkbhop.mongodb.net/meetups?retryWrites=true&w=majority\");\n        const db = client.db();\n        const meetupsCollection = db.collection(\"meetups\");\n        const result = await meetupsCollection.insertOne(data);\n        console.log(result);\n        client.close();\n        try {\n            res.status(201).json({\n                message: \"Meetup inserted\"\n            });\n        } catch (error) {\n            console.log(\"Error sending response:\", error);\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDc0M7QUFFdEMsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzNCLElBQUlELElBQUlFLFdBQVcsUUFBUTtRQUN6QixNQUFNQyxPQUFPSCxJQUFJSTtRQUVqQixNQUFNLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFdBQVcsRUFBRSxHQUFHTDtRQUMvQyxNQUFNTSxTQUFTLE1BQU1YLGdEQUFXQSxDQUFDWSxRQUFRO1FBQ3pDLE1BQU1DLEtBQUtGLE9BQU9FO1FBRWxCLE1BQU1DLG9CQUFvQkQsR0FBR0UsV0FBVztRQUN4QyxNQUFNQyxTQUFTLE1BQU1GLGtCQUFrQkcsVUFBVVo7UUFDakRhLFFBQVFDLElBQUlIO1FBRVpMLE9BQU9TO1FBRVAsSUFBSTtZQUNGakIsSUFBSWtCLE9BQU8sS0FBS0MsS0FBSztnQkFBRUMsU0FBUztZQUFrQjtRQUNwRCxFQUFFLE9BQU9DLE9BQU87WUFDZE4sUUFBUUMsSUFBSSwyQkFBMkJLO1FBQ3pDO0lBQ0Y7QUFDRjtBQUVBLGlFQUFldkIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz83Mzk0Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICBcclxuICAgICAgY29uc3QgeyB0aXRsZSwgaW1hZ2UsIGFkZHJlc3MsIGRlc2NyaXB0aW9uIH0gPSBkYXRhO1xyXG4gICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL3RoZXdpemFyZDp3aXphcmQwMDA0QGNsdXN0ZXIwLmFoa2Job3AubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcclxuICAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBcclxuICAgICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICBcclxuICAgICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAnTWVldHVwIGluc2VydGVkJyB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3Igc2VuZGluZyByZXNwb25zZTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuICAiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiY2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

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