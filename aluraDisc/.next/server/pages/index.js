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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PaginaInicial)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction Titulo(props) {\n    const Tag = props.tag || 'h1';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"64c651b8d8645af\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[\"000\"]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"/home/leonardo/Documentos/projetos/imersaoAlura/aluraDisc/pages/index.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"64c651b8d8645af\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[\"000\"]\n                ],\n                children: `${Tag}.__jsx-style-dynamic-selector{color:${_config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[\"000\"]};\nfont-size:24px;\nfont-weight:600}`\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n// Componente React\n// function HomePage() {\n//     // JSX\n//     return (\n//         <div>\n//             <GlobalStyle />\n//             <Titulo tag=\"h2\">Boas vindas de volta!</Titulo>\n//             <h2>Discord - Alura Matrix</h2>\n//         </div>\n//     )\n// }\n// export default HomePage\nfunction PaginaInicial() {\n    // const username = 'LeonardoAndrad3';\n    const [username, setUsername] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(\"leonardoAndrad3\");\n    const pagesRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [img, setImg] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(username);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            styleSheet: {\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'center',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[600],\n                backgroundImage: 'url(https://www.securityreport.com.br/wp-content/uploads/2021/09/businessman-protecting-data-personal-information-cyber-security-data-concept-padlock-and-internet-te.jpg)',\n                backgroundRepeat: 'no-repeat',\n                backgroundSize: 'cover',\n                backgroundBlendMode: 'multiply'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'space-between',\n                    flexDirection: {\n                        xs: 'column',\n                        sm: 'row'\n                    },\n                    width: '100%',\n                    maxWidth: '700px',\n                    borderRadius: '8px',\n                    padding: '32px',\n                    margin: '16px',\n                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[900]\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        as: \"form\",\n                        onSubmit: (event)=>{\n                            event.preventDefault();\n                            pagesRouter.push(`/chat?user=${username}`);\n                        },\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            justifyContent: 'center',\n                            width: {\n                                xs: '100%',\n                                sm: '50%'\n                            },\n                            textAlign: 'center',\n                            marginBottom: '32px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                styleSheet: {\n                                    width: \"50px\",\n                                    minHeight: \"50px\"\n                                },\n                                src: \"https://cdn-icons.flaticon.com/png/512/2592/premium/2592258.png?token=exp=1643205182~hmac=12b2baaa947ab2b7d677e3105eb9c4b7\"\n                            }, void 0, false, {\n                                fileName: \"/home/leonardo/Documentos/projetos/imersaoAlura/aluraDisc/pages/index.js\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Titulo, {\n                                tag: \"h2\",\n                                children: \"Welcome everyone\"\n                            }, void 0, false, {\n                                fileName: \"/home/leonardo/Documentos/projetos/imersaoAlura/aluraDisc/pages/index.js\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body3\",\n                                styleSheet: {\n                                    marginBottom: '32px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[300]\n                                },\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_4__.name\n                            }, void 0, false, {\n                                fileName: \"/home/leonardo/Documentos/projetos/imersaoAlura/aluraDisc/pages/index.js\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                value: username,\n                                onChange: (event)=>{\n                                    const { value  } = event.target;\n                                    setUsername(value);\n                                    console.log(value);\n                                    if (value.length > 2) {\n                                        setImg(value);\n                                    } else {\n                                        setImg();\n                                    }\n                                },\n                                fullWidth: true,\n                                textFieldColors: {\n                                    neutral: {\n                                        textColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[100],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[400],\n                                        mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[\"050\"],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[700]\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/leonardo/Documentos/projetos/imersaoAlura/aluraDisc/pages/index.js\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                type: \"submit\",\n                                label: \"Entrar\",\n                                fullWidth: true,\n                                buttonColors: {\n                                    contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[\"000\"],\n                                    mainColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[200],\n                                    mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[100],\n                                    mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[\"050\"]\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/leonardo/Documentos/projetos/imersaoAlura/aluraDisc/pages/index.js\",\n                                lineNumber: 139,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/leonardo/Documentos/projetos/imersaoAlura/aluraDisc/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            maxWidth: '200px',\n                            padding: '16px',\n                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[800],\n                            border: '1px solid',\n                            borderColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[0],\n                            borderRadius: '10px',\n                            flex: 1,\n                            minHeight: '240px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                styleSheet: {\n                                    borderRadius: '50%',\n                                    marginBottom: '16px'\n                                },\n                                src: `https://github.com/${img}.png`\n                            }, void 0, false, {\n                                fileName: \"/home/leonardo/Documentos/projetos/imersaoAlura/aluraDisc/pages/index.js\",\n                                lineNumber: 178,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body4\",\n                                styleSheet: {\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[200],\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[900],\n                                    padding: '3px 10px',\n                                    borderRadius: '1000px'\n                                },\n                                children: username\n                            }, void 0, false, {\n                                fileName: \"/home/leonardo/Documentos/projetos/imersaoAlura/aluraDisc/pages/index.js\",\n                                lineNumber: 187,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/leonardo/Documentos/projetos/imersaoAlura/aluraDisc/pages/index.js\",\n                        lineNumber: 163,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/leonardo/Documentos/projetos/imersaoAlura/aluraDisc/pages/index.js\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/leonardo/Documentos/projetos/imersaoAlura/aluraDisc/pages/index.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RWpFLHFFQUFvQztnQ0FDdkQsQ0FBQzs7Ozs7Ozs7Ozs7O2dHQWVKTixxREFBRzt3QkFDRnVCLFVBQVUsRUFBRSxDQUFDOzRCQUNYQyxPQUFPLEVBQUUsQ0FBTTs0QkFDZlMsYUFBYSxFQUFFLENBQVE7NEJBQ3ZCUixVQUFVLEVBQUUsQ0FBUTs0QkFDcEJZLFFBQVEsRUFBRSxDQUFPOzRCQUNqQkUsT0FBTyxFQUFFLENBQU07NEJBQ2ZaLGVBQWUsRUFBRXJCLG9FQUFxQzs0QkFDdERrRSxNQUFNLEVBQUUsQ0FBVzs0QkFDbkJDLFdBQVcsRUFBRW5FLGtFQUFrQzs0QkFDL0NnQyxZQUFZLEVBQUUsQ0FBTTs0QkFDcEJvQyxJQUFJLEVBQUUsQ0FBQzs0QkFDUHpCLFNBQVMsRUFBRSxDQUFPO3dCQUNwQixDQUFDOzt3R0FFQTdDLHVEQUFLO2dDQUNKbUIsVUFBVSxFQUFFLENBQUM7b0NBQ1hlLFlBQVksRUFBRSxDQUFLO29DQUNuQlUsWUFBWSxFQUFFLENBQU07Z0NBQ3RCLENBQUM7Z0NBRURFLEdBQUcsR0FBRyxtQkFBbUIsRUFBRTdCLEdBQUcsQ0FBQyxJQUFJOzs7Ozs7d0dBR3BDbkIsc0RBQUk7Z0NBQ0hpRCxPQUFPLEVBQUMsQ0FBTztnQ0FDZjVCLFVBQVUsRUFBRSxDQUFDO29DQUNYNkIsS0FBSyxFQUFFOUMsb0VBQW9DO29DQUMzQ3FCLGVBQWUsRUFBRXJCLG9FQUFvQztvQ0FDckRpQyxPQUFPLEVBQUUsQ0FBVTtvQ0FDbkJELFlBQVksRUFBRSxDQUFRO2dDQUN4QixDQUFDOzBDQUVBckIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db21TZWN1cml0ZS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UgfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmZ1bmN0aW9uIFRpdHVsbyhwcm9wcykge1xuICBjb25zdCBUYWcgPSBwcm9wcy50YWcgfHwgJ2gxJztcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRhZz57cHJvcHMuY2hpbGRyZW59PC9UYWc+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAke1RhZ30ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzAwMCddfTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuLy8gQ29tcG9uZW50ZSBSZWFjdFxuLy8gZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4vLyAgICAgLy8gSlNYXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuLy8gICAgICAgICAgICAgPFRpdHVsbyB0YWc9XCJoMlwiPkJvYXMgdmluZGFzIGRlIHZvbHRhITwvVGl0dWxvPlxuLy8gICAgICAgICAgICAgPGgyPkRpc2NvcmQgLSBBbHVyYSBNYXRyaXg8L2gyPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApXG4vLyB9XG4vLyBleHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmFJbmljaWFsKCkge1xuICAvLyBjb25zdCB1c2VybmFtZSA9ICdMZW9uYXJkb0FuZHJhZDMnO1xuXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJsZW9uYXJkb0FuZHJhZDNcIik7XG4gIGNvbnN0IHBhZ2VzUm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtpbWcsIHNldEltZ10gPSBSZWFjdC51c2VTdGF0ZSh1c2VybmFtZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveFxuICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzYwMF0sXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKGh0dHBzOi8vd3d3LnNlY3VyaXR5cmVwb3J0LmNvbS5ici93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wOS9idXNpbmVzc21hbi1wcm90ZWN0aW5nLWRhdGEtcGVyc29uYWwtaW5mb3JtYXRpb24tY3liZXItc2VjdXJpdHktZGF0YS1jb25jZXB0LXBhZGxvY2stYW5kLWludGVybmV0LXRlLmpwZyknLFxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZEJsZW5kTW9kZTogJ211bHRpcGx5JyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHtcbiAgICAgICAgICAgICAgeHM6ICdjb2x1bW4nLFxuICAgICAgICAgICAgICBzbTogJ3JvdycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgbWF4V2lkdGg6ICc3MDBweCcsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc4cHgnLCBwYWRkaW5nOiAnMzJweCcsIG1hcmdpbjogJzE2cHgnLFxuICAgICAgICAgICAgYm94U2hhZG93OiAnMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSknLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbOTAwXSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgey8qIEZvcm11bMOhcmlvICovfVxuICAgICAgIFxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGFzPVwiZm9ybVwiXG4gICAgICAgICAgICBvblN1Ym1pdD17KGV2ZW50KT0+e1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBwYWdlc1JvdXRlci5wdXNoKGAvY2hhdD91c2VyPSR7dXNlcm5hbWV9YCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgd2lkdGg6IHsgeHM6ICcxMDAlJywgc206ICc1MCUnIH0sIHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzMycHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiNTBweFwiLFxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogXCI1MHB4XCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHNyYz0naHR0cHM6Ly9jZG4taWNvbnMuZmxhdGljb24uY29tL3BuZy81MTIvMjU5Mi9wcmVtaXVtLzI1OTIyNTgucG5nP3Rva2VuPWV4cD0xNjQzMjA1MTgyfmhtYWM9MTJiMmJhYWE5NDdhYjJiN2Q2NzdlMzEwNWViOWM0YjcnXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8VGl0dWxvIHRhZz1cImgyXCI+V2VsY29tZSBldmVyeW9uZTwvVGl0dWxvPiBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cImJvZHkzXCIgc3R5bGVTaGVldD17eyBtYXJnaW5Cb3R0b206ICczMnB4JywgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSB9fT5cbiAgICAgICAgICAgICAge2FwcENvbmZpZy5uYW1lfVxuICAgICAgICAgICAgPC9UZXh0PlxuXG57LyogXG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c3VhcmlvIGRpZ2l0b3VcIiwgZXZlbnQpXG5cbiAgICAgICAgICAgICAgICAgIC8vT25kZSBlc3TDoT9cbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgIC8vbXVkYXIgdsOhcmlhdmVsIHBlbG8gdXNlU3RhdGUgZG8gcmVhY3RcblxuICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9fVxuXG4gICAgICAgICAgICAgIC8+ICovfVxuICAgICAgXG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qge3ZhbHVlfSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA+IDIpe1xuICAgICAgICAgICAgICAgICAgc2V0SW1nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgIHNldEltZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cblxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgdGV4dEZpZWxkQ29sb3JzPXt7XG4gICAgICAgICAgICAgICAgbmV1dHJhbDoge1xuICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzEwMF0sXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNDAwXSxcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvckhpZ2hsaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WycwNTAnXSxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgIGxhYmVsPSdFbnRyYXInXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBidXR0b25Db2xvcnM9e3tcbiAgICAgICAgICAgICAgICBjb250cmFzdENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxuICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzIwMF0sXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yTGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVsxMDBdLFxuICAgICAgICAgICAgICAgIG1haW5Db2xvclN0cm9uZzogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WycwNTAnXSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgey8qIEZvcm11bMOhcmlvICovfVxuXG4gICAgICAgICAgICAgIHsvKiA8Qm94XG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMTAwXCJdLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMjAwXCJdLFxuICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjEyMHB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz4gKi99XG5cbiAgICAgICAgICB7LyogUGhvdG8gQXJlYSAqL31cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICBtYXhXaWR0aDogJzIwMHB4JyxcbiAgICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCI4MDBcIl0sXG4gICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzBdLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMjQwcHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHtpbWd9LnBuZ2B9ICBcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5NFwiXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczcHggMTBweCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTAwMHB4J1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dXNlcm5hbWV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+ICBcbiAgICA8Lz5cbiAgKTtcbn0iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwiUmVhY3QiLCJhcHBDb25maWciLCJ1c2VSb3V0ZXIiLCJUaXR1bG8iLCJwcm9wcyIsIlRhZyIsInRhZyIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJjaGlsZHJlbiIsIlBhZ2luYUluaWNpYWwiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlU3RhdGUiLCJwYWdlc1JvdXRlciIsImltZyIsInNldEltZyIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwicHJpbWFyeSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJmbGV4RGlyZWN0aW9uIiwieHMiLCJzbSIsIndpZHRoIiwibWF4V2lkdGgiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm94U2hhZG93IiwiYXMiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwibWluSGVpZ2h0Iiwic3JjIiwidmFyaWFudCIsImNvbG9yIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZnVsbFdpZHRoIiwidGV4dEZpZWxkQ29sb3JzIiwibmV1dHJhbCIsInRleHRDb2xvciIsIm1haW5Db2xvciIsIm1haW5Db2xvckhpZ2hsaWdodCIsInR5cGUiLCJsYWJlbCIsImJ1dHRvbkNvbG9ycyIsImNvbnRyYXN0Q29sb3IiLCJtYWluQ29sb3JMaWdodCIsIm1haW5Db2xvclN0cm9uZyIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiZmxleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@skynexui/components":
/*!***************************************!*\
  !*** external "@skynexui/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Security - Community (ProtectionScan)","stickers":["http://2.bp.blogspot.com/-d21tffsTIQo/U_H9QjC69gI/AAAAAAAAKqM/wnvOyUr6a_I/s1600/Pikachu%2B2.gif","https://media1.giphy.com/media/BdghqxNFV4efm/200.gif","https://c.tenor.com/TKpmh4WFEsAAAAAC/alura-gaveta-filmes.gif","https://i.pinimg.com/originals/0b/1c/23/0b1c2307c83e1ebdeed72e41b9a058ad.gif","https://c.tenor.com/VylWt5lyjBoAAAAC/omg-yes.gif","https://i.pinimg.com/originals/96/34/c5/9634c520c9a3cd4e7f23190bb2c96500.gif"],"theme":{"colors":{"primary":{"100":"#2D488B","150":"#FCDC4D","200":"#28407B","300":"#23386C","400":"#1E305C","500":"#19284D","600":"#14203E","700":"#0F182E","800":"#0A101F","900":"#05080F","050":"#324F9A"},"neutrals":{"100":"#E4E7EB","200":"#CBD2D9","300":"#9AA5B1","400":"#52667A","500":"#313D49","600":"#29333D","700":"#212931","800":"#181F25","900":"#101418","999":"#080A0C","000":"#FFFFFF","050":"#F5F7FA"},"rgb":{"100":"#E4E7EB","200":"#CBD2D9","300":"#B7E4C7","400":"#95D5B2","500":"#74C69D","600":"#52B788","700":"#40916C","800":"#2D6A4F","900":"#1B4332","999":"#081C15","000":"#FFFFFF","050":"#F5F7FA"}}}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();