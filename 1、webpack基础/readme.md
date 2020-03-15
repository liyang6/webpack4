## webpack安装
- 安装本地webpack
- webpack webpack-cli -D
  
## webpack 可以0配置
- 打包工具 ——> 输出后的结果（js模块）
- 默认找node_modules/.bin/webpack.cmd(如果当前文件夹有node.exe执行webpack.js,当前没有,就用node 执行node_modules/webpack/.bin/webpack.js)
- 打包（支持js的模块化）

## 手动配置webpack
- node_modules/webpack-cli/.bin/config/config-yargs.js(默认名称 defaultDescription: "webpack.config.js or webpackfile.js",)
- npx webpack --config 文件.js
- npm run build -- 参数（--config webpack.config.my.js）
