const array=[-34,434,0,34,24,756,-64,-434,5,3,4,0,2,-2,12,16,443,7678,-764,-2133,-78687,-45,645,76]
const arr = [3, 6, 8, 10, 1, 2, 1];

const quickSort=(array)=>{
    if(array.length<=1) {return array}
    const pivotindex = Math.floor(array.length / 2);
    let pivot=array[pivotindex];
    left=[];
    right=[];
    for(let i=0; i<array.length; i++){
        if(i===pivotindex){
            continue
        }
        if(array[i]<=pivot){
            left.push(array[i])
        }
        else {
            right.push(array[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}




const quickSort1 = (array) => {
    if (array.length <= 1) {
        return array;
    }

    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array[pivotIndex];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length; i++) {
        if (i === pivotIndex) {
            continue;
        }
        if (array[i] <= pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort(array))
console.log(quickSort1(array))