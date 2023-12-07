let graph={}
graph.a={'b':2, 'c':1}
graph.b={'f':7}
graph.c={'d':5, 'e':2}
graph.e={'f':1}
graph.d={'f':2}
graph.f={'g':1}
graph.g={}

function dejkstra(graph,start,end){
    let costs={}
    let processed=[]
    let neighbors={}
    Object.keys(graph).forEach(node=>{
        let value=graph[start][node]
        if(start!==node){
            costs[node]=value || 10000000
        }
    })
    let node=findLowestNode(costs,processed)
    while(node){
        let cost=costs[node]
        neighbors=graph[node]
        Object.keys(neighbors).forEach(neighbor=>{
            if(cost+neighbors[neighbor]<costs[neighbor]){
                costs[neighbor]=cost+neighbors[neighbor]
            }
        })
        processed.push(node)
        node=findLowestNode(costs,processed)
    }
    return costs
}


function findLowestNode(costs,processed){
    let lowestCost=10000000;
    let lowestNode;
    Object.keys(costs).forEach(node=>{
        if(costs[node]<lowestCost && !processed.includes(node)){
            lowestCost=costs[node]
            lowestNode=node
        }
    })
    return lowestNode
}


console.log(dejkstra(graph,'a','g'))