// const quickSort = (arr , low , high)=>{
//    if(low < high) {
//        const pi = partition(arr , low , high);

//        quickSort(arr , low , pi-1);  // Before pi
//        quickSort(arr , pi+1 , high)  // After pi
//    }
// }


// const swap = (arr , left , right)=>{
//     const temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
// }

// function partition (arr , low , high){
//     let pivot = arr[high];
//     let i = low-1;
//     for(let j=low ; j<= high-1 ; j++)
//     {
//         if(arr[j]<= pivot)
//         {
//             i++;
//             swap(arr , i ,j)
//         }
//     }
//     swap(arr , i+1 , high);
//     return i+1;
// }



const quickSort =(array)=>{
    if(array.length<=1) 
      return array;
    else {
        let left =[] ;
        let right =[];
        let sortedArray =[];
        let pivot = array.pop();
        let len = array.length;

        for(let i=0; i<len; i++)
        {
            if(array[i]<=pivot){
                left.push(array[i])
            }
            else {
                right.push(array[i])
            }
        }
        return sortedArray.concat(quickSort(left) , pivot , quickSort(right))
    }
    
}

module.exports = quickSort

console.log(quickSort([6,9,8,-6,5,7,8,3,10]));