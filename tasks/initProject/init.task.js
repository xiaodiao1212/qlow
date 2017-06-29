var fs = require('fs');
var gulp = require('gulp');
var config = require('../config');
gulp.task('init',function(){
    //创建文件夹
    for(var i in config){
        if(typeof config[i] == 'function'){
            if(!fs.existsSync(config[i]())){
                fs.mkdirSync(config[i]());
            }
        }
    }
    //创建index.html
});
