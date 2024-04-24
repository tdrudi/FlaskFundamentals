function findRotatedIndex(arr, num) {
    let leftIdx = 0, rightIdx = (arr.length -1); 
    let middle = Math.floor((leftIdx + rightIdx)/2);
    
    if(arr[leftIdx] > num || arr[rightIdx] < nun)
        return -1;
    
    while(leftIdx <= rightIdx){
        middle = Math.floor((leftIdx + rightIdx)/2);

        if(arr[middle] === num)
            return middle;
        else if(arr[middle] < num)
            leftIdx = middle + 1;
        else   
            rightIdx = middle -1
    }
    return -1
}

module.exports = findRotatedIndex