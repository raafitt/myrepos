let count=0
const tree = [
    {
        v: 5,
        c: [
            {
                v:10,
                c: [
                    {
                        v:11,
                    }
                ]
            },
            {
                v:7,
                c: [
                    {
                        v:5,
                        c: [
                            {
                                v:1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v:10
            },
            {
                v:15
            }
        ]
    }
]

function recursive(tree){
    count+=1
    let sum=0
    tree.forEach(node=>{
        sum+=node.v
        if(!node.c) return 0
        sum+=recursive(node.c)
    })
    return sum
}

function iteration(tree){
    let sum=0;
    let stack=[]
    tree.forEach(node=>{
        stack.push(node)
    })
    while(stack.length){
        let node=stack.pop()
        sum+=node.v
        if(node.c){
            node.c.forEach(child=>{
                count+=1
                stack.push(child)
            })
            
        }
    }
    return sum
}

console.log(iteration(tree))

console.log(count)