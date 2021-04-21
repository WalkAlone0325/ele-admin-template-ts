import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
// import styleImport from 'vite-plugin-style-import'
// import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: 'element-plus',
    //       esModule: true,
    //       resolveStyle: (name) => {
    //         console.log(name)
    //         return `element-plus/lib/theme-chalk/${name}.css`
    //       },
    //     },
    //   ],
    // }),
    // vitePluginImp({
    //   libList: [
    //     {
    //       libName: 'element-plus',
    //       style: (name) => {
    //         console.log(name)
    //         return `element-plus/lib/theme-chalk/${name}.css`
    //       },
    //     },
    //   ],
    // }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
