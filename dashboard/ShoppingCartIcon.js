"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ShoppingCartIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, onClick = _a.onClick, _e = _a.filled, filled = _e === void 0 ? false : _e;
    return ((0, jsx_runtime_1.jsx)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: filled ? color : 'none', xmlns: "http://www.w3.org/2000/svg", className: "ds-icon ds-icon-shopping-cart ".concat(className), onClick: onClick, style: { cursor: onClick ? 'pointer' : 'default' }, children: filled ? (
        // Filled version
        (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 3a1 1 0 000 2h1.22l1.24 6.62A3 3 0 008.36 14H17a1 1 0 000-2H8.36a1 1 0 01-.98-.8L6.78 5H19a1 1 0 01.89 1.45l-3 6A1 1 0 0116 13H9.28a3 3 0 00-2.94 2.44L5.44 20H19a1 1 0 100-2H7.28a1 1 0 01-.98-.8L5.44 14h11.12l2.5-5H5.28l-.5-2.66A1 1 0 003.8 5H3zm12 14a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" })) : (
        // Outline version
        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "9", cy: "21", r: "1", stroke: color, strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("circle", { cx: "20", cy: "21", r: "1", stroke: color, strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] })) }));
};
exports.ShoppingCartIcon = ShoppingCartIcon;
