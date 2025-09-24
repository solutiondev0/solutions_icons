"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwardIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var AwardIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, onClick = _a.onClick, _e = _a.filled, filled = _e === void 0 ? false : _e;
    return ((0, jsx_runtime_1.jsx)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: filled ? color : 'none', xmlns: "http://www.w3.org/2000/svg", className: "ds-icon ds-icon-award ".concat(className), onClick: onClick, style: { cursor: onClick ? 'pointer' : 'default' }, children: filled ? (
        // Filled version
        (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2a7 7 0 00-7 7c0 2.5 1.5 4.5 3.5 5.5L7 22l5-3 5 3-1.5-7.5c2-1 3.5-3 3.5-5.5a7 7 0 00-7-7zm0 10a3 3 0 100-6 3 3 0 000 6z" })) : (
        // Outline version
        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "8", r: "6", stroke: color, strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M8.21 13.89L7 23l5-3 5 3-1.21-9.11", stroke: color, strokeWidth: "2", strokeLinecap: "round" })] })) }));
};
exports.AwardIcon = AwardIcon;
