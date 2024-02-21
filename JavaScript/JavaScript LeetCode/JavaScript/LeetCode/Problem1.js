
//Problem No 1 => In this case first we create a function which take two parameter first is that array and second is 
// the target. First we take a empty object and then we take the for loop on thet arry and it will move on every number in that
//array and after that we take a variable and it will subtract every number with the target number and after
//


const twoSum = (arr, target) => {
    const mp = {}
    for (let i = 0; i < arr.length; i++) {
        let result = target - arr[i]

        if (result in mp) return [mp[result], i]
        mp[arr[i]] = i

    }
}


console.log(twoSum([2, 3, 7, 4], 10))



                                //   <---------------------------------->     //






