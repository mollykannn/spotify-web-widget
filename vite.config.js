import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import eslintPlugin from 'vite-plugin-eslint'
import viteStylelint from '@amatlash/vite-plugin-stylelint'
import path from 'path'

export default defineConfig({
  base: '/spotify-web-widget',
  plugins: [vue(), viteStylelint(), eslintPlugin(), VitePWA({
    mode: 'development',
    srcDir: 'src',
    filename: 'sw.js',
    base: '/spotify-web-widget/',
    registerType: 'autoUpdate',
    strategies: 'injectManifest',
    includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    manifest: {
      name: 'Spotify Web Widget',
      short_name: 'Spotify Web Widget',
      description: 'Get the Spotify Web Widget',
      theme_color: '#0079d2',
      start_url: './index.html',
      lang: 'zh-Hant-HK',
      dir: 'ltr',
      orientation: 'portrait',
      icons: [
        {
          src: 'img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: 'img/icons/android-chrome-maskable-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: 'img/icons/android-chrome-maskable-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    }
  }),
  eslintPlugin({
    include: ['src/**/*.vue', 'src/**/*.js']
  })
],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
})
