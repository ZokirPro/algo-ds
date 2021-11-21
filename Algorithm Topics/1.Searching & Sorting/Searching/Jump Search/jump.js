

// Jump search algorithm

module.exports.JumpSearch =function (arr , target)
{
    //Find the asquare root of the size of  the array
    let n = arr.length;
    let jump = Math.floor(Math.sqrt(n));

    //Set variable "low to 0"
    // And store the result in variable , this going to be "jump"
    let low =0;

    //Loop through the array with a gap jump

    for(let i =0; i<n; i+=jump)
    {
        if(arr[i]==target){
            return i;
        }
        if(arr[i]< target) low=i;
        if(arr[i] > target) break;
    }

    for(let i=low; i<n; i++)
    {
        if(arr[i]== target) return i;
    }

    return "The target element doesn't found in array"

}