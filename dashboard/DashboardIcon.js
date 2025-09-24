"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var DashboardIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? "currentColor" : _c, _d = _a.className, className = _d === void 0 ? "" : _d, onClick = _a.onClick, _e = _a.filled, filled = _e === void 0 ? false : _e;
    return ((0, jsx_runtime_1.jsx)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: filled ? color : "none", xmlns: "http://www.w3.org/2000/svg", className: "ds-icon ds-icon-dashboard ".concat(className), onClick: onClick, style: { cursor: onClick ? "pointer" : "default" }, children: filled ? (
        // Filled version
        (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm5 2a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1V9a1 1 0 00-1-1H8z" })) : (
        // Outline version
        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", stroke: color, strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M3 9h18M9 21V9", stroke: color, strokeWidth: "2" })] })) }));
};
exports.DashboardIcon = DashboardIcon;
