//Liner Search in an array
// function linerSearch(arr,target){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === target) {
//             return i
//         }
//     }
//     return  -1;
//
// }
//
// console.log(linerSearch([2,3,1,4,5],4))



//But in some case the target number is repeating so in this case we will store the index value on array


// const linerSearch = (arr,target)=>{
//     const finalIndex = []
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === target) {
//             finalIndex.push(i)
//
//         }
//     }
//    if (finalIndex.length < 0) return -1;
//     return finalIndex
// }
//
// console.log(linerSearch([1,3,2,1,4],1))




//Implement Binary search in javascript array

// const skippedValue = (arr,target)=>{
//     let startIndex  = 0
//     let lastIndex = arr.length -1
//
//     while (startIndex <= lastIndex){
//         let middleIndex = Math.floor((startIndex + lastIndex)/2)
//         if(arr[middleIndex] === target){
//             return middleIndex
//         }
//         else if(arr[middleIndex] < target){
//             startIndex = startIndex + 1
//         }
//         else {
//             lastIndex = lastIndex - 1
//         }
//
//     }
//     return  -1
//
//
// }
//
// console.log(skippedValue([-1,0,3,5,9,12],9))





//Find the kth value in the index


const findKthValue = (arr,k)=>{
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] <= k + count){
            count ++
        }

    }
    return k + count
}


console.log(findKthValue([2,3,4,7,11],5))