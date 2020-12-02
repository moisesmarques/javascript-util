console.log('//generates a new array with spread');
let arr = [...Array(5).keys()];
console.log(arr);

let freq = [[1,1,1],[2,2,2,2],[3,3]];

let obj = {1 : [1,1,1], 2 : [2,2,2,2], 3 : [3,3]};
let res = null;

console.log('//sort asc numbers');
rest = arr.slice().sort((a,b) => (a > b ? 1 : (a < b ? -1 : 0))).map(a => a);
console.log(res);

console.log('//sort desc numbers');
res = arr.slice().sort((a,b) => (a > b ? -1 : (a < b ? 1 : 0))).map(a => a);
console.log(res);

console.log('//sum ');
res = arr.reduce( (a, b) => a + b);
console.log(res);

console.log('//group');
res = arr.reduce((a, b) => {
    (a[b] = a[b] || []).push(b);
    return a;
  }, {});
console.log(res);

console.log('// sort groups by size return array');
res = Object.values(obj).sort( (a,b) => a.length < b.length ? -1 : 1);
console.log(res);

console.log('// sort groups by size and group values');
res = Object.values(obj).sort( (a,b) => a.length < b.length ? -1 : (a.length > b.length ? 1 : (a[0] < b[0] ? -1 : 1 )));
console.log(res);

console.log('// sort groups by size and group values desc');
res = Object.values(obj).sort( (a,b) => a.length < b.length ? -1 : (a.length > b.length ? 1 : (a[0] > b[0] ? -1 : 1 )));
console.log(res);
 
console.log('// flatten array');
res = [].concat.apply([], freq);
console.log(res);
 
console.log('// range');
res = [...Array(7).keys()].slice(3);
console.log(res);
 
console.log('// convert obj group to 2d array where 0 index is key and 1 index is the number of ocurrences');
let arr2 =[]
for(var prop in obj)
    arr2.push([parseInt(prop), obj[prop].length]);
console.log(arr2);
 