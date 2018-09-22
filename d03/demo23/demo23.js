/* 
//函数声明方式
function box(num1,num2){//普通函数的声明方式
return num1+num2;
}
alert(box(1,2));

var box=function(num1,num2){//使用变量初始化函数方式
    return num1+num2;
}
alert(box(1,2));

//作为值的函数
//函数可以传递函数
//下面这个例子很普通，不是作为函数来传递的，而是作为函数的返回值来传递的
function box(sum,num){
    return sum+num;
}
function sum(num){
    return num+10;
}
var result=box(sum(10),10);//sum(10)这里传递的是函数的返回值，和普通的变量一样
alert(result);//30
 */
//要把函数本身作为参数传递，而不是函数的结果

function box(sum,num){
    return sum(num);
}
function sum(num){
    return num+10;
}
var result=box(sum,10);//这里sun是一个函数，当作参数传递到另一个函数里，而不是汉书的返回值
alert(result);//20