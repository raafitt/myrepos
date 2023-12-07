
class User{
    username:string;
    age:number
}


interface Repository<T>{
    create:(obj:T)=>T;
    get:(bj:T)=>T;
    update:(bj:T)=>T;
    delete:(bj:T)=>T;
}//Так как интерфейс является чем-то общим для различных классов, то его методы должены принимать в аргумент объекты различных типов (различные сущности), поэтому в аргументы подаются объекты типа Т, он означает некое обобщение

class UserRepository implements Repository<User>{
    create(obj:User):User{
        return undefined
    }
    get(obj:User):User{
        return undefined
    }
    update(obj:User):User{
        return undefined
    }
    delete(obj:User):User{
        return undefined
    }
}