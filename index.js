"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icons = void 0;
// imports
var BusinessIcons = __importStar(require("./bussiness"));
var EducationIcons = __importStar(require("./educations"));
var GameIcons = __importStar(require("./games"));
var GraphicsIcons = __importStar(require("./graphics"));
var MonneyIcons = __importStar(require("./monney"));
var SysAdminIcons = __importStar(require("./sysadmin"));
var UIIcons = __importStar(require("./ui"));
var OSIcons = __importStar(require("./os"));
var AIIcons = __importStar(require("./ai"));
var MediaIcons = __importStar(require("./media"));
var ProgrammingIcons = __importStar(require("./programming"));
var FaceIcons = __importStar(require("./face"));
var SocialIcons = __importStar(require("./social"));
var FilterIcons = __importStar(require("./filter"));
// merged export
exports.Icons = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, BusinessIcons), EducationIcons), GameIcons), GraphicsIcons), MonneyIcons), SysAdminIcons), UIIcons), OSIcons), AIIcons), MediaIcons), ProgrammingIcons), FaceIcons), SocialIcons), FilterIcons);
