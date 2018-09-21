/*
//使用字符串的正则表达式方法
  var pattern=/Box/i;//没有开启全局
  var str='This is a Box! That is a box';
  alert(str.match(pattern));//Box//匹配到第一个字符串返回数组

  var pattern=/Box/i;
 var str='This is a Box! That is Box!';
 var a=str.match(pattern);
 alert(a[0]);//Box，证明了是数组
 var pattern=/Box/ig;//开启了全局
 var str='This is a Box! That is Box!';
alert(str.match(pattern));//Box,Box，将所有匹配的字符串组合成数组返回
 
var pattern=/Box/ig;//开启了全局
 var str='This is a Box! That is Box!';
alert(str.search(pattern));//10，返回的第一个匹配的位置，否则返回0

  //使用replace替换匹配到的数据
 var pattern=/Box/ig;//开启了全局
 var str='This is a Box! That is Box!';
alert(str.replace(pattern,'TOm'));//This is a TOm! That is TOm!，将Box替换成了Tom

 //使用split拆分成字符串数组
 var pattern=/Box/ig;//开启了全局
 var str='This is a Box!, That is Box!';
alert(str.split(pattern));//This is a ,!, That is ,!，将空格拆分组成数组

//使用静态属性
  var pattern=/(g)oogle/;
  var str='This is google!';
  pattern.test(str);
  alert(RegExp.input)//This is google!
  alert(RegExp.leftContext);//This is
  alert(RegExp.rightContext);//!
  alert(RegExp.lastMatch);//google
  alert(RegExp.lastParen);//g
  alert(RegExp.multiline);//false
 

  //使用实例属性
  var pattern=/google/ig;
  alert(pattern.global);//true，是否全局了
  alert(pattern.ignoreCase);//true ，是否忽略大小写
  alert(pattern.multiline)//false,是否支持换行
  alert(pattern.lastIndex);//0，下次的匹配位置
  alert(pattern.source);//google,正则表达式的源字符串

  */
  var pattern=/google/g;
  var str='google google google';
alert(pattern.test(str));//true,匹配第一次
  alert(pattern.lastIndex);//6，第二次匹配的位