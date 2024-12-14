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
    port: 5011,
  },
  preview: {
    port: 5011,
    cors: true
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/App.tsx"),
      formats: ["es"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@mui/joy"
      ],
    },
  }
})
