function twoSum(numbers, target) {
	let storeNum = {};
    for (let i = 0; i < numbers.length; i++) {
        let result = target - numbers[i];
        if (result in storeNum) {
            return [storeNum[result], i];
        }
        storeNum[numbers[i]] = i;
    }
    return [];
}
let numbers =  [2, 7, 11, 15]
console.log(twoSum(numbers,9))