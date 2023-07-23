
//  slice vs splice


/*  
slice:-
---------
->it is used to get a new array by selecting a sub-array of a given array.
->The changes do not reflect in the original array.
->The result has to be assigned to a new array variable.
->Takes exactly 2 arguments
Syntax->

 slice():
 array_name.slice(s, e)
 where:
 s=startingIndex(included)
 e=endingIndex(excluded)


splice:-
---------
-> it is used to addo or remove an item from the given array.
->The changes reflect in the original array
->Takes ‘n’ number of arguments (a list of new items can be supplied)
Syntax->

splice():
 array_name.splice(i, n, item 1, item 2, .....item n)
 where
 i=startingIndex
 n=number of element deleted
 item(1 2 3..n)=value inserted in existing array
*/

var a=[12,23,34,45,56,67,78]
//     0   1  2  3  4  5  6
//    -6  -5  -4  -3  -2  -1
console.log(a.slice(1,3))//(2) [23, 34] in new array
console.log(a)//(7) [12, 23, 34, 45, 56, 67, 78]

console.log(a.splice(2,3)) //(3) [34, 45, 56]
console.log(a)//(4) [12, 23, 67, 78]

console.log(a.splice(1,0,"31"))//[]
console.log(a) //(5) [12, '31', 23, 67, 78]

var b=["arman","adi", "anil","akash","jack","harry","mohan"]

// console.log(b.splice(4,3,"sekhar","dhwan","sachin"))//(3) ['jack', 'harry', 'mohan']
// console.log(b)//(7) ['arman', 'adi', 'anil', 'akash', 'sekhar', 'dhwan', 'sachin']

console.log(b.slice(3)) //4) ['akash', 'jack', 'harry', 'mohan']
console.log(b.slice(3,5))// (2) ['akash', 'jack']

let d=["😂","🤣","❤","😍","🤦‍♀️","🤦‍♂️","😢","😎","🐱‍🏍"]