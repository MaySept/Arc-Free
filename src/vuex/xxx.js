/**
 * Created by zp6077 on 2017/8/11.
 */
var xxx = ['aa','ss','ww']
var arr = [{
  name: '张鹏',
  age: '11'
},{
  name: '张鹏',
  age: '11'
},{
  name: '张鹏',
  age: '11'
}]
for (var i=0; i<arr.length; i++) {
  arr[i].sex = xxx[i]
}
console.log(arr)
