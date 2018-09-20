/* 
var box=3>2;alert(box);//true
var box=3>22;alert(box);//false
var box='3'>22;alert(box);//false
var box='3'>'22';alert(box);//true
var box='a'>'b';alert(box);//false a=97,b=98
var box='a'>'B';alert(box);//true B=66
var box=1>{
    toString:function(){
        return 123
    }
};alert(box);


var box=2==2;alert(box);//true
var box='2'==2;alert(box);//true，'2'转换成数值2
var box=false==0;alert(box);//true，false转换为数值0
var box='a'=='A';alert(box);//false,转换后的编码不同
var box=2=={};alert(box);//false,执行toString()或valueOf()会改变
var box=2==NaN;alert(box);//false,只要是NaN,都是false
var box={}=={};alert(box);//false,比较的是他们的地址，每个新创建对象的引用地址不一样
var age={};
var height=age;
var box=age==height;//true,引用地址一样，所以相等
var box='2'===2;//false,值类型必须相等
var box=2!==2;//false,只和类型都相等了

alert(null==undefined)//true
alert('NaN'=='NaN');//false
alert('5'==NaN);//false
alert(NaN==NaN);//false
alert(false==0);//true
alert(true==1);//true
alert(true==2);//false
alert(undefined==0);//false
alert(null==0)//false
alert('100'==100);true
alert('100'===100);false

var box=(5>4)&&(4>3);alert(box);//true
//如果第一个操作数是对象，则返回第二个操作数
var box={}&&(5>4);alert(box);//true,返回第二个操作数
//如果第二个操作数是对象，则第一个操作数返回true，才返回第二个操作数
var box=(5>4)&&{};alert(box);//[object,Object]
var box=(3>4)&&{};alert(box);//false
//如果有一个操作数是undefined，则返回undefined
var box=(5>4)&&undefined;alert(box);//undeifned
//如果有一个操作数是null，则返回null
var box=(5>3)&&null;alert(box);//null


var box=true&&age//c出错，age未定义
var box=false&&age;alert(box);//false,不执行age了

//如果第一个操作数是对象，则返回第二个操作数
var box={}||(5>3);alert(box);//[object,Object]
//如果两个操作数都是对象，则返回第一个操作数
var box={}||{};alert(box);//[object,Object]
//如果两个操作数都是null，则返回null
var box=null||null;alert(box);//null
//如果两个操作数都是undefined，则返回undefined
var box=undefined ||undefined;alert(box); //underfined
//如果两个c操作数都是NaN，则返回NaN
var box=NaN||NaN;alert(box);//NaN
//如果第一操作数的求值结果为false，则返回第二个操作数
var box=(3>5)||(6>7);alert(box);//false

var box=true||age;alert(box);//true
var box=false||age;age;alert(box);//出错，age未定义
//操作数是一个空字符串，返回true
 var box=!'';alert(box);//true
//操作数是一个非空字符串，返回false
 var box=!'lee';alert(box);//false
 //操作数是一个对象，返回false
 var box=!{};alert(box);//false
 //操作数是数值0，返回true
 var box=!0;alert(box);//true
 //操作数是任意非0数值（包括Infinity），false
 var box=!9;alert(box);//false
//操作数是null，返回true;
 var box=!null;alert(box);//true
 //操作数是NaN，返回true；
 var box=!NaN;alert(box);//true
 //操作数是undefined，返回true；
 var box=!undefined;alert(box);//true

 var box=!!0;alert(box);//false
 var box=!!NaN;alert(box);//false
 */
 
 
 
 
 
 









