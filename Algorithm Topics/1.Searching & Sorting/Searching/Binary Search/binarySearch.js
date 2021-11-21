function binarySearch(arr, start, end, x) {
    if (end >= start) {
        let mid = Math.floor((end + start) / 2);

        if (arr[mid] == x)
            return mid;

        if (arr[mid] > x)
            return binarySearch(arr, start, mid - 1, x);
        return binarySearch(arr, mid + 1, end, x);
    }
    return -1;
}