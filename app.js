
// const names = require("./names.js")
// const hi = require("./code.js")
// const data = require("./name1.js")
// const sum = require("./sum.js")
// sum()
// console.log(data.item);
// console.log(data.singlePerson);
// hi(names.s);
// hi(names.h);

const _ = require('lodash')
const arr = [1, [2, [3, [4, 5]]]]
const newItems = _.flatMapDeep(arr);
console.log(newItems);