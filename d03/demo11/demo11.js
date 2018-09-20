/* 
//函数声明
function box(){ //无参函数声明
    alert('我只有被调用了才可以执行');      //函数本身没有运行功能，必须调用才可以执行
}
box();//调用

function box(name,age){//有参的函数声明
    alert('你的姓名是：'+name+'年龄为：'+age);
}
box('赵盼盼',23);


function box(){
    return '我只有被调用才可以执行！';//return表示把这句话字符串返回回来
}
//打印出函数调用返回过来的结果
alert(box());//调用，相当于box='我只能被调用才可以执行'

function box(name,age){
    return '你的姓名是：'+name+' 你的年龄是：'+age;
}
alert(box('赵盼盼',23));

function box(){
    return 20;//当一个函数遇到第一个return，就会终止函数继续往下执行
    return 30;
}
alert(box());


function box(num){
    if(num<5) return num;
    return 100;
}
alert(box(3));

function box(){
    return arguments[0]+'|'+arguments[1]+'|'+arguments[2]+'|'+arguments[3]+'|'+arguments[4]+'|'
}
alert(box('赵盼盼',23,'软件工程','安顺'));

function box(){
    var sum=0
    for(var i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    return sum;
}
alert(box(1,2,3,4,5,6,7,8,9,10));

function box(num){
    return num+100;
}
function box(num){
    return num+200;
}
alert(box(20));//220，被第二个函数给覆盖了

function box(num,a){
    return num+100;
}
function box(num){//第二个函数把第一个函数覆盖掉了，不具备重载功能
    return num+200;
}
alert(box(50,1));//250重载就是根据参数，选择相同的函数名而参数不同的函数
 */
