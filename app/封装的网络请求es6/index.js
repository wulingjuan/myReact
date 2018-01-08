import * as Request from "./request";

const rid = sessionStorage.getItem("jfuid");
const jfuid = sessionStorage.getItem("jfuid");


//获取企业认证信息
export const companyState = () => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        userid: { location: 'path', key: 'userid', value: '', require: "true" },
        version: { location: 'header', key: 'version', value: "v1", require: "true" }
    };
    let params = new Request.apiParams(baseUrl, "/customer/user/{userid}/enterpriseinfo", "get", dataParams);
    params.setParams({ userid: jfuid, version: "v1" });
    return params;
}
// 更新企业认证信息
export const changeCompanyState = (data) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        userid: { location: 'path', key: 'userid', value: '', require: "true" },
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        body: { location: 'body', key: 'body', value: "", require: "true" },
    };
    let params = new Request.apiParams(baseUrl, "/customer/user/{userid}/enterpriseinfo", "patch", dataParams);
    params.setParams({ userid:jfuid, version:"v1",body:data });
    return params;
}

// 首页参数
export const myhome = () => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        jfuid: { location: 'path', key: 'jfuid', value: '', require: "true" },
        version: { location: 'header', key: 'version', value: "v1", require: "true" }
    };
    let params = new Request.apiParams(baseUrl, "/customer/user/{jfuid}/homepage", "get", dataParams);
    params.setParams({ jfuid: jfuid, version: "v1" });
    return params;
}

// 获取消息
export const GET_MESSAGE = () => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        rid: { location: 'query', key: 'rid', value: '', require: "true" },
        version: { location: 'header', key: 'version', value: "v1", require: "true" }
    };
    let params = new Request.apiParams(baseUrl, "/customer/messages", "get", dataParams);
    params.setParams({ rid: rid, version: "v1" });
    return params;
}
// 修改消息
export const PATCH_MESSAGE = (data) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        ids: { location: 'body', key: 'ids', value: '', require: "true" },
        version: { location: 'header', key: 'version', value: "v1", require: "true" }
    };
    let params = new Request.apiParams(baseUrl, "/customer/messages", "patch", dataParams);
    params.setParams({ ids: data, version: "v1" });
    return params;
}
// 删除消息
export const DELETE_MESSAGE = (data) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        ids: { location: 'body', key: 'ids', value: '', require: "true" },
        version: { location: 'header', key: 'version', value: "v1", require: "true" }
    };
    let params = new Request.apiParams(baseUrl, "/customer/messages", "delete", dataParams);
    params.setParams({ ids: data, version: "v1" });
    return params;
}
// 获取初始数据
// 行业
export const initIndustry = () =>{
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" }
    };
    let params = new Request.apiParams(baseUrl, "/customer/industrys", "get", dataParams);
    params.setParams({version: "v1" });
    return params;
}
// 企业认证行业数据
export const companyIndustry = () => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {};
    let params = new Request.apiParams(baseUrl, "/customer/industrys", "get", dataParams);
    params.setParams({});
    return params;
}
// 城市
export const initCity = () => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" }
    };
    let params = new Request.apiParams(baseUrl, "/customer/citys", "get", dataParams);
    params.setParams({ version: "v1" });
    return params;
}

//获取初始搜索数据
// 行业
export const initSearchIndustry = () => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" }
    };
    let params = new Request.apiParams(baseUrl, "/chart/industrys", "get", dataParams);
    params.setParams({ version: "v1" });
    return params;
}
// 城市列表
export const initSearchCity = () => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" }
    };
    let params = new Request.apiParams(baseUrl, "/chart/citylist?norequired=四线,五线,六线", "get", dataParams);
    params.setParams({ version: "v1" });
    return params;
}
// 发布需求
export const creatDemand = (data)=>{
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        demand: { location: 'body', key: 'demand', value: "", require: "true" }
    };
    let params = new Request.apiParams(baseUrl, "/customer/demands", "post", dataParams);
    params.setParams({ version: "v1",demand:data });
    return params;
}

