/* 
//位非
var box=~25;alert(box);//-26
//位与
var box=25&3;alert(box);//1
//位或
var box=25|3;alert(box);//27
//位异或
var box=25^3;alert(box);//26
//左移
var box=25<<3;alert(box);//20
//右移
var box=25>>3;alert(box);//3
//无符号右移
var box=25>>>3;alert(box);//3

//赋值运算符
var box=100;alert(box);
//复合运算符
var box=100;
box=box+100
alert(box);//200
//复合运算符也可以这样写
var box=100;
box+=100;
alert(box);//200
//字符串运算符，只有有一个是字符串他们相加就是用字符串连接符拼接
var box='100'+100;alert(box);//100100


//逗号运算符
var box=100,age=20,height=178//多个变量声明
var box=(1,2,3,4);alert(box);//4,变量声明，将最后一个值赋给变量，不常用
var box=[1,2,3,4];alert(box);//[1,2,3,4],数组的字面量声明
var box={
    3:4,
    5:6
};alert(box);//[object,Object]


if(3>4){
    box='对';
}else{
    box='错';
}
alert(box);//也可以用下面方式改写
var box=3>4?'对':'错';
alert(box);
 */
