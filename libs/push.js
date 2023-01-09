module.exports = function(args) {
var qcloudSDK = require('./submit'); 
var config = this.config;
var secret_Id = config.tencentcdn.secretId;
var secret_Key = config.tencentcdn.secretKey;
var url = config.refreshurl
qcloudSDK.config({
    secretId: secret_Id,
    secretKey: secret_Key
})

qcloudSDK.request('RefreshCdnUrl', {
    'urls.0': url
}, (res) => {
console.log('cdn刷新结果' + res);
console.log('url:' + url);
})
};