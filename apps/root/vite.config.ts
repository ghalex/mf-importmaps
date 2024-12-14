import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const srcDir = path.resolve(__dirname, 'src')

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: srcDir }
    ]
  },
  envDir: path.resolve(__dirname, '../../'),
  server: {
    port: 5010,
  },
  preview: {
    port: 5010
  },
  build: {
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@mui/joy",
        "@app/example"
      ],
    },
  }
})
