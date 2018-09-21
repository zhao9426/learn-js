/* 
var box=new Date(2018,9,20,17,48,45,15);
alert(box);
alert('toString:'+box.toString());//toString:Sat Oct 20 2018 17:48:45 GMT+0800 (中国标准时间)
alert('toLocaleString:'+box.toLocaleString());//toLocaleString:2018/10/20 下午5:48:45
alert('ValueOf:'+box.valueOf());//ValueOf:1540028925015

//日期格式化方法
var box=new Date(2018,9,20,17,48,45,15);
alert(box.toDateString());//Sat Oct 20 2018
alert(box.toTimeString());//17:48:45 GMT+0800 (中国标准时间)
alert(box.toLocaleDateString());//2018/10/20
alert(box.toLocaleTimeString());//下午5:48:45
alert(box.toUTCString());//Sat, 20 Oct 2018 09:48:45 GMT

var box=new Date(2018,9,20,17,48,45,15);
box.setTime(100)
alert(box.getTime());

//组建方法
var box=new Date(2018,9,20,17,48,45,15);
box.setFullYear(2018);
alert(box.getFullYear());//2018

var box=new Date(2018,9,20,17,48,45,15);
box.setMonth(9);
alert(box.getMonth());//9

var box=new Date();
alert(box.getMonth()+1);//9//月份要加1才是最终月份

var box=new Date(2018,9,20,17,48,45,15);
box.setUTCFullYear(2018);
alert(box.getUTCFullYear());//2018

 */

var box=new Date();
alert(box.getFullYear()+'-'+box.getMonth()+'-'+box.getDay());
