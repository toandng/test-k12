function findSecondLargestNumber(arr) {
    
    if (!Array.isArray(arr) || arr.length === 0) {
        return 'Invalid';
    }
    const uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a, b) => b - a);

    if (uniqueArr.length < 2) {
        return null;
    }
    return uniqueArr[1];
}

console.log(findSecondLargestNumber([3, 2, 1, 5, 5, 4]));
console.log(findSecondLargestNumber([3])); 
console.log(findSecondLargestNumber([]));  
console.log(findSecondLargestNumber('Không phải là array'));
