# ssr_tomd
一个node服务端渲染程序，前端模板基于art-template，使用tmod插件预编译


服务端渲染总结

综述：前端与node层公用模板、页面-模板-API对应规则及数据转换函数。

一. 服务端工作

服务端框架：express

1.直出程序复用前端模板，不做侵入是开发。
插件：tmod.js 模板预编译，服务端使用commonjs模式，将模板分模块输出

2.根据“页面-模板”映射关系（map.js）读取对应页面，经过插入dom等操作，生成完整的页面dom结构返回给前端
插件：服务端dom操作插件：cheerio;  文件读取：fs
数据返回前将服务端渲染标记写入<body>标签中： data-ndoe=1;

3.服务端根据map.js中的映射关系，请求数据接口，根据数据转换函数渲染模板
通用异步处理函数：render; 用Promise处理异步操作。
插件：请求接口： superagent；

4.解决服务端获取登录态问题
请求时携带cookie

5.解决原前端模板中访问全局变量G的需求。
这次使用的模板预编译插件要求模板中使用的所有全局变量及函数都需求预先配置在config.js中。
所以node层在处理时，需要将请求init接口返回的数据挂载到node环境的全局变量上。我采取的处理方法是挂到了global上

6.日志
使用日志插件：log4js   日志写入到cheese.log中

二.前端工作

前端代码保持html页面及模板文件不变，根据map.js及transform.js修改js脚本处理逻辑

1.页面加载完成后，根据body属性data-node是否为1，判断前端是否执行模板渲染程序
2.根据map.js及transform.js，编写通用模板渲染函数render.js

三.辅助函数

1.map.js

手动维护“页面-模板-API-transform”映射，前后端通用

2.transform.js
数据转换函数：将API请求到的数据转化为模板可用数据。前后端通用

四.调试

将测试环境（155）页面中html文件，使用代理（Charles/Fiddler）替换为本地node服务器地址

五.部署到测试环境

工具：pm2

部署到测试环境后出现了些问题，如API server，本地测试是用的是155，部署到dev需要更改等