/*
//使用锚字符匹配
var pattern=/goo gle/;//直接使用空格匹配
var str='goo gle';
alert(pattern.test(str));

var pattern=/goo\sgle/;//\s表示空格匹配
var str='goo gle';
alert(pattern.test(str));//true

var pattern=/google\b/;//\b表示到达边界
var str='google';
alert(pattern.test(str));//true

//使用或模式匹配
var pattern=/google|baidu|bing/;//|表示匹配或选择模式
var str="google";
alert(pattern.test(str));

//使用分组匹配
var pattern=/(google){4,8}/;//匹配分组里的字符串4-8次
var str="googlegoogle";
alert(pattern.test(str));//false

var pattern=/8(.*)8/;//获取8..8之间的任意字符
var str="This is 8google8";
str.match(pattern);
alert(RegExp.$1);//RegExp.$1表示获取模式中第一个分组对应的匹配字符串

var pattern=/8(.*)8/;//获取8..8之间的任意字符
var str='This is 8google8';
pattern.test(str);
alert(RegExp.$1);//google,RegExp.$1表示获取模式中第一个分组对应的匹配字符串

var pattern=/8(.*)8/;//获取8..8之间的任意字符
var str='This is 8google8';
pattern.exec(str);
alert(RegExp.$1);//google,RegExp.$1表示获取模式中第一个分组对应的匹配字符串

var pattern=/8(.*)8/;//获取8..8之间的任意字符
var str='This is 8google8';
str.match(pattern);
alert(RegExp.$1);//google,RegExp.$1表示获取模式中第一个分组对应的匹配字符串

var pattern=/8(.*)8/;//获取8..8之间的任意字符
var str='This is 8baidu8';
document.write(str.replace(pattern,'<strong>$1</strong>'));//$1表示分组获取字符串匹配到内容

var pattern=/(.*)\s(.*)/;//获取8..8之间的任意字符
var str='google baidu';
alert(str.replace(pattern,'$2 $1'));//位置交换

//关于贪婪和惰性
var pattern=/[a-z]+/;//这里使用了贪婪模式
var str='abcdefj';
alert(str.replace(pattern,'1'));//所有字符串变成了1

var pattern=/[a-z]+?/;//这里使用了惰性模式
var str='abcdefj';
alert(str.replace(pattern,'1'));//只有第一个字符变成了1，后面的都不匹配

var pattern=/[a-z]+?/g;//开启全局，并且使用了惰性模式
var str='abcdefj';
alert(str.replace(pattern,'1'));//每一个字母替换成1

var pattern=/[a-z]+/g;//开启全局，并且使用了贪婪模式
var str='abcdefj';
alert(str.replace(pattern,'1'));//只有第一个字符变成了1，后面的都不匹配


var pattern=/8(.*)8/;//使用了贪婪模式
var str='8google google google8';//匹配到google google google
document.write(str.replace(pattern,'<strong>$1</strong'));//加粗的google google google

var pattern=/8(.*?)8/g;//使用了惰性模式模式，开启全局
var str='8google8 8google8 8google8';
document.write(str.replace(pattern,'<strong>$1</strong'));//加粗的google 和两个不加粗的google google
 */
var pattern=/8([^8]*)8/g;//8的匹配，也就是两边包含字符
var str='8google8 8google8 8google8';
document.write(str.replace(pattern,'<strong>$1</strong'));//加粗的google 和两个不加粗的google google