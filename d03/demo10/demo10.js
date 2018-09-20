/* 
//do...while语句
var box=1;
do{//先运行，再判断的循环体
alert(box);//1，打印1,2,3,4,5
box++;//box=2++3 4 5 6
}while(box<5)//判断6<5，再运算第7行，退出
            //当while判断为false的时候，退出循环，
            //dangwhile判断为true的时候，执行循环，
            //如果条件一开始不满足，至少会执行一次
            //切记，循环体的判断要想好，不然会出现死循环

//while语句
var box=1;
while(box<=5){//如果是1，执行五次，如果是10，不执行
    alert(box);//先执行，后判断
    box++
}

//for语句
for(var box=1;box<=5;box++){//第一步，声明变量box=1
    alert(box);             //第二步，判断box<=5
}                           //第三步，alert(box)
                            //第四步，box++
                            //第五步，从第二部再来，知道判断为false

//for...in语句
var box={               //创建对象
    'name':'赵盼盼',     //键值对，左边是属性名，右边是值
    'age':23,
    'height':155
};
for(var p in box){      //列举出对象的所有属性
    alert(p);
}

//break和continue语句

for(var box=1;box<=10;box++){
    if(box===5)break;           //如果box是5，就退出循环
    document.write(box);
    document.write('<br/>');
}

for(var box=1;box<=10;box++){
    if(box===5)continue;       //如果box是5，就退出当前循环
    document.write(box);
    document.write('<br/>');
}

//with语句
var box={               //创建一个对象
    'name':'赵盼盼',      //键值对
    'age':23,
    'height':155
};
var n=box.name; alert(n);    //从对象里取值赋给变量
var z=box.age; alert(z);  
var h=box.height; alert(h);
//可以将上面三段赋值操作改写成：
with(box){
    var n=name;
    var z=age;
    var h=height;
}  
alert(n); 
alert(z); 
alert(h); 

 */


