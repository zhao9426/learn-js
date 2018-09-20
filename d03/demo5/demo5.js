/* 
var box='Lee';
var box2="Lee";
alert(box+box2);

var box="Lee';//引号必须成对
alert(box);

alert('Le\nLe');//换行符
alert('\tLeLe');//制表符
alert('Le\bLe');//空格符
alert('le\rle');//回车符
alert('le\\le');//斜杠
alert('le\'le');//单引号
alert('le\"le');//双引号
alert('\x41');//以十六进制表示一个字符
alert('\u03a3');//以十六进代码表示一个unicode字符

var box='赵';
box=box+'盼盼';
alert(box);//赵盼盼

var box=11;
alert( typeof box.toString());//String,把值转换为字符串
var box=true;
alert( typeof box.toString());//'true'

var box=10
alert(box.toString());//'10'
alert(box.toString(2));//'1010'
alert(box.toString(8));//'12'
alert(box.toString(10));//'10'
alert(box.toString(16));//'a'

var box=null;
alert(String(box));//'null',toString不能转型null和undefined
alert(typeof String(box));//String
var box;
alert(String(box));//'undefined',toString不能转型null和undefined
alert(typeof String(box));//String

var box=null;
var box={};//对象字面量的创建方法
alert(box);//[object,Object]
alert(typeof box);//Object

var box=new Object();//通过new创建一个对象
alert(box);//[object,Object]
alert(typeof box);//Object


var box=new Object(2);
alert(box);//2
alert(typeof box);//Object
var age=100;
alert(box+age);//102,可以和普通变量运算，输出结果转型成Number型了

var box=new Number(2);//这种方法是创建一个数值对象
alert(box);//2，不给参数时返回0
alert(typeof box);//Object

var box=new String('Lee');//跟var box='Lee'类似，只是类型不同第二种返回string类型
alert(box);//'Lee',类型为object

 */
var box=new Boolean();
alert(box);//false
alert(typeof box);//object
