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

/***/ "./components/ParticlesContainer.js":
/*!******************************************!*\
  !*** ./components/ParticlesContainer.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tsparticles */ \"./node_modules/react-tsparticles/esm/index.js\");\n/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsparticles */ \"./node_modules/tsparticles/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst ParticlesContainer = ()=>{\n    _s();\n    //init\n    const particlesInit = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (engine)=>{\n        await (0,tsparticles__WEBPACK_IMPORTED_MODULE_3__.loadFull)(engine);\n    }, []);\n    const particlesLoaded = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_tsparticles__WEBPACK_IMPORTED_MODULE_1__.Particles, {\n        className: \"w-full h-full absolute translate-z-0\",\n        id: \"tsparticles\",\n        init: particlesInit,\n        loaded: particlesLoaded,\n        options: {\n            fullScreen: {\n                enable: false\n            },\n            background: {\n                color: {\n                    value: \"\"\n                }\n            },\n            fpsLimit: 120,\n            interactivity: {\n                events: {\n                    onClick: {\n                        enabled: false,\n                        mode: \"push\"\n                    },\n                    onHover: {\n                        enable: true,\n                        mode: \"repulse\"\n                    }\n                },\n                resize: true\n            },\n            modes: {\n                push: {\n                    quantity: 100\n                },\n                resulse: {\n                    distance: 100,\n                    duration: 0.9\n                }\n            },\n            particles: {\n                color: {\n                    value: \"rgb(255 160 36)\"\n                },\n                links: {\n                    color: \"#ffffff\",\n                    distance: 150,\n                    enable: true,\n                    opacity: 0.5,\n                    width: 1\n                },\n                collisions: {\n                    enable: true\n                },\n                move: {\n                    direction: \"none\",\n                    enable: true,\n                    outModes: {\n                        default: \"bounce\"\n                    },\n                    random: false,\n                    speed: 1,\n                    straight: false\n                },\n                number: {\n                    density: {\n                        enable: true,\n                        area: 900\n                    },\n                    value: 90\n                },\n                opacity: {\n                    value: 0.5\n                },\n                shape: {\n                    type: \"circle\"\n                },\n                size: {\n                    value: {\n                        min: 1,\n                        max: 5\n                    }\n                }\n            },\n            detectRetina: true\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mateu\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\WorkSpace\\\\Portif\\xf3lio_V2.0\\\\components\\\\ParticlesContainer.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ParticlesContainer, \"PjleD03JXt5mR6AE5+SxrsWvXBc=\");\n_c = ParticlesContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ParticlesContainer);\nvar _c;\n$RefreshReg$(_c, \"ParticlesContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhcnRpY2xlc0NvbnRhaW5lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEM7QUFDUDtBQUNlO0FBRXRELE1BQU1LLHFCQUFxQixJQUFNOztJQUMvQixNQUFNO0lBQ04sTUFBTUMsZ0JBQWdCSCxrREFBV0EsQ0FBQyxPQUFPSSxTQUFXO1FBQ2xELE1BQU1OLHFEQUFRQSxDQUFDTTtJQUNqQixHQUFHLEVBQUU7SUFFTCxNQUFNQyxrQkFBa0JMLGtEQUFXQSxDQUFDLFVBQVksQ0FBQyxHQUFHLEVBQUU7SUFDdEQscUJBQ0UsOERBQUNILHdEQUFTQTtRQUNSUyxXQUFVO1FBQ1ZDLElBQUc7UUFDSEMsTUFBTUw7UUFDTk0sUUFBUUo7UUFDUkssU0FBUztZQUNQQyxZQUFZO2dCQUFFQyxRQUFRLEtBQUs7WUFBQztZQUM1QkMsWUFBWTtnQkFDVkMsT0FBTztvQkFDTEMsT0FBTztnQkFDVDtZQUNGO1lBQ0FDLFVBQVU7WUFDVkMsZUFBZTtnQkFDYkMsUUFBUTtvQkFDTkMsU0FBUzt3QkFDUEMsU0FBUyxLQUFLO3dCQUNkQyxNQUFNO29CQUNSO29CQUNBQyxTQUFTO3dCQUNQVixRQUFRLElBQUk7d0JBQ1pTLE1BQU07b0JBQ1I7Z0JBQ0Y7Z0JBQ0FFLFFBQVEsSUFBSTtZQUNkO1lBQ0FDLE9BQU87Z0JBQ0xDLE1BQU07b0JBQ0pDLFVBQVU7Z0JBQ1o7Z0JBQ0FDLFNBQVM7b0JBQ1BDLFVBQVU7b0JBQ1ZDLFVBQVU7Z0JBQ1o7WUFDRjtZQUNBQyxXQUFXO2dCQUNUaEIsT0FBTztvQkFDTEMsT0FBTztnQkFDVDtnQkFDQWdCLE9BQU87b0JBQ0xqQixPQUFPO29CQUNQYyxVQUFVO29CQUNWaEIsUUFBUSxJQUFJO29CQUNab0IsU0FBUztvQkFDVEMsT0FBTztnQkFDVDtnQkFDQUMsWUFBWTtvQkFDVnRCLFFBQVEsSUFBSTtnQkFDZDtnQkFDQXVCLE1BQU07b0JBQ0pDLFdBQVc7b0JBQ1h4QixRQUFRLElBQUk7b0JBQ1p5QixVQUFVO3dCQUNSQyxTQUFTO29CQUNYO29CQUNBQyxRQUFRLEtBQUs7b0JBQ2JDLE9BQU87b0JBQ1BDLFVBQVUsS0FBSztnQkFDakI7Z0JBQ0FDLFFBQVE7b0JBQ05DLFNBQVM7d0JBQ1AvQixRQUFRLElBQUk7d0JBQ1pnQyxNQUFNO29CQUNSO29CQUNBN0IsT0FBTztnQkFDVDtnQkFDQWlCLFNBQVM7b0JBQ1BqQixPQUFPO2dCQUNUO2dCQUNBOEIsT0FBTztvQkFDTEMsTUFBTTtnQkFDUjtnQkFDQUMsTUFBTTtvQkFDSmhDLE9BQU87d0JBQUVpQyxLQUFLO3dCQUFHQyxLQUFLO29CQUFFO2dCQUMxQjtZQUNGO1lBQ0FDLGNBQWMsSUFBSTtRQUNwQjs7Ozs7O0FBR047R0F4Rk1oRDtLQUFBQTtBQTBGTiwrREFBZUEsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGFydGljbGVzQ29udGFpbmVyLmpzPzMxZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFydGljbGVzIH0gZnJvbSBcInJlYWN0LXRzcGFydGljbGVzXCI7XG5pbXBvcnQgeyBsb2FkRnVsbCB9IGZyb20gXCJ0c3BhcnRpY2xlc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUGFydGljbGVzQ29udGFpbmVyID0gKCkgPT4ge1xuICAvL2luaXRcbiAgY29uc3QgcGFydGljbGVzSW5pdCA9IHVzZUNhbGxiYWNrKGFzeW5jIChlbmdpbmUpID0+IHtcbiAgICBhd2FpdCBsb2FkRnVsbChlbmdpbmUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcGFydGljbGVzTG9hZGVkID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge30sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8UGFydGljbGVzXG4gICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGFic29sdXRlIHRyYW5zbGF0ZS16LTBcIlxuICAgICAgaWQ9XCJ0c3BhcnRpY2xlc1wiXG4gICAgICBpbml0PXtwYXJ0aWNsZXNJbml0fVxuICAgICAgbG9hZGVkPXtwYXJ0aWNsZXNMb2FkZWR9XG4gICAgICBvcHRpb25zPXt7XG4gICAgICAgIGZ1bGxTY3JlZW46IHsgZW5hYmxlOiBmYWxzZSB9LFxuICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGZwc0xpbWl0OiAxMjAsXG4gICAgICAgIGludGVyYWN0aXZpdHk6IHtcbiAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgIG9uQ2xpY2s6IHtcbiAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgIG1vZGU6IFwicHVzaFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSG92ZXI6IHtcbiAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBtb2RlOiBcInJlcHVsc2VcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXNpemU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVzOiB7XG4gICAgICAgICAgcHVzaDoge1xuICAgICAgICAgICAgcXVhbnRpdHk6IDEwMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc3Vsc2U6IHtcbiAgICAgICAgICAgIGRpc3RhbmNlOiAxMDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC45LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHBhcnRpY2xlczoge1xuICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogXCJyZ2IoMjU1IDE2MCAzNilcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICBkaXN0YW5jZTogMTUwLFxuICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb2xsaXNpb25zOiB7XG4gICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb3ZlOiB7XG4gICAgICAgICAgICBkaXJlY3Rpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3V0TW9kZXM6IHtcbiAgICAgICAgICAgICAgZGVmYXVsdDogXCJib3VuY2VcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICAgICAgc3BlZWQ6IDEsXG4gICAgICAgICAgICBzdHJhaWdodDogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBudW1iZXI6IHtcbiAgICAgICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBhcmVhOiA5MDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFsdWU6IDkwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb3BhY2l0eToge1xuICAgICAgICAgICAgdmFsdWU6IDAuNSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBcImNpcmNsZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdmFsdWU6IHsgbWluOiAxLCBtYXg6IDUgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBkZXRlY3RSZXRpbmE6IHRydWUsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXJ0aWNsZXNDb250YWluZXI7XG4iXSwibmFtZXMiOlsiUGFydGljbGVzIiwibG9hZEZ1bGwiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwiUGFydGljbGVzQ29udGFpbmVyIiwicGFydGljbGVzSW5pdCIsImVuZ2luZSIsInBhcnRpY2xlc0xvYWRlZCIsImNsYXNzTmFtZSIsImlkIiwiaW5pdCIsImxvYWRlZCIsIm9wdGlvbnMiLCJmdWxsU2NyZWVuIiwiZW5hYmxlIiwiYmFja2dyb3VuZCIsImNvbG9yIiwidmFsdWUiLCJmcHNMaW1pdCIsImludGVyYWN0aXZpdHkiLCJldmVudHMiLCJvbkNsaWNrIiwiZW5hYmxlZCIsIm1vZGUiLCJvbkhvdmVyIiwicmVzaXplIiwibW9kZXMiLCJwdXNoIiwicXVhbnRpdHkiLCJyZXN1bHNlIiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsInBhcnRpY2xlcyIsImxpbmtzIiwib3BhY2l0eSIsIndpZHRoIiwiY29sbGlzaW9ucyIsIm1vdmUiLCJkaXJlY3Rpb24iLCJvdXRNb2RlcyIsImRlZmF1bHQiLCJyYW5kb20iLCJzcGVlZCIsInN0cmFpZ2h0IiwibnVtYmVyIiwiZGVuc2l0eSIsImFyZWEiLCJzaGFwZSIsInR5cGUiLCJzaXplIiwibWluIiwibWF4IiwiZGV0ZWN0UmV0aW5hIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ParticlesContainer.js\n"));

/***/ })

});