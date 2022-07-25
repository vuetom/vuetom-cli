"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projRoot = exports.pkgsRoot = exports.docRoot = exports.vpRoot = void 0;
const path_1 = __importDefault(require("path"));
exports.vpRoot = path_1.default.resolve(__dirname, '..');
exports.docRoot = path_1.default.resolve(exports.vpRoot, '..');
exports.pkgsRoot = path_1.default.resolve(exports.docRoot, '..');
exports.projRoot = path_1.default.resolve(exports.pkgsRoot, '..');
