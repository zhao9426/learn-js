/* 
var box=250;//十进制
alert(box);

var box=070;//八进制
alert(box);
var box=0xA;//十六进制
alert(box);

var box=3.8;//浮点数
alert(box);
var box=0.8;//浮点数
alert(box);
var box=.8;//浮点数，有效但不推荐
alert(box);
var box=8.0;
alert(box);//会自动转换为整型
var box=4.12e9;//科学计数法
alert(box);
var box=0.0000000412;
alert(box);
alert(Number.MIN_VALUE);//最小值
alert(Number.MAX_VALUE);//最大值
alert(Number.POSITIVE_INFINITY);//正无穷
alert(Number.NEGATIVE_INFINITY);//负无穷
var box=100e1000;
alert(isFinite(box));//是否超过范围
var box=0/0;//数学中第一个可以为0，第二个不可以为0.
alert(box);
var box=12/0;
alert(box);
var box=12/0*0;
alert(box);

alert(Number.NaN);
alert(NaN+1);
alert(NaN==NaN);//不相等

 alert(isNaN(NaN));//true
 alert(isNaN(25));//false 25是一个数值
 alert(isNaN('25'));//false '25'是一个字符串，可以转成数值
 alert(isNaN('Lee'));//true 'Lee'不能转换为数值
 alert(isNaN(true));//false true可以转换为1

 //如果对象的toString方法能够返回数值，那么就不是NaN了。
var box={
    toString:function(){
       // return '123';
       return 'Lee';
    }
}
alert(isNaN(box));//false返回'Lee'时为true

alert(Number(true));//1, Boolean类型的true和false分别转换成1和0
alert(Number(25));// 25, 数值型直接返回
alert(Number(null));//0, 空对象返回0
alert(Number(undefined));//NaN,undefined返回NaN

alert(Number('456'));//456会转换为十进制数，如果前导有0，即自动去掉
alert(Number('070'))//70

alert(Number('08.90'))//8.9 如果包含前导和后导0，即自动去掉
alert(Number(""));//0
alert(Number('Lee 123'));

var box={
    
};
alert(Number(box));//NaN
var box={
    toString:function(){
    //    return '123
     return 'Lee';
        // return true;
    }
};
alert(Number(box));//当返回为'123'时结果为NaN，当返回为'Lee'时结果为NaN,当返回为true时

alert(parseInt('456Lee'));//456,会返回整数部分
alert(parseInt('Lee456Lee'));//NaN,如果第一个不是数值，就返回NaN
alert(parseInt('12Lee678Lee'));//12,从第一数值开始取，到最后一个连续数值结束
alert(parseInt('56.23'))//56,小数点不是数值，会被去掉
alert(parseInt(''))//NaN，空返回NaN

alert(parseInt('0xA'));//10,十六进制
alert(parseInt('070'));//56,八进制
alert(parseInt('0xAFLee'));//175 十六进制


alert(parseInt('0xAF'));//175十六进制
alert(parseInt('AF',16));//175,第二个参数指定十六进制，可以去掉ox前导
alert(parseInt('AF'));//NaN,理所当然
alert(parseInt('101010101',2));//341二进制转换
alert(parseInt('70',8));//56,八进制转换

 */

alert(parseFloat('123Lee'));//123，去掉不是别的部分被
alert(parseFloat('0xA'));//0，不识别十六进制
alert(parseFloat('123.45'));//123.4,只识一个小数点
alert(parseFloat('0123.4000'));//123.4,去掉前后导
alert(parseFloat('1.234e7'));//12340000,把科学记数法专成普通数值