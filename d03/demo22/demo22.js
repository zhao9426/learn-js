/* 
//常用正则
//1.检查邮政编码
var pattern=/[1-9][0-9]{5}/;
var str='224000';//必须是6位，必须是数字，第一位不能为0
alert(pattern.test(str));


//2.检查文件压缩包
var pattern=/^[\w]+\.(zip|gz|rar)$/;//\w+,加上^来限定首字符开始匹配,｜选择符必须用分组符号包含起来
var str='213.zip';//文件名：字母—数字.zip,gz.rar.7z
alert(pattern.test(str));

//3.删除多余空格
var pattern=/\s/g;
var str='111 22 333 444';
alert(str.replace(pattern,''));

var pattern=/^\s+(.+?)\s+$/;//(.+)是贪婪模式，惰性模式
var str='     google    good     ';
var result=pattern.exec(str)[1];
alert('|'+result+'|');

var pattern=/^\s+(.+?)\s+$/;//s
var result=str.replace(pattern,'$1');//使用分组模式
alert('|'+result+'|');

 */

//简单的电子邮件验证
var pattern=/^([\w\.\-]+)@([\w\-]+).([a-zA-Z]{2,4})$/;
var str='bnbnbbs@163.com';
alert(pattern.test(str));