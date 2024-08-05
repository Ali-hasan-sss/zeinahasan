"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("nuxt/config");
exports.default = (0, config_1.defineNuxtConfig)({
    target: 'static',
    generate: {
        fallback: true,
    },
    build: {
        transpile: ['bootstrap'],
    },
    css: [
        'bootstrap/dist/css/bootstrap.min.css',
        '~/assets/css/bootstrap.css',
    ],
    plugins: ['~/plugins/pinia'],
    vite: {
        optimizeDeps: {
            include: ['bootstrap'],
        },
        resolve: {
            alias: {
                '@/': './',
            },
        },
    },
    app: {
        baseURL: process.env.NODE_ENV === 'production' ? '/zeinahasan/' : '/',
    },
    router: {
        base: process.env.NODE_ENV === 'production' ? '/zeinahasan/' : '/',
    },
    compatibilityDate: '2024-08-01',
});
