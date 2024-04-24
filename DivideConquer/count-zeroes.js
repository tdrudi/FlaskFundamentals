function countZeroes(arr) {
    let leftIdx = 0, rightIdx = (arr.length -1); 
    let middle = Math.floor((leftIdx + rightIdx)/2);
    while(leftIdx <= arr.length-1){
        //check if array starts with zero, counts length
        if(arr[leftIdx] === 0){
            return (arr.length - leftIdx);
        }
        //if middle is zero, shift left
        else if(middle === 0){
            rightIdx = middle;
            middle = Math.floor((leftIdx + rightIdx)/2);
        }
        //if middle is 1, shift right
        else{
            leftIdx = middle;
            middle = Math.floor((leftIdx + rightIdx)/2);
        }
    }
    //if no zeros, return -1
    return -1;
}


module.exports = countZeroes