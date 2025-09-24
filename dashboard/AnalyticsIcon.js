"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var AnalyticsIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, onClick = _a.onClick, _e = _a.filled, filled = _e === void 0 ? false : _e;
    return ((0, jsx_runtime_1.jsx)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: filled ? color : 'none', xmlns: "http://www.w3.org/2000/svg", className: "ds-icon ds-icon-analytics ".concat(className), onClick: onClick, style: { cursor: onClick ? 'pointer' : 'default' }, children: filled ? (
        // Filled version
        (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 3a1 1 0 000 2h18a1 1 0 100-2H3zm2 4a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H5zm7 3a1 1 0 00-1 1v9a1 1 0 001 1h4a1 1 0 001-1v-9a1 1 0 00-1-1h-4zm7 5a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4z" })) : (
        // Outline version
        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3 3v18h18", stroke: color, strokeWidth: "2", strokeLinecap: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M7 7v10M11 10v7M15 13v4M19 16v1", stroke: color, strokeWidth: "2", strokeLinecap: "round" })] })) }));
};
exports.AnalyticsIcon = AnalyticsIcon;
