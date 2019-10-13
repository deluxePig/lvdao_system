
import cryptoJs from 'crypto-js'
/**  构造处理url参数的方法
 * data 要处理的数据
 * */
function urlRequest() {
    /* let url = location.search; //获取url中"?"符后的字串*/
    //设置或获取 href 属性中在井号“#”后面的分段/
    let widurlhash=window.location.hash
    //设置或获取 href 属性中跟在问号后面的部分。
    let widurl=window.location.search
    let theRequest = new Object();
    let url=decodeURIComponent(widurl)
     url=decodeURIComponent(url)
    if (url.indexOf("?") != -1) {
        // console.log("url::")
        // console.log(url)
        let str = url.substr(1);
        let strs = str.split("&");
        for(let i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
        }
    }
    return theRequest;
};

/**DES加密**/
function encryptDes (message, key) {
  /*  let keyHex = cryptoJs.enc.Utf8.parse(key)
    let option = { mode: cryptoJs.mode.ECB, padding: cryptoJs.pad.Pkcs7 }
    let encrypted = cryptoJs.DES.encrypt(message, keyHex, option)
    return encrypted.ciphertext.toString()*/
    var keyHex = cryptoJs.enc.Utf8.parse(key);
    var encrypted = cryptoJs.DES.encrypt(message, keyHex, {
        mode : cryptoJs.mode.ECB,
        padding : cryptoJs.pad.Pkcs7
    });
    return encrypted.toString();

}

/**DES解密**/
function decryptDes (message, key) {
   /* let keyHex = cryptoJs.enc.Utf8.parse(key)
    let decrypted = cryptoJs.DES.decrypt(
        {
            ciphertext: cryptoJs.enc.Hex.parse(message)
        },
        keyHex,
        {
            mode: cryptoJs.mode.ECB,
            padding: cryptoJs.pad.Pkcs7
        }
    )
    return decrypted.toString(cryptoJs.enc.Utf8)*/
    return cryptoJs.DES.decrypt(message, cryptoJs.enc.Utf8.parse(key), {
        mode: cryptoJs.mode.ECB,
        padding: cryptoJs.pad.Pkcs7
    }).toString(cryptoJs.enc.Utf8);

}



/**  构造处理数字每3位加逗号
 * value 要处理的数
 * */
function dataHandle (value) {
    // console.log("value::")
    // console.log(value)
    value = String(value);
    if(!value) return '0.00';

    let intPart = parseInt(Number(value)) ; //获取整数部分parseInt()
    if( typeof intPart != 'number' || isNaN(intPart)) return "——";
    let intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断
    let floatPart = ""; //预定义小数部分
    let value2Array = value.split(".");

    //=2表示数据有小数位
    if(value2Array.length == 2) {
        floatPart = value2Array[1].toString().substr(0,2); //拿到小数部分
        return intPartFormat + "." + floatPart;
       /* if(floatPart.length == 1) { //补0,实际上用不着
            return intPartFormat + "." + floatPart + '0';
        } else {
            return intPartFormat + "." + floatPart;
        }*/
    } else {
        return intPartFormat + floatPart;
    }
}


export default {
   urlRequest,encryptDes,decryptDes,dataHandle
}
