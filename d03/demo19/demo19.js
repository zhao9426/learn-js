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

var pattern=/go+gle/;//o+，表示1个，或者多个
var str='google';
alert(pattern.test(str));

var pattern=/go?gle/;//o？，表示1个，或者0个
var str='google';
alert(pattern.test(str));

var pattern=/g.?gle/;//.?，表示1个，或者0个
var str='google';
alert(pattern.test(str));//false

var pattern=/go{2,4}gle/;//o{2,4}表示o2-4次，包含2和4
var str='google';
alert(pattern.test(str));


var pattern=/go{3}gle/;//o{3}表示只能限定3个
var str='google';
alert(pattern.test(str));

//使用字符类匹配
var pattern=/g[a-zA-Z_]*gle/;//[a-z]*表示任意个a-z中的字符
var str='google';
alert(pattern.test(str));//true

var pattern=/g[^0-9]*gle/;
var str='google';
alert(pattern.test(str));//true

var pattern=/oogle/;
var str='google';
alert(pattern.test(str));//true

var pattern=/[a-z]oogle/;//[a-z]表示26个小写字母，任意一个都可以匹配
var str='google';
alert(pattern.test(str));//true

var pattern=/[A-Z]oogle/;//[A-Z]表示26个大写字母，任意一个都可以匹配
var str='google';
alert(pattern.test(str));//true

var pattern=/[0-9]*oogle/;//[0-9]*表示0次，一次，或者多次
var str='44444oogle';
alert(pattern.test(str));//true


var pattern=/[a-zA-Z0-9]*oogle/;//[a-zA-Z0-9]表示匹配大小写的a-zA-Z0-9
var str='44444oogle';
alert(pattern.test(str));//true

var pattern=/[^0-9]*oogle/;//[^0-9]表示非0-9的任意字符
var str='boogle';
alert(pattern.test(str));//true

var pattern=/[^a-zA-Z0-9]*oogle/;//[^0-9]表示非0-9的任意字符
var str='_oogle';
alert(pattern.test(str));//true

//使用锚源字符匹配
var pattern=/^[0-9]oogle/;//这个^符号，是加在/后面的而不是[]里面的
var str='444oogle';
alert(pattern.test(str));//false

var pattern=/^[0-9]+oogle/;//+可以匹配一个或者多个
var str='444oogle';
alert(pattern.test(str));//true

var pattern=/\woogle/;//\w表示[a-zA-Z_]
var str='_oogle';
alert(pattern.test(str));//true

var pattern=/\doogle/;//\d表示[0-9]
var str='9oogle';
alert(pattern.test(str));//true

 */

 
var pattern=/^[a-z]oo[0-9]$/;//^强制首匹配，$强制尾匹配
var str='9oogle';
alert(pattern.test(str));//false
