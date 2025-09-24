"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ImageIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, onClick = _a.onClick, _e = _a.filled, filled = _e === void 0 ? false : _e;
    return ((0, jsx_runtime_1.jsx)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: filled ? color : 'none', xmlns: "http://www.w3.org/2000/svg", className: "ds-icon ds-icon-image ".concat(className), onClick: onClick, style: { cursor: onClick ? 'pointer' : 'default' }, children: filled ? (
        // Filled version
        (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2H4zm14 9a3 3 0 11-6 0 3 3 0 016 0zm-12-3a1 1 0 000 2h6a1 1 0 100-2H6z" })) : (
        // Outline version
        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", stroke: color, strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("circle", { cx: "8.5", cy: "8.5", r: "1.5", stroke: color, strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M21 15l-5-5L5 21", stroke: color, strokeWidth: "2", strokeLinecap: "round" })] })) }));
};
exports.ImageIcon = ImageIcon;
