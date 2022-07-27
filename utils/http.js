import request from './request'

// 获取色卡分类
export function getColorCardType(params) {
    return new Promise((resolve, reject)=>{
        request.get("/index/getColorCardType", params).then((result)=>{
            resolve(result)
        }).catch(err=>{
            reject(err)
        });
    });
}

// 获取色卡
export function getColorCard(params) {
    return new Promise((resolve, reject)=>{
        request.get("/index/getColorCard", params).then((result)=>{
            resolve(result)
        }).catch(err=>{
            reject(err)
        });
    });
}

// 获取配色分类
export function getModelingType(params) {
    return new Promise((resolve, reject)=>{
        request.get("/index/getModelingType", params).then((result)=>{
            resolve(result)
        }).catch(err=>{
            reject(err)
        });
    });
}

// 获取配色
export function getModeling(params) {
    return new Promise((resolve, reject)=>{
        request.get("/index/getModeling", params).then((result)=>{
            resolve(result)
        }).catch(err=>{
            reject(err)
        });
    });
}

// 获取产品
export function getProduct(params) {
    return new Promise((resolve, reject)=>{
        request.get("/index/getProduct", params).then((result)=>{
            resolve(result)
        }).catch(err=>{
            reject(err)
        });
    });
}

// 获取文章
export function getArticle(params) {
    return new Promise((resolve, reject)=>{
        request.get("/index/getArticle", params).then((result)=>{
            resolve(result)
        }).catch(err=>{
            reject(err)
        });
    });
}