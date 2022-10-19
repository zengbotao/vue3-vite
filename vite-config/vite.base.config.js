import { defineConfig } from "vite"; //记得修改package.json的运行脚本，比对差别
import path from "path";
import vue from "@vitejs/plugin-vue"; //下载，导入扩展，并配置插件，vue要3.2.5版本以上才支持。一定要配置在插件中！！！
export default defineConfig({
  base: "./", //记得修改index.heml,路径设置为当前路径
  plugins: [vue()],
  resolve: {
    alias: {
      // 打包相关能尽量给绝对路径,就给绝对
      // 程序运行的目录  相对下面的src => 的绝对路径
      "@": path.resolve(__dirname, "..", "./src"),
      "~": path.resolve(__dirname, "..", "./"), // 项目根目录
    },
    extensions: [".mjs", ".js", ".css", ".json", ".vue"], //记得添加.vue,否则vite会识别不了
  },
  preview: {
    //预览，也可使使用代理，模仿打包后的生产环境，配置见官网
    port: 8080, //npx vite preview
    open: true,
  },
  build: {
    // 构建生产包时的一些配置策略,
    //开发环境时利用的esbuild
    rollupOptions: {
      // 配置rollup的一些构建策略
      output: {
        // 控制输出
        // 在rollup里面, hash代表将你的文件名和文件内容进行组合计算得来的结果
        assetFileNames: "[hash].[name].[ext]",
      },
    },
    assetsInlineLimit: 4096000, // 4000kb
    outDir: "dist", // 配置输出目录
    assetsDir: "static", // 配置输出目录中的静态资源目录
    emptyOutDir: true, // 清除输出目录中的所有文件
  },
});
console.log(
  path.resolve(__dirname, "..", "./src"),
  "fddddddddddddddddddddddddd"
); //node环境下输出，即命令行输出
