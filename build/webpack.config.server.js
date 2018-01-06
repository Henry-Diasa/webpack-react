const path = require('path');
//服务端渲染
module.exports = {
    target:"node",
    //入口
    entry:{
        app:path.join(__dirname,'../client/server-entry.js')
    },
    //出口
    output:{
        filename: 'server-entry.js',
        path:path.join(__dirname,'../dist'),// build之后的目录
        publicPath: "/public", //最终打包之后的html文件中js引入的地址,
        libraryTarget: "commonjs2"//模块方案
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
    }
}