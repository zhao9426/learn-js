# 使用javascript
1. 可以直接在html下的<script type="text/javascript"></script>中写，也可以引用外部的js文件通过<script type="text/javascript" src="外部文件地址"></script>来写
2. 如果引用外部的js文件，那么<scrip<></script>标签中的任何代码将不会被执行到
# 语法、关键保留字及变量
1. 关键字
     区分大小写：text和Text是两种不同的标识符。<br/>
     标识符组成开头：a(字母)、_、$<br/>
     其他组成：a(字母)、_、$、数字<br/>
     不能把关键字，保留字，true false null作为标识符<br/>
     100 数字字面量
     '找潘帕纳' 字符串字面量
     false 布尔值字面量
     /js/gi 正侧表达式字面量
     null 对象字面量
     {x:1,y:2} 对象字面量
     [1,2,3,4,5] 数字字面量
     关键字：是程序中已经开始使用的字符 var
2. 变量
    var box;声明变量
    var box=100声明变量并初始化
    alert(box);一弹窗的方式输出
# 数据类型
1. 五种数据类型(undefined类型、Null类型、boolean类型、string类型、number类型)
2. 没有初始化的变量就是undefined
3. 将一个字符串变量强制转换为boolean型时返回true，但是将一个空字符串转强制转换成boolean型时返回false
4. 其他类型转换成Boolean类型规则：
    Boolean 为true时转换为true，为false时转换为false
    String 为任何非空字符串时转换true，为空字符串时转换为false
    Number 为任何非零数字值（包括无穷大）时转换为true，为0或NaN时转换为false
    Object 为任何对象时转换为true，为null时转换为false
    Undefined 没有真，为undefined时转换为false
