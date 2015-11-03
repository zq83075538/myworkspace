fis.config.set('modules.postpackager', 'simple');
fis.config.set('settings.postpackager.simple.autoCombine', true);
// fis.config.set('roadmap.path',[
// {
// 	reg:/^\/style\/(.*)/i,
// 	useSprite:true,
// 	release:'/static/style/$1'
// }
// ]);
// fis.config.set('spriter','csssprites');
fis.config.set('modules.spriter', 'csssprites');

fis.config.merge({
    roadmap : {
        path : [
            {
                //所有js目录下的js文件
                reg : 'js/**.*',
                //是模块化的js文件（标记为这种值的文件，会进行amd或者闭包包装）
                //isMod : true,
                //默认依赖lib.js
                //requires : [ 'lib.js' ],
                //向产出的map.json文件里附加一些信息
                extras : { say : '123' },
                //编译后产出到 /static/js/xxx 目录下
                release : '$&'
            },
            {
                //所有js目录下的js文件
                reg : 'style/**.*',
                //是模块化的js文件（标记为这种值的文件，会进行amd或者闭包包装）
                //isMod : true,
                //默认依赖lib.js
                //requires : [ 'lib.js' ],
                //向产出的map.json文件里附加一些信息
                extras : { say : '123' },
                //编译后产出到 /static/js/xxx 目录下
                release : '/style/$&'
            },
            {
                //所有的js文件
                reg : 'js/**.js',
                //发布到/static/js/xxx目录下
                release : '/js/m$&'
            },
            // {
            //     //所有的ico文件
            //     reg : '**.ico',
            //     //发布的时候即使加了--md5参数也不要生成带md5戳的文件
            //     useHash : false,
            //     //发布到/static/xxx目录下
            //     release : '/static$&'
            // },
            {
                //所有image目录下的.png，.gif文件
                reg : /^\/images\/(.*\.(?:png|gif|jpg))/i,
                //访问这些图片的url是 '/m/xxxx?log_id=123'
                //url : '/static/images/$1?log_id=123',
                //发布到/static/images/xxx目录下
                release : 'images/m/$1'
            },
            // {
            //     //所有image目录下的.png，.gif文件
            //     reg : /^\/img\/(.*\.(?:png|gif|jpg))/i,
            //     //访问这些图片的url是 '/m/xxxx?log_id=123'
            //     //url : '/static/images/$1?log_id=123',
            //     //发布到/static/images/xxx目录下
            //     release : 'img/$1'
            // },
            {
                //所有image目录下的.png，.gif文件
                reg : /^\/demoimg\/(.*\.(?:png|gif|jpg))/i,
                //访问这些图片的url是 '/m/xxxx?log_id=123'
                //url : '/static/images/$1?log_id=123',
                //发布到/static/images/xxx目录下
                release : 'demoimg/$1'
            },
            // {
            //     //所有template目录下的.php文件
            //     reg : '**.html',
            //     //是类html文件，会进行html语言能力扩展
            //     //isHtmlLike : true,
            //     //发布为gbk编码文件
            //     charset : 'utf-8',
            //     //发布到/php/template/xxx目录下
            //     release : '$&'
            // },
            {
                //所有template目录下的.php文件
                reg : /\/(.*\.jsp)/i,
                //是类html文件，会进行html语言能力扩展
                isHtmlLike : true,
                //发布为gbk编码文件
                charset : 'utf-8',
                //发布到/php/template/xxx目录下
                release : '$1'
            },
            {
                //所有template目录下的.php文件
                reg : /\/(.*\.json)/i,
                //是类html文件，会进行html语言能力扩展
                isHtmlLike : true,
                //发布为gbk编码文件
                charset : 'utf-8',
                //发布到/php/template/xxx目录下
                release : '$1'
            },
            {
                //所有template目录下的.php文件
                reg : /\/(.*\.html)/i,
                //是类html文件，会进行html语言能力扩展
                isHtmlLike : true,
                //发布为gbk编码文件
                charset : 'utf-8',
                //发布到/php/template/xxx目录下
                release : '$1'
            }
            ,
             {
                //前面规则未匹配到的其他文件
                reg : /.*/,
                //编译的时候不要产出了
                release : false
            }

        ],
        domain : {
            //所有图片文件，使用 http://img.example.com 作为域名
            'image' : ['http://img.example.com']
        }
    }
});

// fis.config.merge({
//     roadmap : {
//         domain : {
//             'style/**.css' : 'http://static.wodsy.com',
//             '**.js' : ['http://static.wodsy.com'],
//             'image' : ['http://static.wodsy.com']
//         }
//     }
// });