"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedInIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var LinkedInIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, onClick = _a.onClick, _e = _a.filled, filled = _e === void 0 ? false : _e;
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: filled ? color : 'none', xmlns: "http://www.w3.org/2000/svg", className: "ds-icon ds-icon-linkedin ".concat(className), onClick: onClick, style: { cursor: onClick ? 'pointer' : 'default' }, children: [(0, jsx_runtime_1.jsx)("path", { d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9z", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }), (0, jsx_runtime_1.jsx)("circle", { cx: "4", cy: "4", r: "2", stroke: color, strokeWidth: "2", fill: "none" })] }));
};
exports.LinkedInIcon = LinkedInIcon;
