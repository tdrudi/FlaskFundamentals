function findRotationCount() {
    let leftIdx = 0, rightIdx = (arr.length -1); 
    let middle = Math.floor((leftIdx + rightIdx)/2);
    while(leftIdx <= arr.length-1){
        
        //check if right bigger than left, shift right
        if(arr[leftIdx] < arr[middle]){
            leftIdx = middle;
            middle = Math.floor((leftIdx + rightIdx)/2);
        }
        //if middle is zero, shift left
        else if(arr[middle] > arr[rightIdx] && arr[middle + 1] < arr[middle - 1])
            return middle;    
    }
}
module.exports = findRotationCount

