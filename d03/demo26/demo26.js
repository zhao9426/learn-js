/* 
//6.执行环境及作用域
var box='lee';
function setBox(){
    return 123;
}
alert(box);//lee
alert(setBox());//123

var box='lee';
function setBox(){
    return 123;
}
alert(window.box);//lee,全局变量，最外围，属于window属性
alert(window.setBox());//123，全局函数，最外围，属于window方法

var box='lee';
function setBox(){
    function setColor(){
        return 456;
    }
    return 123;
   
}
alert(window.setColor())//报错

var box='lee';
function setBox(){
    var box='red';//这个是局部变量，他的范围在setBox()里，出来就不认识了
}
setBox();
alert(box)//lee

var box='lee';
function setBox(){
     box='red';//去掉var就是全局变量
}
setBox();
alert(box)//red

var box='lee';
function setBox(box){//通过传参，也是局部变量，作用域在setBox()范围下
    alert(box);
}
setBox('red');//red
alert(box)//lee

var box='lee';
function setBox(){
    function setColor(){
        var b='kkk';//setColor()方法的作用域在setBox()内
        alert(b);//b的作用域在setColor()里
        return 123
    }
    return setColor();
}
alert(setBox());


//7.没有块级作用域
if(true){//if语句花括号没有块级作用域
    var box='lee';
}
alert(box);//lee
alert(window.box);//lee

for(var i=0;i<10;i++){//for语句花括号也没有会计作用域
    var box='lee';
}
alert(i);
alert(box);
alert(window.i);//10
alert(window.box);//lee

function box(){
    var num=10;//如果有var，在函数体内声明变量，就是局部的，去掉就是全局
}
box();
alert(num);

var box='lee';
function setBox(){
    var box='red';//是局部变量，变量查询中，访问局部变量要比访问全局变量快，因而不许向上搜索作用域链
    return box;
}
alert(setBox());

var box={};
box.name='lee';
alert(box.name);
box=null;//销毁引用，等待垃圾回收集器来清理
alert(box);
 */
var box={};
alert(window.box);
window.box=null;
alert(window.box);