# javascript 6种数据类型  
1. 原始类型（number,string,boolean,null,undefined)
2. 对象类型 object（Function,Array,Date)
# 隐式转换
1. 加号跟字符串表示字符串拼接，减号跟字符串表示减法
2. 等于==和严格等于===
"1.23"=1.23;
0==false;
null==undefined;
new Object()=new Object();
[1,2]=[1,2];
===比较类型不同，返回false
类型相同：null===null;
undefined===undefined;
NaN!==NaN;
new Object !==new Object
==类型相同，同===
类型不同，尝试类型转换比较：
null==undefined；true
number==String; true;转number
boolean==true/false;(1==true,0==false)转number
object==number/string尝试转换为基本类型true其他的结果为false
# 包装类型
1. 当一个基本类型尝试以对象的方式使用时，比如访问他的length属性或是增加一些属性时，JavaScript会非常智能的把基本类型包装成对应的对象
# 类型检测  
1. 检测类型的方法（typeof,instanceof,Object.prototype.toString,constructor,duck type)
2. typeof 会返回字符串适合函数对象和基本类型判断
typeof 100 "number"
typeof true "boolean"
typeof function "function"
typeof(undefined) "undefined"
typeof new Object() "object"
typeof [1,2] "object"
typeof NaN "number"
typeof null "object"
3. instanceof 判断对象类型更常用它，是基于原型链判断的一个操作符，他期望左操作数是一个对象，如果左侧是基本类型的话直接返回false右侧必须是函数对象或函数构造器不过不是就抛出typeof异常，  他的原理就是判断左边的操作对象的原型链上是否有右边这个构造函数的prototype属性 ，  caution!不同window或iframe间的对象类型检测不能使用instanceof
3. Object.prototype.toString 
判断数组Object.prototype.toString.apply([]);==="[object Array]，
判断函数Object.prototype.toString.apply(function(){});==="[object Function]"，
判断null Object.prototype.toString.apply(null);
==="[object Null]"，
判断undefined  Object.prototype.toString.apply(undefined);==="[object Undefined]"
4. 类型检测小结 
 typeof适合基本类型及function检测，遇到null失效。
 [[Class]]通过{}.toString()拿到，适合内置对象和基元类型，遇到null和undefined失效。
 instanceof适合自定义对像，也可以用来检测原生对象，在不同iframe和window间检测时失效。
# 表达式 (原始表达式，初始化表达式，函数表达式，属性访问表达式。调用表达式，对象创建表达式)
1. 原始表达式：
常量、直接量(3.14，“test”)，
关键字（null，this，true），
变量（i，k，j）
2. 复合表达式：多个原始表达式通过运算符组合而成
3. 数组、对象的初始化表达式：
数组：[1,2]等价于new Array(1,2)
[1, , ,4]等价于[1,undefined,undefined,4],
对象：{x:1,y:2}等价于var o=new Object();
o.x=1;o.y=2;
4. 函数表达式  
var fe=function(){};
(function(){console.log('hello World');})();
5. 属性访问表达式
var o={x:1}
o.x;
o['x'];
6. 调用表达式
func();
7. 对象创建表达式
new Func(1,2);
new Object;
# 运算符
按操作数分：
1. 一元运算符：+num；
2. 二元运算符：a+b；
3. 三元运算符：c?a:b;
按功能分：
1. 赋值：x+=1;
2. 比较:a==b;
3. 算术:a-b;
4. 位:a|b;
5. 逻辑:exp1&&exp2;
6. 字符串:"a"+"b";
7. 特殊:
delete运算符：delete obj.x; 例：var obj={};
Object.definedProperty(obj,'x',{
    configurable:false,
    value:1
});
delete obj.x;//false
obj.x;//1;
条件运算符：c?a:b;
逗号运算符：a,b 例：var val=(1,2,3);//val=3;

