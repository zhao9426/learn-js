/* 
//创建正则表达式
//用new创建
var box=new RegExp('Box');//第一个参数是模式字符串
alert(box);///Box/，两个反斜杠是正则表达式的字面量表示法


var box=new RegExp('Box','gi');//第二个参数可选，模式修饰符
alert(box);///Box/gi

var box=/Box/;//使用字面量的正则
alert(box);//
var box=/Box/ig;//字面量正则带修饰符的,在第二个斜杠后面加上模式修饰符
alert(box);///Box/gi

//测试正则表达式
//使用new方法
var pattern=new RegExp('Box');//模式
var str='box';//字符串
alert(pattern.test(str));//f返回的是false，大小写不一致

var pattern=new RegExp('Box','i');//区分大小写
var str='box';
alert(pattern.test(str));//true
alert(/Box/i.test('box'));//true,一句话匹配

var pattern=/Box/i;//使用字面量方式
var str='box';
alert(pattern.test(str));//true

var str='box';
var str2='box';
alert(str==str2);//true,字符串的匹配比较方式

var pattern=/Box/i;//不区分大小写
var str='This is a box';//一句英文
alert(pattern.test(str));//true,字符串中是否包含模式中的正则，This is a box 中是否包含不区分大小写的box

var pattern=/Box/i;//不区分大小写
var str='This is a xox';//一句英文
alert(pattern.test(str));//false,字符串中是否包含模式中的正则，This is a box 中是否包含不区分大小写的box

var pattern=/Box/i;//不区分大小写
var str='box';
alert(pattern.exec(str));//box,返回的是数组，类型是Object，有就返回数组的值，没有就返回null

 */
var pattern=/Box/i;//不区分大小写
var str='ssss';
alert(pattern.exec(str));//box,返回的是数组，有就返回数组的值，没有就返回null

