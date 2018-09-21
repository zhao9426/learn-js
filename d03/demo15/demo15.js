/* 
var box=new Date();//创建一个日期对象,构造方法中可以传参数，指定时间，如果没传，就是默认当前的时间
alert(box);

//Date.parse()和parse.UTC()都是静态方法
alert(Date.parse('9/20/2018'));//返回的是一个毫秒数1537372800000
var box=new Date(Date.parse(1537372800000));
alert(box);//Invalid Date

var box=new Date(Date.parse('9/20/2018'));//把毫秒数转换为看得懂的时间
alert(box);//Thu Sep 20 2018 00:00:00 GMT+0800 (中国标准时间)

var box=new Date(1537372800000);//直接把毫秒数转换成看得懂的时间
alert(box);//Thu Sep 20 2018 00:00:00 GMT+0800 (中国标准时间)

var box=new Date('9/20/2018');//默认自动调用Data.parse()方法
alert(box);//Thu Sep 20 2018 00:00:00 GMT+0800 (中国标准时间)

alert(Date.parse());//没有传入日期格式参数，，返回NaN

var box=new Date('nkjmbn 23r241rt4');//乱写的日期格式，会返回Invalid Date
alert(box);

var box=new Date('May 25,2007');//第二种写法
alert(box);//Fri May 25 2007 00:00:00 GMT+0800 (中国标准时间)

var box=new Date('Fri May 25 2007 00:00:00 GMT+0800 (中国标准时间)');//第三种写法
alert(box);

//1月没有32号，只有31号，多出来的，可以进到2月
//火狐2月1号
//谷歌Invalid Date
//IE2月1号
//OPera是1月30号
var box=new Date('January 32 2007');
alert(box);


//Date.UTC()
 alert(Date.UTC());//NaN,必须传入年份和月份，不传，就是各种错误，负值，有NaN

 //UTC世界协调时间，它会按照它的区域基准来计算
 alert(Date.UTC(2018,10));//返回毫秒数
 var box=new Date(Date.UTC(2018,9,20,17,48,45,15));
 alert(box);//Sun Oct 21 2018 01:48:45 GMT+0800 (中国标准时间)

 //如果不叫Date.UTC()就返回本地时间
 var box=new Date(2018,9,20,17,48,45,15);
 alert(box);//Sat Oct 20 2018 17:48:45 GMT+0800 (中国标准时间)

 */

 
