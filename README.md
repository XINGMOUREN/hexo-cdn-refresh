# Hexo 腾讯云CDN主动刷新插件
这是一个Hexo使用腾讯云CDN自动刷新的插件，当你cdn设置为缓存全部文件并且缓存时长特别长，CDN有不刷新问题，故写此插件配合使用。
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
```

在hexo的`_congig.yml`的`deploy`配置项中添加

```yml
deploy:
- type: tencent_cdn
```

运行`hexo d`即可完成上传





















