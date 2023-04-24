import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),WindCSS()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  //1.打开项目后，对server进行配置
	server: {
		host: '0.0.0.0',
		port: 3000, // 端口号
		open: true // 是否自动打开浏览器
	}
})
