"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalLinkIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ExternalLinkIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, onClick = _a.onClick, _e = _a.filled, filled = _e === void 0 ? false : _e;
    return ((0, jsx_runtime_1.jsx)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: filled ? color : 'none', xmlns: "http://www.w3.org/2000/svg", className: "ds-icon ds-icon-external-link ".concat(className), onClick: onClick, style: { cursor: onClick ? 'pointer' : 'default' }, children: filled ? (
        // Filled version
        (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4h-2v4H6V8h4V6zm4 0h6v6h-2V8h-4V6zm2 4V8h2v2h-2z" })) : (
        // Outline version
        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6", stroke: color, strokeWidth: "2", strokeLinecap: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M15 3h6v6M10 14L21 3", stroke: color, strokeWidth: "2", strokeLinecap: "round" })] })) }));
};
exports.ExternalLinkIcon = ExternalLinkIcon;
