const path=require('path');
// console.log(path.extname("C:/Users/user/OneDrive/Desktop/nodejs/practice asyncfile"))
// console.log(path.basename("C:/Users/user/OneDrive/Desktop/nodejs/practice asyncfile"))
const mypath=path.parse("C:/Users/user/OneDrive/Desktop/nodejs/practice asyncfile");
console.log(mypath.name)