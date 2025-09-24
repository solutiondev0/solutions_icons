"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var CalendarIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, onClick = _a.onClick, _e = _a.filled, filled = _e === void 0 ? false : _e;
    return ((0, jsx_runtime_1.jsx)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: filled ? color : 'none', xmlns: "http://www.w3.org/2000/svg", className: "ds-icon ds-icon-calendar ".concat(className), onClick: onClick, style: { cursor: onClick ? 'pointer' : 'default' }, children: filled ? (
        // Filled version
        (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 2a1 1 0 00-1 1v1H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V7a3 3 0 00-3-3h-1V3a1 1 0 10-2 0v1H9V3a1 1 0 00-1-1zm11 7H5v10a1 1 0 001 1h12a1 1 0 001-1V9z" })) : (
        // Outline version
        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2", stroke: color, strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M16 2v4M8 2v4M3 10h18", stroke: color, strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01", stroke: color, strokeWidth: "2", strokeLinecap: "round" })] })) }));
};
exports.CalendarIcon = CalendarIcon;
