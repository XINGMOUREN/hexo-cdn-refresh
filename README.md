# Hexo 腾讯云CDN主动刷新插件
这是一个Hexo使用腾讯云CDN自动刷新的插件，当你的博客启用了腾讯云的cdn后,每次部署完成后都要手动刷新cdn的缓存,故开发此插件配合腾讯云cdn使用
# 使用说明
前往[腾讯云CDN主动刷新插件](https://blog.happyking.top/p/20230109/)阅读插件说明

在你的博客根目录中运行npm安装指令

```bash
npm install hexo-cdn-refresh -s
```

在hexo的`_congig.yml`中添加以下配置项目

```yml
tencentcdn:
 secretId: '*******************' # 你在https://console.cloud.tencent.com/cam/capi 获取到的ID
 secretKey: '******************' * # 你在https://console.cloud.tencent.com/cam/capi 获取到的SecretKey
 type: 1 #刷新方式,1为只刷新变更资源,2为刷新网站下的全部缓存
 timer: 60000 #延时器,单位为毫秒,延时多长时间再执行刷新命令,不需要的填写0
```

在hexo的`_congig.yml`的`deploy`配置项中添加

```yml
deploy:
- type: tencent_cdn
```

延时器说明:主要为网站托管再GitHub Pages,vercel,或者netlify的用户设置,当你更新网站后,这些托管平台需要一段的时间来构建页面,如果不设置延时器,那么会导致cdn立即刷新,拉去到未更新的源站内容,所以说延时器必须填写,具体数值看自己的页面构建速度,如果是其他部署方式,不需要延时器的就填写0

注意:`- type: tencent_cdn`一定要加在最后面,因为hexo d这个命令是按照type的顺序运行的,如果你加载了前面会先刷新cdn的缓存,再上传文件,达不到更新网站的效果

运行`hexo d`即可上传网站并且刷新cdn，控制台提示如下为刷新成功

```bash
CDN刷新结果{"code":0,"message":"","codeDesc":"Success","data":{"count":1,"task_id":"1540810210711616112"}}
```

> 注意,只有code返回为0才为正常刷新,如果返回其他字符段(一般为4000),请检查自己的api ID 与密钥是否填写正确,确认无误后请检查自己的_congig.yml文件中的url:配置选项中的网址是否为/结尾的,列如
>
> url:https://blog.happyking.top(这是错误的填写方法,必须是/结尾)
>
> url:https://blog.happyking.top/(正确)

计划开发其他家的cdn缓存刷新























