import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],



  /* Config Alias */
  // Tạo địa chỉ nhánh chính để import vào các components
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@pages": `${path.resolve(__dirname, "./src/pages/")}`,
      "@services": `${path.resolve(__dirname, "./src/services/")}`,
      "@routes": `${path.resolve(__dirname, "./src/routes/")}`,
      "@slices": `${path.resolve(__dirname, "./src/store/slices/")}`,
      "@util": `${path.resolve(__dirname, "./src/utils/")}`
    },
  },

  /* Config Global Scss Variable */
  // Tự động import setting trong các file scss lẻ vào main.scss
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "src/scss/index.scss";` },
    }
  }
})
