/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve:{
    alias: {
      "@" : path.resolve(__dirname, './src'),
      "@assets" : path.resolve(__dirname, './src/assets'),
      "@component" : path.resolve(__dirname, './src/component'),
      "@layout" : path.resolve(__dirname, './src/component/layout'),
      "@pages" : path.resolve(__dirname, './src/pages'),
      "@dashboard" : path.resolve(__dirname, './src/pages/Dashboard'),
      "@ui" : path.resolve(__dirname, './src/component/ui'),
    }
  }
})
