/* 
var box=new Array();//声明一个数组，空数组
alert(typeof box);//数组属于Object类型

var box=new Array('赵盼盼',23,'安顺');//创建一个数组，并分配三个元素
alert(box);//打印出数组
alert(box[0]);//打印出数组中的第一个元素

var box=new Array(10);//创建数组，包含10个元素，必须是数字，必须是1位
box[3]='赵盼盼';
box[6]='安顺';
alert(box);

var box=new Array('赵盼盼');//创建一个数组，并分配一个元素
alert(box);

var box=['赵盼盼',23,155,'安顺'];//一字面量方式创建数组，并分配了元素
alert(box);

var box=[1,2,];//IE会获取到额外的逗号，而参数错误
alert(box.length)

var box=[,,,,];//不允许
alert(box.length);

var box=['赵盼盼',23,'安顺'];
box[1]=100;//覆盖下标为1的值
box[4]='软件工程';//增加下标为4的元素
alert(box);

var box=[];
box['name']='赵盼盼';
box['age']=23,
alert(box['name']);//如果是字符串下标，不会体现在数组上，而单独拎出来

var box=[];
box[0]='赵盼盼';
box[1]=23;
alert(box);//如果下标是索引下标，就会在数组上体现出来

var box=['赵盼盼',23,'安顺'];
box.length=10;//强制了元素量
alert(box.length);
alert(box);//以逗号扩展补充

var box=['赵盼盼',23,'安顺'];
box[3]='贵州';
alert(box);

var box=['赵盼盼',23,'安顺'];
box[box.length]='贵州';//使用.length获取最后一个下标
alert(box);
 */
var box=[
    {
        name:'赵盼盼',
        age:23
    },
    [3,4,5,'安顺',new Object()],
    '软件工程',
    23+2,
    new Array(1,2,3)
];
alert(box);
alert(box[0].name)//打印数组中第一个元素中的第一个值
alert(box[0]['name'])//也可以这样打印数组中第一个元素中的第一个值