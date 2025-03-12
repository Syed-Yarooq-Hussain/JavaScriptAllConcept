import multiply, { add, subtract } from './util'
// as we import all from utils we ay also write 
// import * as util from './util'

console.log('Add Function imported from util',add(3,5))
console.log('Subtract Function imported from util',subtract(3,5))
console.log('Multiply Function imported from util',multiply(3,5))