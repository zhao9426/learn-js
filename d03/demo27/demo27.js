/* 
//基本包装类型
var box='Mr.Lee';//基本类型
//alert(box);
//alert(typeof box);
alert(box.substring(2));//.Lee,对象.方法（参数),这种写法明显是引用类型的写法，索引0开始，从第二个位置开始截取到末尾的字符串输出
                        //是基本类型，但又是特殊的引用类型，基本包装类型
                        //因为他可以调用系统内置的方法
alert('MR.lee'.substring(2));//有效


var box='Mr.lee';
box.name='lee';
box.age=function(){
    return 100;
};
alert(box);//Mr.lee
alert(typeof box);//String
alert(box.substring(2));//.lee
alert(box.name);//undefined,打印不出来
alert(box.age());//出错
                //基本类型是无法给自己创建属性和方法的，但是，可以调用系统内置的属性和方法


 var box=new String('Mr.Lee');//object
box.name='Lee';
box.age=function(){
    return 100;
}
alert(box);//Mr.Lee
alert(box.substring(2));//.Lee
alert(box.name);//Lee,自定义属性有效
alert(box.age());//100，自定义方法有效

//number静态属性
var box=100;
alert(box.MAX_VALUE);//这种写法叫做属性
alert(Number.MAX_VALUE);//这种写法（类型.属性），叫做静态属性

var box=1000;
alert(typeof box);//number
alert(typeof box.toString());//String,toString()把数值转换字符串
alert(box.toLocaleString());//1,000本地化


var box=1000.789;
alert(typeof box);//number
alert(typeof box.toString());//String,toString()把数值转换字符串
alert(box.toLocaleString());//1,000本地化
alert(box.toFixed(2));//小数点保留两位，并转换字符串，四舍五入
 */
var box=1000.789;
alert(typeof box);//number
alert(typeof box.toString());//String,toString()把数值转换字符串
alert(box.toLocaleString());//1,000本地化
alert(box.toFixed(2));//小数点保留两位，并转换字符串，四舍五入
alert(box.toPrecision(3));//根据传参来决定指数或者点数
