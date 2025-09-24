"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var DatabaseIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, onClick = _a.onClick, _e = _a.filled, filled = _e === void 0 ? false : _e;
    return ((0, jsx_runtime_1.jsx)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: filled ? color : 'none', xmlns: "http://www.w3.org/2000/svg", className: "ds-icon ds-icon-database ".concat(className), onClick: onClick, style: { cursor: onClick ? 'pointer' : 'default' }, children: filled ? (
        // Filled version
        (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2C7.58 2 4 3.79 4 6v12c0 2.21 3.58 4 8 4s8-1.79 8-4V6c0-2.21-3.58-4-8-4zm0 16c-3.31 0-6-.9-6-2s2.69-2 6-2 6 .9 6 2-2.69 2-6 2zm0-12c-3.31 0-6 .9-6 2s2.69 2 6 2 6-.9 6-2-2.69-2-6-2z" })) : (
        // Outline version
        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", stroke: color, strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3", stroke: color, strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5", stroke: color, strokeWidth: "2" })] })) }));
};
exports.DatabaseIcon = DatabaseIcon;
