var timer=function(){
console.log('url:');
}
setTimeout(timer,50000);

module.exports = function(args) {
var qcloudSDK = require('./submit'); 
var config = this.config;
var secret_Id = config.tencentcdn.secretId;
var secret_Key = config.tencentcdn.secretKey;
var url = config.url
setTimeout(() => {
qcloudSDK.config({
    secretId: secret_Id,
    secretKey: secret_Key
})
qcloudSDK.request('RefreshCdnDir', {
    'dirs.0': url,
    "type": "1"
}, (res) => {
console.log('cdn刷新结果' + res);
console.log('url:' + url);
})
}, 10000);
};