in 运算符：window.x=1;
'x' in window;//true;
instanceof运算符：obj instanceof Func
typeof运算符：typeof 100;
new 运算符:new ClsName();
this运算符:return this;
void运算符:void o;
# block语句、var语句  
1. block块语句：（没有块级作用域）
语法：{
    语句1；
    语句2；
    ...
    语句n；
}
2. var 语句
var a=b=1；隐式的创建了一个全局变量b；
#函数、switch、循环
1. 函数：
函数声明function fd(){
    //do sth
    return true
}在他之前调用函数是true
函数表达式varfe=function(){
    //do sth
};在他之前调用函数会抛出异常
2. for...in语句：
2.1 顺序不确定
2.2 enumerable为false时不会出现
2.3 for in对象属性时受原型链影响
如果想要以顺序遍历数组或遍历对象属性不要用for in
3. switch语句
4. 循环语句：
while语句while(isTrue){
    //do sth
}
do...while语句do{
    //do sth
}while(isTrue)
for语句for(i=0;i<n;i++){
    //do sth
}
with语句可以修改当前作用域with({x:1}){
    console.log(x);
}
# 严格模式
1. 不允许用with
所有变量必须声明，赋值给为声明的变量报错，而不是隐士创建全局变量。
eval中的代码不能创建eval所在作用域下的变量、函数。而是为eval单独创建一个作用域，并在eval返回时丢弃。
函数中的特殊对象argument是静态副本，而不像严格模式那样，修改argument或参数变量会互相影响。
删除configurable=false的属性时报错，而不是忽略
禁止八进制字面量
eval，arguments变为关键字，不可做为变量名、函数名等
一般函数调用时（不是对象的方法调用，也不使用apply/call/bind等修改this）this指向null，而不是全局对象。
若使用apply/call，当传入null或undefined时，this将指向null或undefined，而不是全局变量。
试图修改不可写属性（writable=false），在不可扩展的对象上添加属性时报TypeError，而不是忽略。
argument.caller，arguments.callee被禁用
# 对象
1. 对象中包含一系列属性，这些属性是无序的。
每个属性都有一个字符串key和对应的value值
# 创建对象、原型链
1. 字面量方式创建对象：例：var obj1={x:1,y:2};
2. 使用new/原型链方式创建对象：例：function foo(){}
    foo.prototype.z=3;
    var obj=new foo();
    obj.y=2;
    obj.x=1;
3. 通过Object.create方式创建对象： 例：var obj=Object.create({x:1});
# 属性操作
1.属性操作有:读写属性操作、属性异常、
删除属性var 定义的全局比变量还是局部变量任然不能被删除函数也一样，但是隐士创建一个全局变量可以被删除但是不推荐
、检测属性、枚举属性
# 属性标签
1. writable配置标签：表示属性是否可写或者修改,不配置时默认为false
2. enumerable配置标签：表示属性是否可以被遍历是否可以被枚举，会影响for in中是否会出现，不配置时默认为false
3. configuration配置标签：表示属性是否可以被修改可不可以通过delete删除属性返回false不能，不配置为false
4. getOwnPropertyDescriptor();获取某个属性的配置标签
# 对象标签
1. [[proto]]原型标签
2. [[class]]类标签
```
var toString=Object.prototype.toString;
function getType(o) {
    return toString.call(o).slice(8,-1);
}
toString.call(null);//"[object null]"
getType(null);//"Null"
getType(new Number(1));//"Number"
```
3. [[extensible]]表示对象是否可扩展
Object.isExtensible() 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）默认为true
Object.preventExtensible()方法阻止可扩展
Object.freeze() 方法可以冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。该方法返回被冻结的对象。
Object.isFrozen()方法判断一个对象是否被冻结。
Object.seal()方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要可写就可以改变。
Object.isSealed() 方法判断一个对象是否被密封。
4. 序列化、其它对象方法
JSON.stringify();把对象转化为字符串
序列化自定义就是重写对象的toJSON方法 
# 数组
1. var arr=[1,true,null,undefined,{x:1},[1,2,3]];//以字面量方式创建数组
2. var arr=new Array();//以new Array方式创建数组
3. 通过delete删除的数组数组长度不会变 
4. 数组元素增删
增加元素可以通过如下方式
例：var arr=[];
arr[0]=1;
arr[1]=2;
arr.push(3);//从尾部增加
arr;//[1,2,3];
arr[arr.length]=4;//从尾部增加
arr=[1,2,3,4];
arr.unshift(0);//从首部增加
arr;//[0,1,2,3,4]
删除元素可以通过如下方式
例：delete arr[2];
arr;//[0,1,empty,3,4];
arr.length;//5
2 in arr;//false
arr.length-1;
arr;//[0,1,empty,3];
arr.pop();//3 返回从尾移除的数
arr;//[0,1,empty]
arr.shift();//0 返回从首移除的数
arr;//[1,empty]
5. 二维数组、稀疏数组
二维数组：var arr=[[0,1],[2,3],[4,5]];
稀疏数组：稀疏数组并不含有从0开始的连续索引。一般length属性值比实际原素个数大.用in操作符
var arr1=[undefined];
var arr2=new Array(1);
0 in arr1;//true
0 in arr2;//false
6. 数组方法
[]=>Array.prototype
Array.prototype.join将数组转换为字符串
Array.prototype.reverse将数组逆序，原数组会被修改
Array.prototype.sort排序，原数组会被修改
Array.prototype.concat数组合并，原数组不会被修改
Array.prototype.slice返回部分数组，左闭右开
Array.prototype.splice数组拼接，原数组会被修改
Array.prototype.forEach数组遍历
Array.prototype.map数组映射，原数组不会被修改
Array.prototype.filter数组过滤，原数组不会被修改
Array.prototype.some&every数组判断，some是某个元素满足条件就返回true，every是每个原属满足条件返回false
Array.prototype.reduce&reduceRigh是一种类似递归的操作.原数组不会被修改
Array.prototype.indexOf&lastIndexOf数组检索,查找元素下标如果只有一个参数，参数表示要查找的元素，如果有两个参数，第一个参数表示要查找元素，第二个参数表示查找元素从什么位置开始查找，indexOf表示从左像右查找，lastindexof表示从右开始查找
Array.isArray判断是否为数组isArray是构造器上的对象  例：Array.isArray([]);//true   判断数组还有其它方法如 [] instanceof Array;//true   ({}).toString.apply([])==='[object Array]';//true    [].constructor===Array;//true
# 函数概述
1. 函数定义：函数是一块javascript代码，被定义一次，但可以执行和调用多次。
js中的函数也是对象，所以js函数可以向对象那样操作和传递，所以我们也常叫js中的函数为函数对象
2. 重点：this ,arguments,作用域，不同调用方式，不同创建方法
3. 不同的调用方式：直接调用foo();,对象方法o.method();,构造器new Foo();call/apply/bind func.call(o);
4. 声明vs表达式：
函数声明：例：function add(a,b){
    a=+a;
    b=+b;
    if(isNaN(b)){
        return;
    }
    return a+b;
    }

    函数表达式： 例var add=function(a,b){
        //do sth
    };

    (function(){
        //dosth
    })

    return function(){
        //do sth
    };

    var add=function foo(a,b){
        //do sth
    };
