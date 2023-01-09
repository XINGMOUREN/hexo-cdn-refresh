module.exports = function(args) {
var qcloudSDK = require('./submit'); 
var config = this.config;
var secret_Id = config.tencentcdn.secretId;
var secret_Key = config.tencentcdn.secretKey;
var type = config.tencentcdn.type;
var timer = config.tencentcdn.timer;
var url = config.url
setTimeout(() => {
qcloudSDK.config({
    secretId: secret_Id,
    secretKey: secret_Key
})
qcloudSDK.request('RefreshCdnDir', {
    'dirs.0': url,
    "type": type
}, (res) => {
console.log('cdn刷新结果' + res);
console.log('url:' + url);
})
}, timer);
};

