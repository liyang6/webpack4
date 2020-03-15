
let path = require('path')
module.exports = {
  mode: 'development', //模式，
  entry: './src/index.js', // 入口
  output: {
    filename: 'bundle.js',// 出口
    path: path.resolve(__dirname, 'dist')
  }
}