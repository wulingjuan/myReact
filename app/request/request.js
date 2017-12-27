import axios from "axios";
import { PATH_PARAM,MASK } from "./util";

const INSTANCE = axios.create({
    baseURL:"https://gateway.mshuoke.com"
});

// 封装网络请求公共处理方法
export const publicMethod = function (obj, callback) {
    INSTANCE({method: obj.method, url: obj.url, data: obj.data, headers: obj.headers }).then(function (res) {
        callback(res);
    }).catch(function (err) {
        console.log(err);
    })
}
// 构建发起网络请求所需参数
export const apiParams = function (baseUrl,url, method, config) {
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
        var headersData = {};
        var sendData = {};
        // 参数位置为path
        for (var i in this.config) {
            // data传入的值为非空才进行替换，否则使用默认设置值
            if (data[i] != '') {
                this.config[i].value = data[i];
            }
            console.log(this.config[i].location)
            debugger
            if (this.config[i].require || this.config[i].value) {//传入参数位置参数为必填或者已经填写则进行解析
                if (this.config[i].location == PATH_PARAM.PATH) {
                    this.url = this.url.replace(MASK.LEFT + this.config[i].key + MASK.RIGHT, this.config[i].value);
                }
                // 参数位置为body
                if (this.config[i].location == PATH_PARAM.BODY) {
                    sendData[config[i].key] = this.config[i].value;
                    this.data = sendData;
                }
                // 参数位置为header
                if (this.config[i].location == PATH_PARAM.HEADER) {
                    headersData[config[i].key] = this.config[i].value;
                    this.headers = headersData;
                    debugger;
                }
                // 参数位置为params/query
                if (this.config[i].location == PATH_PARAM.PARAMS || this.config[i].location == PATH_PARAM.QUERY) {
                    if (/\?/.test(this.config[i].location)) {
                        console.log(this.url)
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

