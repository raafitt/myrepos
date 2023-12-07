//Поиск в ширину в графе

const graph={}
graph.a=['b','c']
graph.b=['f']
graph.c=['d','e']
graph.d=['f']
graph.e=['f']
graph.f=['g']

let count=0

const breadthSearch=(graph,start,end)=>{
    let queue=[]
    queue.push(start)
   
    while(queue.length>0){
        count+=1
        const current=queue.shift()
        console.log(current)
        if(!graph[current]){
            graph[current]=[]
        }
        if(graph[current].includes(end)){
            return true
        }
        else {
            console.log(queue)
            queue=[...queue, ...graph[current]]
            console.log(queue)}
    }
    return false
}

console.log(breadthSearch(graph,'a','g'))
console.log(count)