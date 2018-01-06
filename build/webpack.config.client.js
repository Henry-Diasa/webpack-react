const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV==='development';
const webpack = require('webpack')
const config = {
   //入口
   entry:{
      app:path.join(__dirname,'../client/app.js')
   },
    //出口
   output:{
      filename: '[name].[hash].js',
      path:path.join(__dirname,'../dist'),// build之后的目录
      publicPath: "/public/"//最终打包之后的html文件中js引入的地址
   },
   module:{
      rules:[
          {
             test:/.jsx$/,// 解析jsx
             loader:'babel-loader'
          },
          {
             test:/.js$/,//解析js
             loader:'babel-loader',
              exclude:[
                  path.join(__dirname,'../node_modules')
              ]
          }
      ]
   },
   plugins:[
       new HtmlWebpackPlugin({
           template:path.join(__dirname,'../client/template.html')
       })
   ]
}
// 如果是开发环境
if(isDev){
    config.entry = {
        app:[
            'react-hot-loader/patch',
            path.join(__dirname,'../client/app.js')
        ]
    }
    config.devServer = {
        host:'0.0.0.0',
        port:'8888',
        contentBase:path.join(__dirname,'../dist'),
        hot:true,// 模块热替换
        overlay:{// 编译错误显示
            errors:true
        },
        //和config中配置的publicPath保持一致
        publicPath:'/public',
        historyApiFallback:{
            index:'/public/index.html'
        }
    }
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
}
module.exports = config