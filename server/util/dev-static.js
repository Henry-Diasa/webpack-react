const axios = require('axios')
const webpack = require('webpack')
const path = require('path')
const serverConfig = require('../../build/webpack.config.server')
const getTemplate = ()=>{
    return new Promise((resolve,reject)=>{
       axios.get('http://localhost:8888/public/index.html')
           .then(res=>{
                resolve(res.data);
           })
           .catch(reject)
    })
}
const serverCompiler = webpack(serverConfig);
serverCompiler.watch({},(err,stats)=>{
    if(err) throw err;
    stats = stats.toJson();
    stats.errors.forEach(err=>console.error(err))
    stats.warnings.forEach(warn=>console.warn(warn))
    const bundlePath = path.join(
        serverConfig.output.path,
        serverConfig.output.filename
    )
})
module.exports = function(app){

    app.get('*',function(req,res){

    })
}