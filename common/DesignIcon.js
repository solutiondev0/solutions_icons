"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var DesignIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, onClick = _a.onClick, _e = _a.filled, filled = _e === void 0 ? false : _e;
    return ((0, jsx_runtime_1.jsx)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: filled ? color : 'none', xmlns: "http://www.w3.org/2000/svg", className: "ds-icon ds-icon-design ".concat(className), onClick: onClick, style: { cursor: onClick ? 'pointer' : 'default' }, children: filled ? (
        // Filled version
        (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2a10 10 0 100 20 10 10 0 000-20zm-2 15a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1zm4 0a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1zm-2-5a3 3 0 100-6 3 3 0 000 6z" })) : (
        // Outline version
        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "10", stroke: color, strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "3", stroke: color, strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M7 13v2M17 13v2M12 8v1", stroke: color, strokeWidth: "2", strokeLinecap: "round" })] })) }));
};
exports.DesignIcon = DesignIcon;
