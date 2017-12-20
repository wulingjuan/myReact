export default{
    setItem:function(key,value){
        try {
            // ios safair无痕模式下或报错
            localStorage.setItem(key, value)
        } catch (error) {
            // 开发环境下报错
        }
    },
    getItem:function(key){
        let value;
        try {
            value = localStorage.getItem(key);
        } catch (error) {
            // 开发环境下报错
        } finally{
            return value;
        }
    }

}