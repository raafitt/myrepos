const array=[-34,74,32,-4,344,-12,0,2,4,1,0,-6,65,88,-100]
const arr=[10,9,8,7,6,5]
let count=0
let count2=0




const selectionSort=(array)=>{
    let pivot;
    for(let i=0;i<array.length;i++){

        for(let j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                pivot=array[i];
                array[i]=array[j];
                array[j]=pivot
            }
            count+=1
        }
    }
    return array
}//Сортировка выбором. Сложность О(n*n)


const bubbleSort=(array)=>{
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
            if(array[j]>array[j+1]){
                pivot=array[j];
                array[j]=array[j+1];
                array[j+1]=pivot
            }
            count2+=1
        }
    }
    return array
}//Сортировка пузырьком. Сложность О(n*n). Самая неэффективная

const quickSort=(array)=>{
    if(array.length<=1) {return array}
    let pivotindex=Math.floor(array.length/2);
    let pivot=array[pivotindex];
    let left=[];
    let right=[];
    for(let i=0; i<array.length; i++){
        if(i==pivotindex){
            continue
        }
        if(array[i]<pivot){
            left.push(array[i])
        }
        if(array[i]>pivot) {
            right.push(array[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}


console.log(quickSort(arr))
