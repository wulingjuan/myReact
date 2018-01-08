var INSTANCE = axios.create({
    baseURL: 'https://gateway.mshuoke.com',
});
// 封装网络请求公共处理方法
var publicMethod = function (obj) {
    return INSTANCE({ baseUrl:obj.baseUrl,method: obj.method, url: obj.url, data: obj.data, headers: obj.headers });
}

// 构建发起网络请求所需参数
var apiParams = function (baseUrl, url, method, config) {
    this.config = config;
    this.url = url;
    this.method = method;
    this.baseUrl = baseUrl;
    this.data = {};
    this.headers = {};
    //定义查询需求参数方法
    this.getParams = function () {
        var apiArr = [];
        for (var index in config) {
            apiArr.push(index);
        }
        return apiArr;
    }
    this.setParams = function (data) {
        var headersData = {};
        // 参数位置为path
        for (var i in this.config) {
            // data传入的值为非空才进行替换，否则使用默认设置值
            if (data[i] != '') {
                this.config[i].value = data[i];
            }
            if (this.config[i].require || this.config[i].value) {//传入参数位置参数为必填或者已经填写则进行解析
                if (this.config[i].location == PATH_PARAM.PATH) {
                    this.url = this.url.replace(MASK.LEFT + this.config[i].key + MASK.RIGHT, this.config[i].value);
                }
                // 参数位置为body
                if (this.config[i].location == PATH_PARAM.BODY) {
                    this.data = this.config[i].value;
                }
                // 参数位置为header
                if (this.config[i].location == PATH_PARAM.HEADER) {
                    this.headers = this.config[i].value;
                }
                // 参数位置为params/query
                if (this.config[i].location == PATH_PARAM.PARAMS || this.config[i].location == PATH_PARAM.QUERY) {
                    if (/\?/g.test(this.url)) {
                        this.url += "&" + this.config[i].key + "=" + this.config[i].value;
                    }
                    else {
                        this.url += "?" + this.config[i].key + "=" + this.config[i].value;
                    }
                }
            }
            else {
                alert("请完善参数配置");
            }
        }
    }
}

var dataParams = {
    userid: { location: 'path', key: 'userid', value: '', require: "true" },
    version: { location: 'header', key: 'version', value: "v1", require: "true" }
};

var apiObject = new apiParams("/customer/user/{userid}/enterpriseinfo", "get", dataParams);
apiObject.setParams({ userid: "30", version: "v1" });

publicMethod(apiObject).then(function(res){
    console.log(res)
}).catch(function(err){
    console.logr(err)
});
