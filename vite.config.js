import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindCSS from 'vite-plugin-windicss'

import Components from 'unplugin-vue-components/vite' // 自动按需导入组件
import AutoImport from 'unplugin-auto-import/vite' // 自动导入Api
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import IconResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindCSS(),
    // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'pinia',
        {
          'vue-router': ['onBeforeRouteLeave'],
          '@/router': ['addRoutes'],
          '@/utils/tool': ['toast','showModal', 'showFullLoading', 'hideFullLoading'],
          '@/utils/storage': ['getToken','setToken','removeToken'],
          '@/hooks/useAuth':['useAccountLogin','useLogout'],
          '@/hooks/useAdmin': ['usePassword'],
          '@/hooks/useBreadCrumbs': ['useBreadCrumbs'],
          '@/hooks/useNotice': ['useNotice'],
          '@/api/auth': ['login','logout','getCaptcha'],
          '@/api/admin': ['getInfo', 'rePassword'],
					'@/api/notice': ['getNoticePage', 'getNoticeList', 'saveNotice', 'updateNotice', 'deleteNotice', 'importNotice', 'exportNitice'],
					'@/api/menu': ['getNav', 'getAuthority'],
          '@/stores':['useAdminStore'],
          
       
        }
      ],
      //指定文件夹位置 , 加 /**可遍历子目录
      dirs: ['src/hooks'],
      // 生成 auto-import.d.ts 声明文件
      dts: 'src/auto-import.d.ts',
      // 解析 ElementPlus
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
				ElementPlusResolver(),
				// 自动导入图标组件
				IconResolver({ prefix: 'Icon' })
			]
    }),
     Components({
      // 指定组件所在文件夹的位置，默认是 src/components，可以自行扩充
      dirs: ['src/components'],
      // 解析 ElementPlus
      resolvers: [ElementPlusResolver(), IconResolver({ enabledCollections: ['ep'] })],
      // 组件的有效文件扩展名
      extensions: ['vue'],
      // 配置 type 文件生成位置，生成 components.d.ts; 可以设置为 false
      dts: 'src/components.d.ts',
      // 遍历子目录
      deep: true
    }),
    Icons({
      autoInstall: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
      // '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  //1.打开项目后，对server进行配置
	server: {
		host: '0.0.0.0',
		port: 3000, // 端口号
		open: true // 是否自动打开浏览器
	}
})
