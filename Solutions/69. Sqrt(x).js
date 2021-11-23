const binarySearch=(target,start,end)=>{
    let mid=Math.floor((start+end)/2)
     
    if(start==mid) return start 
    if(mid*mid==target) return mid
    
    if(mid*mid>target) return binarySearch(target,start,mid)
    else return binarySearch(target,mid,end)
}
var mySqrt = function(x) {
    return binarySearch(x,1,x)
};