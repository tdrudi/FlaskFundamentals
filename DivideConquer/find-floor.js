function findFloor(arr, num) {
  let leftIdx = 0, rightIdx = (arr.length -1);
  let middle = Math.floor((leftIdx + rightIdx)/2);
   
  while(leftIdx <= (arr.length -1)){
    
    //if num is in middle return
    if(arr[middle] === num)
        return arr[middle];

    //if greater middle +1 and  less than middle
    if(num < arr[middle+1] && num > arr[middle])
        return arr[middle];
    
    //if less than middle, shift left
    else if(num < arr[middle]){
        rightIdx = middle;
        middle = Math.floor((leftIdx + rightIdx)/2);
    }
    //if greater than middle, shift right
    else if(num > arr[middle]){
        leftIdx = middle;
        middle = Math.floor((leftIdx + rightIdx)/2);
    }
    }
}
module.exports = findFloor