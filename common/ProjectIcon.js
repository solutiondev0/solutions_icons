"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ProjectIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, onClick = _a.onClick, _e = _a.filled, filled = _e === void 0 ? false : _e;
    return ((0, jsx_runtime_1.jsx)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: filled ? color : 'none', xmlns: "http://www.w3.org/2000/svg", className: "ds-icon ds-icon-project ".concat(className), onClick: onClick, style: { cursor: onClick ? 'pointer' : 'default' }, children: filled ? (
        // Filled version
        (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4 2a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 000 2h10a1 1 0 100-2H7zm0 4a1 1 0 000 2h4a1 1 0 100-2H7z" })) : (
        // Outline version
        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3 9h18M9 21V9M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z", stroke: color, strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M7 13h10M7 17h6", stroke: color, strokeWidth: "2" })] })) }));
};
exports.ProjectIcon = ProjectIcon;
