import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server: {
  //   proxy: {
  //     '/posts': 'http://localhost:5000/api/v1'
  //   }
  // },
  resolve:{
    alias:{
      '@':path.resolve(__dirname, './src')
    }
  }
})
