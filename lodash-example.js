const _ = require('lodash');

const test = [
    {id: 0, name: "aaa", age: 33},
    {id: 1, name: "bbb", age: 25}
]

// remove specific element
const reject = _.reject(test, ['id', 0]);
console.log(reject);

// pick up specific element
const test1 = {id:0, name:'evle', age:26};
const pick = _.pick(test1, ['name']);
console.log(pick);

// return keys of a object
const keys = _.keys(test1);
console.log(keys);

// Deep clone
const clone = _.cloneDeep(test1);
console.log(clone);
const test2 = clone;
console.log(test2);
clone.id = 5;
console.log(clone);
console.log(test1)
console.log(test2);

// find 
const bar = _.find(test, ['id', 0]);
console.log(bar);

// keyBy
const keyBy = _.keyBy(test, 'age');
console.log(keyBy)

// filter
const filter = _.filter(test, ['name', 'bbb']);
console.log(filter);

//  map pick up specific value from a collection (return a array)
const map = _.map(test, 'name');
console.log(map);

// max/min/sum
const test3 = [1,2,3,4];
const max = _.max(test3); console.log(max);
const min = _.min(test3); console.log(min);
const sum = _.sum(test3); console.log(sum);

// pad/padStart/padEnd
const test4 = 'helloworld';
const pad = _.pad(test4, 12, '-'); console.log(pad);
const padStart = _.padStart(test4, 11, '-'); console.log(padStart);
const padEnd = _.padEnd(test4, 11, '-'); console.log(padEnd);

// mix exmaple1
const findMax = _.find(test, ['id', _.max(_.map(test, 'id'))]);
console.log(findMax);

// mix example2
let list = _.keyBy(test, 'id'); console.log(list);
list[0].name = 'ccc'; console.log(list);
const update = _.map(list); console.log(update);
