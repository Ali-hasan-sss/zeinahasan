import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
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
