import axios from "axios";
import { PATH_PARAM,MASK } from "./util";

const INSTANCE = axios.create({
    baseURL:"https://gateway.mshuoke.com",
});
// 封装网络请求公共处理方法
export const publicMethod = function (obj) {
    return INSTANCE({ baseUrl: obj.baseUrl, method: obj.method, url: obj.url, data: obj.data, headers: obj.headers });
}
export const publicArray = function (obj) {
    return Promise.all([
        INSTANCE({ baseUrl: obj.baseUrl, method: obj.method, url: obj.url, data: obj.data, headers: obj.headers })
    ]);
}
export const publicMore = function(obj1,obj2){
    return Promise.all([
        INSTANCE({ baseUrl: obj1.baseUrl, method: obj1.method, url: obj1.url, data: obj1.data, headers: obj1.headers }), 
        INSTANCE({ baseUrl: obj2.baseUrl, method: obj2.method, url: obj2.url, data: obj2.data, headers: obj2.headers })
    ])
}
export const publicAll = function (obj1,obj2,obj3) {
    return Promise.all([
        INSTANCE({ baseUrl: obj1.baseUrl, method: obj1.method, url: obj1.url, data: obj1.data, headers: obj1.headers }),
        INSTANCE({ baseUrl: obj2.baseUrl, method: obj2.method, url: obj2.url, data: obj2.data, headers: obj2.headers }),
        INSTANCE({ baseUrl: obj3.baseUrl, method: obj3.method, url: obj3.url, data: obj3.data, headers: obj3.headers })
    ])
}
// 构建发起网络请求所需参数
export const apiParams = function (baseUrl,url,method,config) {
    this.config = config;
    this.url = url;
    this.method = method;
    this.data = {};
    this.headers = {};
    this.baseUrl = baseUrl;
    //定义查询需求参数方法
    this.getParams = function () {
        var apiArr = [];
        for (var index in config) {
            apiArr.push(index);
        }
        return apiArr;
    }
    this.setParams = function (data) {
        var headersData = {
            Accept: 'application/json',
        };
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
                    headersData[config[i].key] = this.config[i].value;
                    this.headers = headersData;
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

