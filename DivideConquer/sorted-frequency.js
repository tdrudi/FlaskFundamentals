function sortedFrequency(arr, num) {
    let leftIdx = 0, rightIdx = (arr.length -1); 
    let middle = Math.floor((leftIdx + rightIdx)/2);
    let firstFound, lastFound;
    while(leftIdx <= arr.length-1){
        //finding first and last index
        if(arr[leftIdx] === num)
            firstFound = leftIdx;
        if(arr[rightIdx] === num)
            lastFound = rightIdx;
        //if middle bigger than num, shift left
        else if(arr[middle] > num){
            rightIdx = middle;
            middle = Math.floor((leftIdx + rightIdx)/2);
        }
        //if middle is less than num, shift right
        else if(arr[middle] < num){
            leftIdx = middle;
            middle = Math.floor((leftIdx + rightIdx)/2);
        }
    }
    //if no num, return -1
    if(!lastFound || !firstFound)
        return -1;

    return (lastFound - firstFound + 1);
}

module.exports = sortedFrequency