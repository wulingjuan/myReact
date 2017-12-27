import * as Request from "./request";

//获取企业审核状态
export const companyState = (jfuid) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        userid: { location: 'path', key: 'userid', value: '', require: "true" },
        version: { location: 'header', key: 'version', value: "v1", require: "true" }
    };
    let enterpriseinfo = new Request.apiParams(baseUrl, "/customer/user/{userid}/enterpriseinfo", "get", dataParams);
    enterpriseinfo.setParams({ userid: jfuid, version: "v1" });
    return enterpriseinfo;
}

// 首页参数
export const myhome = (jfuid) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        userid: { location: 'path', key: 'userid', value: '', require: "true" },
        version: { location: 'header', key: 'version', value: "v1", require: "true" }
    };
    let myhome = new Request.apiParams(baseUrl, "/customer/user/{jfuid}/homepage", "get", dataParams);
    myhome.setParams({ userid: jfuid, version: "v1" });
    return myhome;
}

// 获取消息
export const getmessage = (method,rid) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        rid: { location: 'query', key: 'rid', value: '', require: "true" },
        version: { location: 'header', key: 'version', value: "v1", require: "true" }
    };
    let message = new Request.apiParams(baseUrl, "/dbservice/customer/messages", "get", dataParams);
    message.setParams({ rid:rid, version: "v1" });
    return message;
}