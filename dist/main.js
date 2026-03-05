/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stopwatch_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stopwatch-load.js */ \"./src/stopwatch-load.js\");\n//main file, add event listeners.\r\n\r\n\r\n\r\n\r\nconst stopwatchWrapper = document.getElementById(\"stopwatchWrapper\");\r\n\r\n\r\nconst clockBtn = document.getElementById(\"clockBtn\");\r\nclockBtn.addEventListener(\"click\", () =>{\r\n\r\n});\r\n\r\nconst stopwatchBtn = document.getElementById(\"stopwatchBtn\");\r\nstopwatchBtn.addEventListener(\"click\", () =>{\r\n    stopwatchWrapper.innerHTML = \"\";\r\n    (0,_stopwatch_load_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\r\nconst timerBtn = document.getElementById(\"timerBtn\");\r\ntimerBtn.addEventListener(\"click\", () =>{\r\n\r\n});\r\n\r\nconst alarmBtn = document.getElementById(\"alarmBtn\");\r\nalarmBtn.addEventListener(\"click\", () =>{\r\n\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ2dEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFhO0FBQ2pCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9wLXdhdGNoLy4vc3JjL2luZGV4LmpzPzIxMDkiXSwic291cmNlc0NvbnRlbnQiOlsiLy9tYWluIGZpbGUsIGFkZCBldmVudCBsaXN0ZW5lcnMuXHJcblxyXG5pbXBvcnQgbG9hZFN0b3B3YXRjaCBmcm9tIFwiLi9zdG9wd2F0Y2gtbG9hZC5qc1wiO1xyXG5cclxuXHJcbmNvbnN0IHN0b3B3YXRjaFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3B3YXRjaFdyYXBwZXJcIik7XHJcblxyXG5cclxuY29uc3QgY2xvY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb2NrQnRuXCIpO1xyXG5jbG9ja0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XHJcblxyXG59KTtcclxuXHJcbmNvbnN0IHN0b3B3YXRjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcHdhdGNoQnRuXCIpO1xyXG5zdG9wd2F0Y2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xyXG4gICAgc3RvcHdhdGNoV3JhcHBlci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbG9hZFN0b3B3YXRjaCgpO1xyXG59KTtcclxuXHJcbmNvbnN0IHRpbWVyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lckJ0blwiKTtcclxudGltZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xyXG5cclxufSk7XHJcblxyXG5jb25zdCBhbGFybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxhcm1CdG5cIik7XHJcbmFsYXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcclxuXHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/stopwatch-load.js"
/*!*******************************!*\
  !*** ./src/stopwatch-load.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadStopwatch)\n/* harmony export */ });\nfunction loadStopwatch(){\r\n    \r\n    const stopwatchWrapper = document.getElementById(\"stopwatchWrapper\");\r\n    stopwatchWrapper.id = \"stopwatchWrapper\";\r\n    \r\n    const stopwatchh1 = document.createElement(\"h1\");\r\n    stopwatchh1.textContent = \"Stop-Watch\";\r\n    stopwatchWrapper.appendChild(stopwatchh1);\r\n\r\n    const stopwatchClockDiv = document.createElement(\"div\");\r\n    stopwatchClockDiv.id = \"clock\";\r\n    stopwatchWrapper.appendChild(stopwatchClockDiv);\r\n\r\n    const stopwatchTime = document.createElement(\"h1\");\r\n    stopwatchTime.textContent = \"00:00:00\";\r\n    stopwatchTime.id = \"time\";\r\n    stopwatchClockDiv.appendChild(stopwatchTime);\r\n\r\n    const lapTimersDiv = document.createElement(\"div\");\r\n    lapTimersDiv.id = \"lapTimers\";\r\n    stopwatchClockDiv.appendChild(lapTimersDiv);\r\n\r\n    const buttonContainer = document.createElement(\"div\");\r\n    buttonContainer.id = \"buttonContainer\";\r\n    stopwatchClockDiv.appendChild(buttonContainer);\r\n\r\n    //need to add the icons to the buttons.\r\n    const resetBtn = document.createElement(\"button\");\r\n    resetBtn.id = \"reset\";\r\n    const toggleBtn = document.createElement(\"button\");\r\n    toggleBtn.id = \"toggleBtn\";\r\n    const lapBtn = document.createElement(\"button\");\r\n    lapBtn.id = \"lap\";\r\n\r\n    buttonContainer.append(resetBtn, toggleBtn, lapBtn);\r\n\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcHdhdGNoLWxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RvcC13YXRjaC8uL3NyYy9zdG9wd2F0Y2gtbG9hZC5qcz81YjU0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRTdG9wd2F0Y2goKXtcclxuICAgIFxyXG4gICAgY29uc3Qgc3RvcHdhdGNoV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcHdhdGNoV3JhcHBlclwiKTtcclxuICAgIHN0b3B3YXRjaFdyYXBwZXIuaWQgPSBcInN0b3B3YXRjaFdyYXBwZXJcIjtcclxuICAgIFxyXG4gICAgY29uc3Qgc3RvcHdhdGNoaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBzdG9wd2F0Y2hoMS50ZXh0Q29udGVudCA9IFwiU3RvcC1XYXRjaFwiO1xyXG4gICAgc3RvcHdhdGNoV3JhcHBlci5hcHBlbmRDaGlsZChzdG9wd2F0Y2hoMSk7XHJcblxyXG4gICAgY29uc3Qgc3RvcHdhdGNoQ2xvY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3RvcHdhdGNoQ2xvY2tEaXYuaWQgPSBcImNsb2NrXCI7XHJcbiAgICBzdG9wd2F0Y2hXcmFwcGVyLmFwcGVuZENoaWxkKHN0b3B3YXRjaENsb2NrRGl2KTtcclxuXHJcbiAgICBjb25zdCBzdG9wd2F0Y2hUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgc3RvcHdhdGNoVGltZS50ZXh0Q29udGVudCA9IFwiMDA6MDA6MDBcIjtcclxuICAgIHN0b3B3YXRjaFRpbWUuaWQgPSBcInRpbWVcIjtcclxuICAgIHN0b3B3YXRjaENsb2NrRGl2LmFwcGVuZENoaWxkKHN0b3B3YXRjaFRpbWUpO1xyXG5cclxuICAgIGNvbnN0IGxhcFRpbWVyc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsYXBUaW1lcnNEaXYuaWQgPSBcImxhcFRpbWVyc1wiO1xyXG4gICAgc3RvcHdhdGNoQ2xvY2tEaXYuYXBwZW5kQ2hpbGQobGFwVGltZXJzRGl2KTtcclxuXHJcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYnV0dG9uQ29udGFpbmVyLmlkID0gXCJidXR0b25Db250YWluZXJcIjtcclxuICAgIHN0b3B3YXRjaENsb2NrRGl2LmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XHJcblxyXG4gICAgLy9uZWVkIHRvIGFkZCB0aGUgaWNvbnMgdG8gdGhlIGJ1dHRvbnMuXHJcbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICByZXNldEJ0bi5pZCA9IFwicmVzZXRcIjtcclxuICAgIGNvbnN0IHRvZ2dsZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICB0b2dnbGVCdG4uaWQgPSBcInRvZ2dsZUJ0blwiO1xyXG4gICAgY29uc3QgbGFwQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGxhcEJ0bi5pZCA9IFwibGFwXCI7XHJcblxyXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChyZXNldEJ0biwgdG9nZ2xlQnRuLCBsYXBCdG4pO1xyXG5cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/stopwatch-load.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;