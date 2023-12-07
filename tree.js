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

const recursive=(tree)=>{
    let sum=0;
    tree.forEach(node=>{
        sum+=node.v
        if (!node.c) return 0
        sum+=recursive(node.c)
    })
    return sum
}

const iteration=(tree)=>{
    let stack=[]
    let sum=0;
    tree.forEach(node=>stack.push(node))
    while (stack.length){
        console.log(stack)
        let node=stack.pop() //вытаскиваем последний элемент
        sum+=node.v
        if(node.c){
            node.c.forEach(child=> stack.push(child))
        }
    }
    return sum
}

console.log(iteration(tree))