// 编辑需求(草稿箱)
export const editDemand = (data) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        demand: { location: 'body', key: 'demand', value: "", require: "true" }
    };
    let params = new Request.apiParams(baseUrl, "/customer/demands", "patch", dataParams);
    params.setParams({ version: "v1", demand: data });
    return params;
}
// 需求详情回显
export const demandDetail = (demandId) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        demandid: { location: 'path', key: 'demandid', value: "", require: "true" },
        jfuid: { location: 'query', key: 'jfuid', value: "", require: "true" }
    };
    let params = new Request.apiParams(baseUrl, "/customer/demands/{demandid}", "get", dataParams);
    params.setParams({ version: "v1", demandid: demandId,jfuid:jfuid });
    return params;
}
// 删除草稿箱
export const deleteDraftDemand = (pid) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        demandid: { location: 'path', key: 'demandid', value: "", require: "true" },
    };
    let params = new Request.apiParams(baseUrl, "/customer/demands/{demandid}", "delete", dataParams);
    params.setParams({ version: "v1", demandid: pid});
    return params;
}
// 需求列表查询接口
export const demandList = () => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        jfuid: { location: 'query', key: 'jfuid', value: "", require: "true" },
    };
    let params = new Request.apiParams(baseUrl, "/customer/demands", "get", dataParams);
    params.setParams({ version: "v1",jfuid: jfuid });
    return params;
}
// 草稿箱需求列表
export const demandListDraft = () => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        jfuid: { location: 'query', key: 'jfuid', value: "", require: "true" },
        demandstate: { location: 'query', key: 'demandstate', value: "", require: "true" },
    };
    let params = new Request.apiParams(baseUrl, "/customer/demands", "get", dataParams);
    params.setParams({ version: "v1", demandstate: "0", jfuid: jfuid });
    return params;
}
// 驳回需求列表(异常)
export const reject = () => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        jfuid: { location: 'query', key: 'jfuid', value: "", require: "true" },
        demandstate: { location: 'query', key: 'demandstate', value: "", require: "true" },
    };
    let params = new Request.apiParams(baseUrl, "/customer/demands", "get", dataParams);
    params.setParams({ version: "v1", demandstate:"9", jfuid: jfuid });
    return params;
}
//PC端搜索结果页图表数据接口
export const searchdata = (data) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        chartDataVo: { location: 'body', key: 'chartDataVo', value: "", require: "true" },
    };
    let params = new Request.apiParams(baseUrl, "/chart/user/chartdata", "post", dataParams);
    params.setParams({ version: "v1", chartDataVo: data});
    return params;
}
//修改密码、更新密码
export const updatePassword = (data) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        passwordVo: { location: 'body', key: 'passwordVo', value: "", require: "true" },
    };
    let params = new Request.apiParams(baseUrl, "/customer/user/password", "patch", dataParams);
    params.setParams({ version: "v1", passwordVo: data });
    return params;
}
//发包方成单报告第一层接口
export const reportFirst = () => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        jfuid: { location: 'query', key: 'jfuid', value: "", require: "true" },
    };
    let params = new Request.apiParams(baseUrl, "/customer/user/reports/first", "get", dataParams);
    params.setParams({ version: "v1", jfuid:jfuid });
    return params;
}
//发包方成单报告第二层接口
export const reportSecond = (pid) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        pid: { location: 'query', key: 'pid', value: "", require: "true" },
    };
    let params = new Request.apiParams(baseUrl, "/customer/user/reports/second", "get", dataParams);
    params.setParams({ version: "v1", pid: pid });
    return params;
}

// 发包方成单报告下载接口(暂时没有用到)
export const reportDownload = (reportid) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        reportid: { location: 'query', key: 'reportid', value: "", require: "true" },
    };
    let params = new Request.apiParams(baseUrl, "/customer/user/reports", "patch", dataParams);
    params.setParams({ version: "v1", reportid: reportid });
    return params;
}

// 获取录音列表
export const recordingList = (demandid) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        demandid: { location: 'path', key: 'demandid', value: "", require: "true" },
    };
    let params = new Request.apiParams(baseUrl, "/customer/demands/{demandid}/recordings", "get", dataParams);
    params.setParams({ version: "v1", demandid: demandid });
    return params;
}
// 根据需求ID上传目标客户名单附件(暂时没有用到)
export const uploadAttach = (demandid,data)=>{
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        demandid: { location: 'path', key: 'demandid', value: "", require: "true" },
        body: { location: 'body', key: 'body', value: "", require: "true" },
    };
    let params = new Request.apiParams(baseUrl, "/customer/demands/{demandid}/attachments", "get", dataParams);
    params.setParams({ version: "v1", demandid: demandid, body: data });
    return params;
}

