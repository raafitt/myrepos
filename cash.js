function cashFunction(fn){
    const cash={}
    return function(n){
        if (cash[n]){
            console.log('Значение взято из кеша',cash[n])
            console.log(cash)
            return cash[n]
        }
        let result=fn(n)
        console.log('Посчитала функция=',result)
        cash[n]=result
        return result
        
    }

}


function factorial(n){
    let factorial=1
    while (n>1) {
        factorial*=n
        n-=1
    }
    return factorial
}

const cashFactorial=cashFunction(factorial)

cashFactorial(5)
cashFactorial(4)
cashFactorial(3)
cashFactorial(2)
cashFactorial(5)
cashFactorial(4)