/* 
//转换方法
var box=['赵盼盼',23,'安顺'];
alert(box);
alert(box.toString());
alert(box.valueOf());
alert(box.toLocaleString());//本地格式化区域字符串

var box=['赵盼盼',23,'安顺'];
alert(box.join('|'));//方法运行过后按|分割的字符串

var box=['赵盼盼',23,'安顺'];
alert(box.join('|'));//方法运行过后按|分割的字符串
alert(typeof box.join('|'));//string
alert(typeof box);//原数组没有任何变化，类型还是Object


//push跟pop方法构成后进先出
//push方法
var box=['赵盼盼',23,'安顺'];
alert(box.push('软件工程'));//给数组末尾添加N个元素，并返回数组最新长度
alert(box);

//pop方法
var box=['赵盼盼',23,'安顺'];
alert(box.push('软件工程'));//4，给数组末尾添加N个元素，并返回数组最新长度
alert(box);
alert(box.pop());//软件工程，移除数组中最后的元素，并返回移除的元素

//shift和unshift方法构成先进先出
//unshift方法
var box=['赵盼盼',23,'安顺'];
alert(box.unshift('软件工程','贵州'));//4,给数组首部添加N个元素，并返回数组长度
alert(box);


//shift方法
var box=['赵盼盼',23,'安顺'];//字面量声明
alert(box.unshift('软件工程','贵州'));//4,给数组首部添加N个元素，并返回数组长度
alert(box);
alert(box.shift());//移除数组开头元素，并返回移除的元素
alert(box);

//逆序排序
var box=[1,2,3,4,5];
alert(box.reverse());//从大到小排序
alert(box);//原数组也被逆序了
//正序排序
var box=[4,2,3,6,7,2,1];
alert(box.sort());//从小到大排序
alert(box);//原数组也被正序了

function compare(value1,value2){
    if(value1>value2){
        return 1;
    }else if(value1<value2){
        return -1
    }else{
        return 0;
    }
}
var box=[0,1,15,5,10];
alert(box.sort(compare));
alert(box.reverse())

//concat
 var box=['赵盼盼',23,'安顺'];
 var box2=['贵州'];
 alert(box.concat(box2));

 //slice
var box=['赵盼盼',23,'安顺'];
var box2=box.slice(1);
alert(box2);//获取从下表为1后的所有元素
alert(box);//原数组不会改变

var box=['赵盼盼',23,'安顺','软件工程','贵州'];
alert(box.slice(1,3));//这里不是从第一个位置取3个，而是从第一个位置取到第三减一个位置
alert(box);//原数组不会改变

//splice中的删除功能
var box=['赵盼盼',23,'安顺','软件工程','贵州'];
alert(box.splice(0,3));//从第0个位置取三个元素
alert(box);//元素组会改变
//splice中的插入功能
var box=['赵盼盼',23,'安顺'];
var box2=box.splice(1,0,'软件工程','贵州');//没有截取，但插入了两条，在第二个位置插入两条
alert(box2);
alert(box);


//splice中的替换功能
var box=['赵盼盼',23,'安顺'];
var box2=box.splice(1,1,100);//截取第二条，替换成100
alert(box2);                    //输出截取的23
alert(box);                     //输出数组


 */


