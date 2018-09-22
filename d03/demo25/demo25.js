/* 

//变量作用域
//2.动态属性
var box=new Object();//或者写成｛｝
box.name='lee';//添加一个属性
alert(box.name);

var box='lee';//基本类型值，是字符串
box.age=23;//基本类型值添加属性很怪异
alert(box.age)//undefined，不是引用类型，不能输出

//3.复制变量值
var box='lee';
var bo2=box;
box2='kkk';//基本类型保持独立，box2的修改不会影响box
alert(box);
alert(box2);

var box=new Object();
box.name='lee';
var box2=box;
box2.name='kkk';//因为他们指向同一个object，同一个name，不管修改谁，大家都会被修改
alert(box.name);
alert(bo2.nmae);

//4.传递参数(js中没有按引用传递)
function box(num){
    num+=10;
    return num;
}
var num=50;
alert(box(num));
alert(num);//如果是按引用传递，那么韩寒诉里的num会成为类似全局变量
           //也就是说，最后应该输出60

           function box(obj){//这里传递一个引用类型的参数，但不是按引用传递，是按值传递
    obj.name='lee';
    var obj=new Object();//所以，js没有按引用传参的功能，切记，不能把传递引用参数当作按引用传参
    obj.name='kkk';
}
var obj=new Object();
box(obj);
alert(obj.name);

//5.检测类型
var box=[1,2,3];
alert(typeof box);//object
var box2={};
alert(typeof box2);//object
var box3=/g/;
alert(typeof box3);//object

var box=[1,2,3];
alert(box instanceof Array);//true
var box2={};
alert(box2 instanceof Object);//true
var box3=/g/;
alert(box3 instanceof RegExp);//true

var box=new String('lee');
alert(box instanceof String);//true

 */
