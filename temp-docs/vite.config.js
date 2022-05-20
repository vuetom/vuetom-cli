"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var paths_1 = require("./.vitepress/utils/paths");
exports.default = (0, vite_1.defineConfig)({
    server: {
        host: true,
        fs: {
            strict: true,
            allow: [paths_1.projRoot]
        }
    },
    optimizeDeps: {
        include: ['@vueuse/core']
    }
});
