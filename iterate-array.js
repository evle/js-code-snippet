const arr = [
    { name: 'vue', star: 1024 },
    { name: 'react', star: 911 },
    { name: 'angular', star: 666 },
]

// forEach
arr.forEach((item, index) => {
    item.name += '.js';
})
console.log(arr)

// map will return a new array
const mapArr = arr.map((val, index) => {
    if(val.star > 666){
        return {...val, name:`Hot-${val.name}`};
    }
    return val;
});

console.log(arr);
console.log(mapArr);

// Elimination of repetition
const repeatingArr = [1,2,3,4,2,3,4];
const setArr = [...new Set(repeatingArr)];
console.log(setArr);

// Random Array
const randomArr = [1, 2, 3, 4, 6, 7]
randomArr.sort(function() {
    return Math.random() - 0.5
  })
console.log(randomArr);

// find & findIndex
console.log(repeatingArr.find(n => n > 3));
console.log(repeatingArr.findIndex(n => n > 3));

// indexOf & lastIndexOf
console.log(repeatingArr.indexOf(4));
console.log(repeatingArr.lastIndexOf(4));

// some & every
const isSome = arr.some(val => val.name === 'vue.js');
console.log(isSome);
const isEvery = arr.every(val => val.star > 666 );
console.log(isEvery);

// filter 
const filterArr = arr.filter(val => {
    return val.star >666 && val.star<1014
})
console.log(filterArr);

// return max val
console.log(Math.max(...randomArr));

// ...
console.log([...'hello']);
console.log([...'x\uD83D\uDE80y'].length);
