var gulp = require('gulp');
var staticServer = require('browser-sync').create();
import { Config } from '../config';
const config = new Config();
//开启一个静态服务器
gulp.task('open-static-server', function () {
    staticServer.init({
        server: {
            baseDir: config.dirList().dist,
            middleware: [
                // 中间件。。。。。。可设置多个。
                function (req, res, next) {
                    // console.log("Hi from middleware");
                    next();
                }
            ]
        },
        ui:false,
        startPath: "views/",
        //监听文件
        files: [
            config.dirList().dist,
        ],
        reloadOnRestart: true,
        // logPrefix: "super-qlow",//这里是log的前缀
        logLevel: "silent",//debug-所有信息 or info-部分信息 or silent-啥也不显示
        // logFileChanges: false,//不记录文件更改
        open: true, //设置true为自动打开浏览器
        notify: false, //不在浏览器中弹出任何的提示窗口
        // codeSync:false,
        // injectChanges: true, //注入CSS改变  false - 不要尝试注入，只是做一个页面刷新
        // ghostMode: false, //不同步页面操作行为
        port: 10800, //开启端口
    });
});
