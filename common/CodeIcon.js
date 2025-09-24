"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var CodeIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, onClick = _a.onClick, _e = _a.filled, filled = _e === void 0 ? false : _e;
    return ((0, jsx_runtime_1.jsx)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: filled ? color : 'none', xmlns: "http://www.w3.org/2000/svg", className: "ds-icon ds-icon-code ".concat(className), onClick: onClick, style: { cursor: onClick ? 'pointer' : 'default' }, children: filled ? (
        // Filled version
        (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2a10 10 0 100 20 10 10 0 000-20zM8.7 8.7a1 1 0 011.4 0l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.4-1.4L12 12 8.7 8.7a1 1 0 010-1.4z" })) : (
        // Outline version
        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M16 18l6-6-6-6M8 6l-6 6 6 6", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M14 18l6-6-6-6", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] })) }));
};
exports.CodeIcon = CodeIcon;
