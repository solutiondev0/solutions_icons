"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var CertificateIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, _d = _a.className, className = _d === void 0 ? '' : _d, onClick = _a.onClick, _e = _a.filled, filled = _e === void 0 ? false : _e;
    return ((0, jsx_runtime_1.jsx)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: filled ? color : 'none', xmlns: "http://www.w3.org/2000/svg", className: "ds-icon ds-icon-certificate ".concat(className), onClick: onClick, style: { cursor: onClick ? 'pointer' : 'default' }, children: filled ? (
        // Filled version
        (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm8 12a4 4 0 100-8 4 4 0 000 8zm-2-4a2 2 0 114 0 2 2 0 01-4 0zm6-6H8v2h8V6z" })) : (
        // Outline version
        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z", stroke: color, strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "3", stroke: color, strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M8 6h8", stroke: color, strokeWidth: "2", strokeLinecap: "round" })] })) }));
};
exports.CertificateIcon = CertificateIcon;