// 发包方用户获取品牌名列表(暂时没有用到)
export const getBrand = (customerid) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        customerid: { location: 'path', key: 'demandid', value: "", require: "true" }
    };
    let params = new Request.apiParams(baseUrl, "/customer/customers/{customerid}/brands", "get", dataParams);
    params.setParams({ version: "v1", customerid: customerid});
    return params;
}

// 发包方用户新增品牌名(暂时没有用到)
export const addBrand = (customerid,data) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        customerid: { location: 'path', key: 'demandid', value: "", require: "true" },
        body: { location: 'body', key: 'body', value: "", require: "true" },        
    };
    let params = new Request.apiParams(baseUrl, "/customer/customers/{customerid}/brands", "post", dataParams);
    params.setParams({ version: "v1", customerid: customerid, body:data});
    return params;
}

// 发包方用户新增品牌名集合(暂时没有用到)
export const addBrands = (customerid, data) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        customerid: { location: 'path', key: 'demandid', value: "", require: "true" },
        body: { location: 'body', key: 'body', value: "", require: "true" },
    };
    let params = new Request.apiParams(baseUrl, "/customer/customers/{customerid}/brands", "put", dataParams);
    params.setParams({ version: "v1", customerid: customerid, body: data });
    return params;
}

// 删除品牌名(暂时没有用到)
export const deleteBrand = (customerid, brandid) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        customerid: { location: 'path', key: 'demandid', value: "", require: "true" },
        brandid: { location: 'path', key: 'brandid', value: "", require: "true" },
    };
    let params = new Request.apiParams(baseUrl, "/customer/customers/{customerid}/brands/{brandid}", "delete", dataParams);
    params.setParams({ version: "v1", customerid: customerid, brandid: brandid });
    return params;
}
// radies登陆接口(暂时没有用到)
export const login = (loginMessage) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        loginMessage: { location: 'body', key: 'loginMessage', value: "", require: "true" },
    };
    let params = new Request.apiParams(baseUrl, "/customer/login/validate", "post", dataParams);
    params.setParams({ version: "v1", loginMessage: loginMessage });
    return params;
}
// radies登出接口
export const loginOut = (loginMessage) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        loginMessage: { location: 'body', key: 'loginMessage', value: "", require: "true" },
    };
    let params = new Request.apiParams(baseUrl, "/customer/login/logout", "post", dataParams);
    params.setParams({ version: "v1", loginMessage: loginMessage});
    return params;
}

// radies查询用户信息
export const loginMessage = (loginMessage) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        loginMessage: { location: 'body', key: 'loginMessage', value: "", require: "true" },
    };
    let params = new Request.apiParams(baseUrl, "/customer/login/msg", "post", dataParams);
    params.setParams({ version: "v1", loginMessage: loginMessage });
    return params;
}
// radies查询用户是否存在接口(暂时没有用到)
export const loginExit = (loginMessage) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        loginMessage: { location: 'body', key: 'loginMessage', value: "", require: "true" },
    };
    let params = new Request.apiParams(baseUrl, "/customer/login/exist", "post", dataParams);
    params.setParams({ version: "v1", loginMessage: loginMessage });
    return params;
}
// radies设置用户登录保存时间(暂时没有用到)
export const loginSetTime= (loginMessage,second) => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        loginMessage: { location: 'body', key: 'loginMessage', value: "", require: "true" },
        seconds: { location: 'path', key: 'seconds', value: "", require: "true" },
    };
    let params = new Request.apiParams(baseUrl, "/customer/expire/{seconds}", "post", dataParams);
    params.setParams({ version: "v1", loginMessage: loginMessage, seconds:second });
    return params;
}

// 刷新用户信息(暂时没有用到)
export const userMsg = () => {
    const baseUrl = "https://gateway.mshuoke.com"
    const dataParams = {
        version: { location: 'header', key: 'version', value: "v1", require: "true" },
        jfuid: { location: 'path', key: 'jfuid', value: "", require: "true" },
    };
    let params = new Request.apiParams(baseUrl, "/customer/login/usermsg/{jfuid}", "post", dataParams);
    params.setParams({ version: "v1", jfuid: jfuid});
    return params;
}
