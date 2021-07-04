import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { babel } from '@rollup/plugin-babel'
import linaria from 'vite-plugin-linaria-styled'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    babel({
      include: ['./src/**'],
      extensions: ['.ts', '.tsx'],
      babelHelpers: 'bundled',
    }),
    linaria({
      sourceMap: true,
      cacheDirectory: '.linaria-cache',
      extension: '.linaria.css',
    }),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})
