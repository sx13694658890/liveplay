import Taro from "@tarojs/taro"

export const getStore=(key)=>{
    let str=Taro.getStorageSync(key)
    if(!str)return []
    return JSON.parse(str)
}
export const setStore=(key,obj)=>{
    let str;
    if(typeof obj==="object"){
        str=JSON.stringify(obj)
    }
  Taro.setStorageSync(key,str)
   
}
 