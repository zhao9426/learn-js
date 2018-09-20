/* 
var box=100;//单行语句
var box=200;//另一方单行语句
{//多行语句
    var height=200;
    var width=200;
}

//if 语句
var box=100;
if(box>50){//if里面的括号（box>50)返回的结果转成布尔值是true的时候，则执行后面的一条语句，否则不执行
   alert(box);//100 
}
var box=10;
if(box>50){//这里是一条复合语句，被当作一条语句来对待，代码块的功能体现出来
   alert(box);//100 
   alert('不管你的if是真还是假，我都会执行到');
}
{
    alert('231');//231,被执行
}
var box=100;
if("Lee"){//123会自动转换成true，0转换为false，"lee"转换成true，空字符串转换为false
    alert(box);
}

var box=10;
if(box>50){
    alert('我很大');
}else{
    alert('我很小');
}

var box=10;
if(box>=90){
    alert('A');
}else if(box>=80){
    alert('B');
}else if(box>=60){
    alert('C');
}else{
    alert('D');
}

//switch语句
var box=3;
switch(box){//switch(box) box就是要比较的变量
    case 1://相当于if语句中的(box==1),
    alert('one');
    break;//break中途退出，防止穿透
    case 2:
    alert('two');
    break;
    case 3:
    alert('three');
    break;
    default:
    alert('不存在');
}
 */