5. 变量&函数的声明前置 
6. Function构造器
var func=new Function('a','b','console.log(a+b)');
func(1,2);//3
var func=Function('a','b','console.log(a+b)');
func(1,2);//3
7. 比一比：
函数声明可前置，在定义函数的作用域通过该函数名访问
函数表达式、函数构造器允许匿名可以立即调用
函数构造器没有函数名
8. 全局的this（浏览器）：一般指向全局对象就是指向window 例：console.log(this.document===document);//true
console.log(this===window);//true
this.a=37;
console.log(window.a);//37
9. 一般函数的this（浏览器）：一般指向全局对象就是指向window 在nodejs中指向global，在严格模式下默认一般指向undefined
例：function f1(){
    return this;
}
f1()===window;//true,global object

function f2(){
    "use strict";
    return this;
}
f2()===undefined;//true
10. 作为对象方法的函数的this指向对象本身
11. 对象原型链上的对象this可以拿到本身或者原型上的属性跟方法
12. get/set方法与this跟其他的类似
13. 构造器中的this this指向构造器中的对象如果有返回对象this指向返回的对象
14. call/apply方法与this
15. bind方法与this
# 闭包
1. 必报的作用在数据传递上更为灵活
2. 在计。算机科学中，闭包是指一个函数或函数的引用，与一个引用环境绑定在一起。这个引用环境是一个存储该函数每个非局部变量的表。非本变量。
闭包，不同于一般函数，它允许一个函数在立即词法作用域外调用时，仍可访问
3. 闭包小结：优点 灵活方便 封装 缺点 空间浪费 内存泄漏 性能消耗
#作用域
1.全局：什么地方都能拿到、
函数：也就是局部作用域，一般在函数内部定义的，在函数外部拿不到、
eval：
2. 利用函数作用域封装 通过中括号或者！包裹的函数里面定义的变量作用域是局部作用域
例：(function()
{
    var a,b;//a,b都是局部变量
})();
!fucntion(){
    var a,b;//a,b都是局部变量
}();
#概念与继承
1.oop(面向对象编程)：是一种程序设计泛型，同时也是一种程序开发的方法。对象指的是类的实例，它将对象作为程序的基本单元，将程序和数据封装其中，以提高软件的重要性、灵活性和扩展性    -----继承、封装、多态、抽象








