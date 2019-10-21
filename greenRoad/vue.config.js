
const webpack = require('webpack')
module.exports = {
    /* 部署应用包的基本URL */
    /* baseUrl 从 Vue CLI 3.3 起已弃用 ，请使用publicPath */
    //  baseUrl: process.env.NODE_ENV === "production" ? "./" : "./",
    publicPath: process.env.NODE_ENV === "production" ? "../greenRoad/" : "./",
    /* 生产环境构建文件的目录 defalut: dist */
    outputDir: "dist",
    /* 放置生成的静态文件目录（js css img） */
    assetsDir: "static",
    /* 指定生成的index.html 输出路径 相对 default: index.html */
    indexPath: "index.html",
    /* 指定生成文件名中包含hash default: true */
    filenameHashing: true,
    /* 多页模式下 */
    /* pages: {
      index: {
        // page 的入口
        entry: "src/index/main.js",
        // 模板来源
        template: "public/index.html",
        // 在 dist/index.html 的输出
        filename: "index.html",
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        // title: "Index Page",
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ["chunk-vendors", "chunk-common", "index"]
      },
      // 当使用只有入口的字符串格式时，
      // 模板会被推导为 `public/subpage.html`
      // 并且如果找不到的话，就回退到 `public/index.html`。
      // 输出文件名会被推导为 `subpage.html`。
      // subpage: "src/subpage/main.js"
    } */
    /* 是否保存时 lint 代码 */
    // eslint-loader是否在保存的时候检查
    lintOnSave: process.env.NODE_ENV === "production",
    /* 是否使用编译器 default: false // 是否使用包含运行时编译器的Vue核心的构建*/
    runtimeCompiler: true,
    /* 默认babel-loader会忽略node_modules中的文件，你想显示的话在这个选项中列出来 */
    // transpileDependencies: [],
    /* 生产环境的source map */
    productionSourceMap: false,
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    integrity: false,
    // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数。
    // 该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
                'utils': '@/utils',
                'api': '@/utils',
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]

    },
    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
    },
    // css相关配置
    css: {
        // 启用 CSS modules
        modules: false,
        // 是否使用css分离插件
        extract: ['production', 'test'].includes(process.env.NODE_ENV),
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
    },

    devServer: {
        port: 8080,
        host: "0.0.0.0",
        https: false,
        // 自动启动浏览器
        open: true,
        compress:true,//热跟新
        inline: true, // 实时刷新
        // proxy: {
        //     "/api": {
        //         //代理路径 例如 https://baidu.com
        //         target:  "http://101.132.107.110:8080/DAP/",
        //         // 将主机标头的原点更改为目标URL
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //             "^/api": ""
        //         }
        //     }
        // }

    }

};
