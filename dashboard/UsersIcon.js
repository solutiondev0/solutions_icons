"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var UsersIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, onClick = _a.onClick, _e = _a.filled, filled = _e === void 0 ? false : _e;
    return ((0, jsx_runtime_1.jsx)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: filled ? color : 'none', xmlns: "http://www.w3.org/2000/svg", className: "ds-icon ds-icon-users ".concat(className), onClick: onClick, style: { cursor: onClick ? 'pointer' : 'default' }, children: filled ? (
        // Filled version
        (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 4a4 4 0 100 8 4 4 0 000-8zm-6 8a6 6 0 1112 0 6 6 0 01-12 0zm12 2a4 4 0 014 4v2H2v-2a4 4 0 014-4h8z" })) : (
        // Outline version
        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2", stroke: color, strokeWidth: "2", strokeLinecap: "round" }), (0, jsx_runtime_1.jsx)("circle", { cx: "9", cy: "7", r: "4", stroke: color, strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75", stroke: color, strokeWidth: "2", strokeLinecap: "round" })] })) }));
};
exports.UsersIcon = UsersIcon;
