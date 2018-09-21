/* 
//对象包含哪些元素
//1.属性（字段）
//2.方法（函数）

var box=new Object();//创建一个对象
box.name='赵盼盼';
box.age=23;
alert(box.age);

var box=Object();//new关键字省略了
alert(box);
var box={};//字面量方式创建的对象
box.name='赵盼盼'//传统赋值方式
alert(box);

var box={//用字面量方式封装数据
    'name':'赵盼盼',//属性可以用引号括起来
    'age':23
};
alert(box.name+box.age);
alert(box['name','age'])

var box={//用字面量方式封装数据
    'name':'赵盼盼',//属性可以用引号括起来
    'age':23
};
alert(box.name+box.age);
alert(box['name']+box['age'])//用数组的方式输出

function objrun(){
    return '123';
}
var box=new Object();//创建一个对象
box.name='赵盼盼',
box.age=28,
box.run=objrun;//这里有点小复杂,如果这里objrun不加括号，那么下面alert中的run要加括号，不加括号的话返回一个函数
alert(box.run);

var box={
    name:'赵盼盼',
    age:23,
    run:function(){//匿名函数
        return '123';
    }
};
alert(box.run());//调用函数，如果没有圆括号，不会打印代码，有圆括号，才会打印返回值

var box={
    name:'赵盼盼',
};
alert(box.name);
delete box.name;//删除属性
alert(box.name);

function box(name,age,height,address,love){
    alert(name);
    alert(age);
}
box('赵盼盼',23,155,'安顺','睡觉');

function box(obj){
if(obj.name!=undefined)alert(obj.name);
if(obj.name!=undefined) alert(obj.age);
  if(obj.love!=undefined) alert(obj.love);
}
var obj={
    name:'赵盼盼',
    age:23,
    height:155,
    address:'安顺',
};
box(obj)
 */

function box(obj){
if(obj.name!=undefined)alert(obj.name);
if(obj.name!=undefined) alert(obj.age);
  if(obj.love!=undefined) alert(obj.love);
}
box({//匿名对象
    name:'赵盼盼',
    age:23,
    height:155,
    address:'安顺',
});
box(obj)