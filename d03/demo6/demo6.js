/* 
var box=100;
alert(++box);//101前置递增，把box累加1，相当于box=box+1；
alert(--box);//100把box累减1，相当于box=box-1；
alert(box++);//100
alert(box--);//101

var box=100;
var age=++box;//先把box累加到101，然后再赋值给age
alert(age);//101

var box=100;
var age=box++;//先把box赋值给age100，然后再box累加到101
alert(box);//101
alert(age);//100

var box=100;
var age=--box;//先把box累减到99，然后再复制给age
alert(box);//99
alert(age);//99

var box=100;
var age=box--;//先把box赋值给age100，然后再累减到99
alert(box);//99
alert(age);//100

var box='89';
box++;
alert(box)//90，++如果对数值字符串，有一个隐含的转型功能
alert(typeof box);//number

var box='ab';
box++;
alert(box);//NaN，字符串ab不能转换为数值
alert(typeof box);//number

var box=false;
box++;
alert(box);//1，字符串ab不能转换为数值
alert(typeof box);//number

var box=false;
box++;
alert(box);//1，字符串ab不能转换为数值
alert(typeof box);//number

var box={
    // valueOf:function(){
    //     return 123;
    // }
    toString:function(){
        return 123;//这里返回一个字符串时结果会为NaN
    }
};
box++;
alert(box);//124，字符串ab不能转换为数值
alert(typeof box);//number

var box=100;-box;alert(-box);//-100,对于数值，直接变负
var box='89';-box;alert(-box);//-89,数值字符串转换成数值
var box='ab';-box;alert(-box);//NaN，字符串包含非数值转换成NaN
var box=false;-box;alert(-box);//0,布尔值转换为相应的数值
var box=2.3;-box;alert(-box);//-2.3,没有变化
var box={
    toString:function(){
        return 1;
    }
};
-box;alert(-box);//-1,不设置toString或valueOf即为NaN

var box=1+2;alert(box);//3
var box=1+NaN;alert(box);//NaN,只要有一个NaN就为NaN
var box=Infinity+Infinity;alert(box);//Infinity
var box=-Infinity+-Infinity;alert(box);//-Infinity
var box=Infinity+-Infinity;alert(box);//NaN,正无穷和负无穷相加等于NaN
var box=100+'100';alert(box);//100100,字符串连接，有字符串就不是加法
var box='你的年龄是：'+10+20;alert(box);//你的年龄是：1020，被转换为字符串
var box=+10+20+'是你的年龄：';alert(box);//30 是你的年龄：，没有被转换为字符串
var box='你的年龄是：'+(10+20);alert(box);//你的年龄是：30，被转换为字符串
var box=10+{
    toString:function(){//如果对象toString返回的是数值，那么就按数值来,返回的是字符串型，那么就用字符串连接符连接
        // return 20;
        return '20';
    }
};alert(box);//


var box=100-70;alert(box);//30
var box=-100-70;alert(box);//-170
var box=-100-(-70);alert(box);//-30
var box=1-NaN;alert(box);//NaN
var box=Infinity-Infinity;alert(box);//NaN
var box=-Infinity-(-Infinity);alert(box);//NaN
var box=Infinity-(-Infinity);alert(box);//Infinity
var box=-Infinity-Infinity;alert(box);//-Infinity
var box=100-true;alert(box);//99,true转换为1
var box=100-'';alert(box);//100,''转换成0

var box=100*70;alert(box);//7000
var box=100*NaN;alert(box);//NaN,只要有一个NAN即为NAN
var box=Infinity*Infinity;alert(box);//NaN
var box=-Infinity*(-Infinity);alert(box);//Infinity
var box=Infinity*(-Infinity);alert(box);//-Infinity
var box=Infinity*Infinity;alert(box);//Infinity
var box=100*true;alert(box);alert(box);//100,true转换为1
var box=100*'';alert(box);alert(box);//0,''转换成0
var box=100*null;alert(box);//0,null转换成0
var box=100*'Lee';alert(box);//NaN,Lee转换成NaN
var box=100*{
    toString:function(){
        return 123;
    }
};alert(box);

var box=100/70;alert(box);//7000
var box=100/NaN;alert(box);//NaN,只要有一个NAN即为NAN
var box=Infinity/Infinity;alert(box);//NaN
var box=-Infinity/(-Infinity);alert(box);//NaN
var box=Infinity/(-Infinity);alert(box);//NaN
var box=Infinity/Infinity;alert(box);//NaN
var box=100/true;alert(box);alert(box);//100,true转换为1
var box=100/'';alert(box);alert(box);//Infinity
var box=100/null;alert(box);//Infinity
var box=100/'Lee';alert(box);//NaN,Lee转换成NaN
var box=100/{
    toString:function(){
        return 123;
    }
};alert(box);//NaN,如果有toString()或valueOf()则返回10/返回数的值


var box=10%3;alert(box);//1
var box=100%NaN;alert(box);//NaN,只要有一个NAN即为NAN
var box=Infinity%Infinity;alert(box);//NaN
var box=-Infinity%(-Infinity);alert(box);//NaN
var box=Infinity%(-Infinity);alert(box);//NaN
var box=Infinity%Infinity;alert(box);//NaN
var box=100%true;alert(box);alert(box);//0
var box=100%'';alert(box);alert(box);///NaN
var box=100%null;alert(box);///NaN
var box=100%'Lee';alert(box);//NaN,Lee转换成NaN
var box=100%{
    toString:function(){
        return 123;
    }
};alert(box);//NaN,如果有toString()或valueOf()则返回10/返回数的值
 */
