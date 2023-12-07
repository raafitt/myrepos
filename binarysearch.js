let array=[-324,-254,-122,-99,-77,-54,-44,-33,-22,-12,-10,-2,0,21,42,45,66,68,98,129,234,343,431,456,765,45564,234235,557576]
let count=0

const f1=(array,q)=>{
    let found=false;
    let position=-1;
    let s=0;
    let e=array.length
    let middle;
    while(found===false && s<=e){
        count+=1
        middle=Math.floor((s+e)/2)
        if(q===array[middle]) {
            found=true;
            position=middle;
            return position;
        }
        if(q<array[middle]){
            e=middle-1
        }
        else{
            s=middle+1
        }
    }
    return position
   
   
}


const f2=(array,q)=>{
    let position=-1;
    for(let i=0;i<array.length;i++){
        count+=1
        if (q===array[i]){
            position=i
            return position
        }
       
    }
    return position
}

console.log(f1(array,557576))
console.log(count)