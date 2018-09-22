/* 

//String类型
var box='Mr.Lee';
alert(box.length);//6
alert(box.constructor);//function String() { [native code] }

var box='Mr. Lee';
alert(box.charAt(1));//r
alert(box.charCodeAt(4));//76,返回的是acssi码
alert(box[1]);//r
alert(box.concat('is','Teacher','!'));//Mr.LeeisTeacher!,参数字符串连接
alert(box.slice(4,6));//Le
alert(box.substring(4,6));//Le
alert(box.substr(4,6));//Lee,从第四个开始，选6
alert(box.substr(4,2));//Le
alert(box.slice(4));
alert(box.substring(4));
alert(box.substr(4));//三个都是Lee
alert(box.slice(-2));//7+(-2)=5,第5位开始，ee
alert(box.substring(-2));//负数返回全部字符串Mr. Lee
alert(box.substr(-2))//7+(-2)=5,第5位开始，ee
alert(box.slice(2,-1));//7+(-1)=6,(2,6),. Le
alert(box.slice(-2,-2));//7+(-2)=5,7+(-1)=6,(5,6),e
alert(box.substring(2,-1));//参数如果是负，直接0，(2,0);如果第二个参数比第一个参数小，那么第二个参数提前
alert(box.substr(2,-1));//第二个参数为负，直接0
 */

var box='Mr. Lee is Lee';
alert(box.indexOf('L'));//返回从初始位置开始搜索L第一次出现的位置，4
alert(box.lastIndexOf('L'));//返回从末尾位置搜索L第一次出现的位置，11
alert(box.indexOf('L',5));//从第5个位置开始搜索第一次出现的位置，11
alert(box.lastIndexOf('L',5));//从第5个位置开始向前搜索L第一次出现的位置，4
alert(box.indexOf(','));
