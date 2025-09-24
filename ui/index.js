"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DividerIcon = exports.ChipIcon = exports.AvatarIcon = exports.BadgeIcon = exports.PaginationIcon = exports.ToggleSwitchIcon = exports.AccordionIcon = exports.ListIcon = exports.TableIcon = exports.TooltipIcon = exports.ProgressBarIcon = exports.SpinnerIcon = exports.ModalIcon = exports.SidebarIcon = exports.GridIcon = exports.SelectDropdownIcon = exports.RadioButtonIcon = exports.CheckboxIcon = exports.InputFieldIcon = exports.BreadcrumbIcon = exports.HamburgerMenuIcon = exports.SliderIcon = exports.CarouselIcon = exports.CardStackIcon = exports.CardIcon = exports.SubmitButtonIcon = exports.ButtonIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
// Button Icons
var ButtonIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "6", width: "18", height: "12", rx: "3" }), (0, jsx_runtime_1.jsx)("rect", { x: "7", y: "10", width: "10", height: "4", rx: "1", fill: "white" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "6", width: "18", height: "12", rx: "3" }), (0, jsx_runtime_1.jsx)("rect", { x: "7", y: "10", width: "10", height: "4", rx: "1" })] }));
};
exports.ButtonIcon = ButtonIcon;
var SubmitButtonIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "6", width: "18", height: "12", rx: "3" }), (0, jsx_runtime_1.jsx)("path", { d: "M9 12L11 14L15 10", stroke: "white", strokeWidth: "2", fill: "none" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "6", width: "18", height: "12", rx: "3" }), (0, jsx_runtime_1.jsx)("path", { d: "M9 12L11 14L15 10", strokeWidth: strokeWidth })] }));
};
exports.SubmitButtonIcon = SubmitButtonIcon;
// Card Icons
var CardIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }), (0, jsx_runtime_1.jsx)("rect", { x: "5", y: "8", width: "14", height: "3", fill: "white" }), (0, jsx_runtime_1.jsx)("rect", { x: "5", y: "13", width: "8", height: "2", fill: "white" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }), (0, jsx_runtime_1.jsx)("line", { x1: "5", y1: "8", x2: "19", y2: "8" }), (0, jsx_runtime_1.jsx)("line", { x1: "5", y1: "12", x2: "19", y2: "12" }), (0, jsx_runtime_1.jsx)("line", { x1: "5", y1: "16", x2: "13", y2: "16" })] }));
};
exports.CardIcon = CardIcon;
var CardStackIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "4", width: "18", height: "14", rx: "2" }), (0, jsx_runtime_1.jsx)("rect", { x: "5", y: "8", width: "18", height: "14", rx: "2", fill: "currentColor", fillOpacity: "0.7", transform: "translate(0 -2)" }), (0, jsx_runtime_1.jsx)("rect", { x: "7", y: "12", width: "18", height: "14", rx: "2", fill: "currentColor", fillOpacity: "0.4", transform: "translate(0 -4)" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "4", width: "18", height: "14", rx: "2" }), (0, jsx_runtime_1.jsx)("rect", { x: "5", y: "6", width: "18", height: "14", rx: "2", transform: "translate(0 -2)" }), (0, jsx_runtime_1.jsx)("rect", { x: "7", y: "8", width: "18", height: "14", rx: "2", transform: "translate(0 -4)" })] }));
};
exports.CardStackIcon = CardStackIcon;
// Carousel Icons
var CarouselIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }), (0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "17", r: "1", fill: "white" }), (0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "17", r: "1", fill: "white" }), (0, jsx_runtime_1.jsx)("circle", { cx: "17", cy: "17", r: "1", fill: "white" }), (0, jsx_runtime_1.jsx)("rect", { x: "5", y: "8", width: "14", height: "6", rx: "1", fill: "white", fillOpacity: "0.8" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }), (0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "17", r: "1" }), (0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "17", r: "1" }), (0, jsx_runtime_1.jsx)("circle", { cx: "17", cy: "17", r: "1" }), (0, jsx_runtime_1.jsx)("rect", { x: "5", y: "8", width: "14", height: "6", rx: "1" })] }));
};
exports.CarouselIcon = CarouselIcon;
var SliderIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "10", width: "18", height: "4", rx: "2" }), (0, jsx_runtime_1.jsx)("circle", { cx: "8", cy: "12", r: "2", fill: "white" }), (0, jsx_runtime_1.jsx)("circle", { cx: "16", cy: "12", r: "2", fill: "white" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("line", { x1: "4", y1: "12", x2: "20", y2: "12" }), (0, jsx_runtime_1.jsx)("circle", { cx: "8", cy: "12", r: "2" }), (0, jsx_runtime_1.jsx)("circle", { cx: "16", cy: "12", r: "2" })] }));
};
exports.SliderIcon = SliderIcon;
// Navigation Icons
var HamburgerMenuIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "5", width: "18", height: "2", rx: "1" }), (0, jsx_runtime_1.jsx)("rect", { x: "3", y: "11", width: "18", height: "2", rx: "1" }), (0, jsx_runtime_1.jsx)("rect", { x: "3", y: "17", width: "18", height: "2", rx: "1" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("line", { x1: "3", y1: "6", x2: "21", y2: "6" }), (0, jsx_runtime_1.jsx)("line", { x1: "3", y1: "12", x2: "21", y2: "12" }), (0, jsx_runtime_1.jsx)("line", { x1: "3", y1: "18", x2: "21", y2: "18" })] }));
};
exports.HamburgerMenuIcon = HamburgerMenuIcon;
var BreadcrumbIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("path", { d: "M10 7L15 12L10 17", stroke: "white", strokeWidth: "2", fill: "none" }), (0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "12", r: "1", fill: "white" }), (0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "1", fill: "white" }), (0, jsx_runtime_1.jsx)("circle", { cx: "17", cy: "12", r: "1", fill: "white" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("path", { d: "M10 7L15 12L10 17" }), (0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "12", r: "1" }), (0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "1" }), (0, jsx_runtime_1.jsx)("circle", { cx: "17", cy: "12", r: "1" })] }));
};
exports.BreadcrumbIcon = BreadcrumbIcon;
// Form Icons
var InputFieldIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "7", width: "18", height: "10", rx: "2" }), (0, jsx_runtime_1.jsx)("rect", { x: "6", y: "10", width: "12", height: "1", fill: "white" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "7", width: "18", height: "10", rx: "2" }), (0, jsx_runtime_1.jsx)("line", { x1: "6", y1: "11", x2: "18", y2: "11" })] }));
};
exports.InputFieldIcon = InputFieldIcon;
var CheckboxIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("rect", { x: "4", y: "6", width: "16", height: "12", rx: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M9 12L11 14L15 10", stroke: "white", strokeWidth: "2", fill: "none" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("rect", { x: "4", y: "6", width: "16", height: "12", rx: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M9 12L11 14L15 10", strokeWidth: strokeWidth })] }));
};
exports.CheckboxIcon = CheckboxIcon;
var RadioButtonIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "8" }), (0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "3", fill: "white" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "8" }), (0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "3" })] }));
};
exports.RadioButtonIcon = RadioButtonIcon;
var SelectDropdownIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "6", width: "18", height: "12", rx: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M8 9L12 13L16 9", fill: "white" }), (0, jsx_runtime_1.jsx)("line", { x1: "8", y1: "12", x2: "16", y2: "12", stroke: "white", strokeWidth: "1" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "6", width: "18", height: "12", rx: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M8 9L12 13L16 9" }), (0, jsx_runtime_1.jsx)("line", { x1: "8", y1: "12", x2: "16", y2: "12" })] }));
};
exports.SelectDropdownIcon = SelectDropdownIcon;
// Layout Icons
var GridIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }), (0, jsx_runtime_1.jsx)("rect", { x: "13", y: "3", width: "7", height: "7", rx: "1" }), (0, jsx_runtime_1.jsx)("rect", { x: "3", y: "13", width: "7", height: "7", rx: "1" }), (0, jsx_runtime_1.jsx)("rect", { x: "13", y: "13", width: "7", height: "7", rx: "1" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }), (0, jsx_runtime_1.jsx)("rect", { x: "13", y: "3", width: "7", height: "7", rx: "1" }), (0, jsx_runtime_1.jsx)("rect", { x: "3", y: "13", width: "7", height: "7", rx: "1" }), (0, jsx_runtime_1.jsx)("rect", { x: "13", y: "13", width: "7", height: "7", rx: "1" })] }));
};
exports.GridIcon = GridIcon;
var SidebarIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "3", width: "6", height: "18", rx: "1" }), (0, jsx_runtime_1.jsx)("rect", { x: "11", y: "3", width: "10", height: "18", rx: "1", fill: "currentColor", fillOpacity: "0.7" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "3", width: "6", height: "18", rx: "1" }), (0, jsx_runtime_1.jsx)("rect", { x: "11", y: "3", width: "10", height: "18", rx: "1" })] }));
};
exports.SidebarIcon = SidebarIcon;
var ModalIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("rect", { x: "4", y: "4", width: "16", height: "16", rx: "2" }), (0, jsx_runtime_1.jsx)("rect", { x: "7", y: "7", width: "10", height: "8", rx: "1", fill: "white" }), (0, jsx_runtime_1.jsx)("circle", { cx: "17", cy: "7", r: "1.5", fill: "white" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("rect", { x: "4", y: "4", width: "16", height: "16", rx: "2" }), (0, jsx_runtime_1.jsx)("rect", { x: "7", y: "7", width: "10", height: "8", rx: "1" }), (0, jsx_runtime_1.jsx)("circle", { cx: "17", cy: "7", r: "1.5" })] }));
};
exports.ModalIcon = ModalIcon;
// Feedback Icons
var SpinnerIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("path", { d: "M12 2V6", strokeLinecap: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M12 18V22", strokeLinecap: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M4.93 4.93L7.76 7.76", strokeLinecap: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M16.24 16.24L19.07 19.07", strokeLinecap: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M2 12H6", strokeLinecap: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M18 12H22", strokeLinecap: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M4.93 19.07L7.76 16.24", strokeLinecap: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M16.24 7.76L19.07 4.93", strokeLinecap: "round" })] }));
};
exports.SpinnerIcon = SpinnerIcon;
var ProgressBarIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "10", width: "18", height: "4", rx: "2" }), (0, jsx_runtime_1.jsx)("rect", { x: "3", y: "10", width: "12", height: "4", rx: "2", fill: "white" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "10", width: "18", height: "4", rx: "2" }), (0, jsx_runtime_1.jsx)("rect", { x: "3", y: "10", width: "12", height: "4", rx: "2", fill: color, fillOpacity: "0.3" })] }));
};
exports.ProgressBarIcon = ProgressBarIcon;
var TooltipIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" }), (0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "17", r: "0.5", fill: "white", stroke: "white" }), (0, jsx_runtime_1.jsx)("path", { d: "M12 14V7", stroke: "white", strokeWidth: "2" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "10" }), (0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "17", r: "0.5" }), (0, jsx_runtime_1.jsx)("path", { d: "M12 14V8" })] }));
};
exports.TooltipIcon = TooltipIcon;
// Data Display Icons
var TableIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "3", width: "18", height: "18", rx: "1" }), (0, jsx_runtime_1.jsx)("line", { x1: "3", y1: "9", x2: "21", y2: "9", stroke: "white", strokeWidth: "1" }), (0, jsx_runtime_1.jsx)("line", { x1: "3", y1: "15", x2: "21", y2: "15", stroke: "white", strokeWidth: "1" }), (0, jsx_runtime_1.jsx)("line", { x1: "9", y1: "3", x2: "9", y2: "21", stroke: "white", strokeWidth: "1" }), (0, jsx_runtime_1.jsx)("line", { x1: "15", y1: "3", x2: "15", y2: "21", stroke: "white", strokeWidth: "1" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "3", width: "18", height: "18", rx: "1" }), (0, jsx_runtime_1.jsx)("line", { x1: "3", y1: "9", x2: "21", y2: "9" }), (0, jsx_runtime_1.jsx)("line", { x1: "3", y1: "15", x2: "21", y2: "15" }), (0, jsx_runtime_1.jsx)("line", { x1: "9", y1: "3", x2: "9", y2: "21" }), (0, jsx_runtime_1.jsx)("line", { x1: "15", y1: "3", x2: "15", y2: "21" })] }));
};
exports.TableIcon = TableIcon;
var ListIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "5", width: "18", height: "2", rx: "1" }), (0, jsx_runtime_1.jsx)("rect", { x: "3", y: "11", width: "18", height: "2", rx: "1" }), (0, jsx_runtime_1.jsx)("rect", { x: "3", y: "17", width: "18", height: "2", rx: "1" }), (0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "6", r: "1", fill: "white" }), (0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "12", r: "1", fill: "white" }), (0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "18", r: "1", fill: "white" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("line", { x1: "3", y1: "6", x2: "21", y2: "6" }), (0, jsx_runtime_1.jsx)("line", { x1: "3", y1: "12", x2: "21", y2: "12" }), (0, jsx_runtime_1.jsx)("line", { x1: "3", y1: "18", x2: "21", y2: "18" }), (0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "6", r: "1" }), (0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "12", r: "1" }), (0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "18", r: "1" })] }));
};
exports.ListIcon = ListIcon;
var AccordionIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "4", width: "18", height: "4", rx: "1" }), (0, jsx_runtime_1.jsx)("rect", { x: "3", y: "10", width: "18", height: "10", rx: "1" }), (0, jsx_runtime_1.jsx)("path", { d: "M8 6L16 6", stroke: "white", strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M8 12L16 12", stroke: "white", strokeWidth: "2" }), (0, jsx_runtime_1.jsx)("path", { d: "M8 16L12 16", stroke: "white", strokeWidth: "2" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "4", width: "18", height: "4", rx: "1" }), (0, jsx_runtime_1.jsx)("rect", { x: "3", y: "10", width: "18", height: "10", rx: "1" }), (0, jsx_runtime_1.jsx)("line", { x1: "8", y1: "6", x2: "16", y2: "6" }), (0, jsx_runtime_1.jsx)("line", { x1: "8", y1: "12", x2: "16", y2: "12" }), (0, jsx_runtime_1.jsx)("line", { x1: "8", y1: "16", x2: "12", y2: "16" })] }));
};
exports.AccordionIcon = AccordionIcon;
// More UI Component Icons...
var ToggleSwitchIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "8", width: "18", height: "8", rx: "4" }), (0, jsx_runtime_1.jsx)("circle", { cx: "15", cy: "12", r: "3", fill: "white" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("rect", { x: "3", y: "8", width: "18", height: "8", rx: "4" }), (0, jsx_runtime_1.jsx)("circle", { cx: "15", cy: "12", r: "3" })] }));
};
exports.ToggleSwitchIcon = ToggleSwitchIcon;
var PaginationIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("circle", { cx: "6", cy: "12", r: "2", fill: "white" }), (0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "2", fill: "white" }), (0, jsx_runtime_1.jsx)("circle", { cx: "18", cy: "12", r: "2", fill: "white" }), (0, jsx_runtime_1.jsx)("path", { d: "M10 12L14 12", stroke: "white", strokeWidth: "2" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("circle", { cx: "6", cy: "12", r: "2" }), (0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "2" }), (0, jsx_runtime_1.jsx)("circle", { cx: "18", cy: "12", r: "2" }), (0, jsx_runtime_1.jsx)("line", { x1: "10", y1: "12", x2: "14", y2: "12" })] }));
};
exports.PaginationIcon = PaginationIcon;
var BadgeIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "8" }), (0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "3", fill: "white" }), (0, jsx_runtime_1.jsx)("text", { x: "12", y: "16", textAnchor: "middle", fill: "white", fontSize: "8", children: "1" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "8" }), (0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "3" })] }));
};
exports.BadgeIcon = BadgeIcon;
var AvatarIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "8", r: "4" }), (0, jsx_runtime_1.jsx)("path", { d: "M5 20C5 16.134 8.13401 13 12 13C15.866 13 19 16.134 19 20", fill: "white" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "8", r: "4" }), (0, jsx_runtime_1.jsx)("path", { d: "M5 20C5 16.134 8.13401 13 12 13C15.866 13 19 16.134 19 20" })] }));
};
exports.AvatarIcon = AvatarIcon;
var ChipIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: [(0, jsx_runtime_1.jsx)("rect", { x: "5", y: "5", width: "14", height: "14", rx: "3" }), (0, jsx_runtime_1.jsx)("text", { x: "12", y: "14", textAnchor: "middle", fill: "white", fontSize: "6", children: "Tag" }), (0, jsx_runtime_1.jsx)("circle", { cx: "8", cy: "8", r: "1", fill: "white" })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: [(0, jsx_runtime_1.jsx)("rect", { x: "5", y: "5", width: "14", height: "14", rx: "3" }), (0, jsx_runtime_1.jsx)("circle", { cx: "8", cy: "8", r: "1" })] }));
};
exports.ChipIcon = ChipIcon;
var DividerIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? 'currentColor' : _c, className = _a.className, onClick = _a.onClick, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 1.5 : _d, filled = _a.filled;
    if (filled) {
        return ((0, jsx_runtime_1.jsx)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, className: className, onClick: onClick, children: (0, jsx_runtime_1.jsx)("rect", { x: "3", y: "11", width: "18", height: "2", rx: "1" }) }));
    }
    return ((0, jsx_runtime_1.jsx)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, className: className, onClick: onClick, strokeWidth: strokeWidth, children: (0, jsx_runtime_1.jsx)("line", { x1: "3", y1: "12", x2: "21", y2: "12" }) }));
};
exports.DividerIcon = DividerIcon;
