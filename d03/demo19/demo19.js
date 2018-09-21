/* 
//获取控制
//使用点字符
var pattern=/g..gle/;//点符号表示匹配除换行符之外的任意字符
var str='gokgle';
alert(pattern.test(str));//true

//重复匹配
var pattern=/g.*gle/;//.匹配0个一个或多个
var str='google';//*,?,+,{n,m}
alert(pattern.test(str));//true


//使用字符类匹配
var pattern=/g[a-zA-Z_]*gle/;
var str='google';
alert(pattern.test(str));//true
 */
var pattern=/g[^0-9]*gle/;
var str='google';
alert(pattern.test(str));