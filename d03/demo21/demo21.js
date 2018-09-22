/*
 //使用exec返回数组
var pattern=/^[a-z]+\s[0-9]{4}$/
var str='google 2012';
alert(pattern.exec(str));//返回一个包含字符串的数组

var pattern=/^[a-z]+/;//只匹配配到字母
var str='google 2012';
alert(pattern.exec(str));//返回一个包含字符串的数组

var pattern=/^([a-z]+)\s([0-9]{4})$/;//使用分组
var str='google 2012';
var a=pattern.exec(str);
//alert(a.length);//3
alert(a[0]);//a[0]返回匹配到的整个字符串
alert(a[1]);//a[1]返回匹配到的第一个分组的字符串
alert(a[2]);//a[2]返回匹配到的第二个分组的字符串

//捕获性分组和非捕获性分组
var pattern=/(\d+)([a-z])/;//这个叫做捕获性分组，所有的分组都捕获返回
var str='123abc';
var a=pattern.exec(str);
//a[0]返回123a
//a[1]返回123
//a[2]返回a

var pattern=/(?:\d+)(?:[a-z])/;//非捕获性分组，只要在不需要捕获返回的分组上加上?:
var a=pattern.exec(str);
//a[0]返回123a
//a[1]返回123
//a[2]返回a

//使用分组嵌套
var pattern=/(a?(b?(c?)))/;//嵌套分组，从外往内获取
var str='abc';
var a=pattern.exec(str);
alert(a[0]);//整个匹配到字符串abc
alert(a[1]);//匹配到第一个分组(a?(b?(c?))),abc
alert(a[2]);//匹配到第二个分组(b?(c?)),bc
alert(a[3]);//匹配到第三个分组(c?),c

//使用前瞻捕获
var pattern=/goo(?=gle)/;//goo后面必须是gle才能返回goo,这里一定要注意，返回的是goo,而不是google
var str='google';
alert(pattern.exec(str));//返回的是goo而不是google，这是前瞻性捕获

//使用特殊字符匹配
var pattern=/\[/;//用\符号来转义正则里的特殊字符，才能匹配
var str='[';
alert(pattern.exec(str));

 */
//使用换行模式
var pattern=/^\d+/gm;//限定了首匹配，并且开启换行模式
var str='1.baidu\n2.google\n3.bing';
alert(str.replace(pattern,'#'));
