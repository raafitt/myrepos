class Person{
    private _name;
    private _age;
    private _height;

    constructor(n:string,a:number,h:number){
        this._name=n;
        this._age=a;
        this._height=h;
    }

    get name(){
        return this._name
    }

    get age(){
        return this._age
    }

    get height(){
        return this._height
    }

    get fullInfo(){
        return `Имя:${this._name} Возраст:${this._age} Рост:${this._height}`
    }

    set name(n){
        this._name=n
    }
    set age(a){
        this._age=a
    }
    set height(h){
        this._height=h
    }
}

const Rafit=new Person('Rafit',25,167)
console.log(Rafit)

class Сandidate extends Person{
    private _inn;
    private _phone;

    constructor(n:string,a:number,h:number,i:number,p:number){
        super(n,a,h)
        this._inn=i;
        this._phone=p;
    }

    get inn(){
        return this._inn
    }

    get phone(){
        return this._phone
    }

}

const Rafkek=new Сandidate('Rafkek',25,167,324234,89373597486)


class Developer extends Сandidate{
    private _teamNumber:number;
    private _progLang:string;

    constructor(n:string,a:number,h:number,i:number,p:number,tn:number,pl:string){
        super(n,a,h,i,p)
        this._teamNumber=tn;
        this._progLang=pl
    }
}

const Rufintik=new Developer('Rufintik',25,167,234234,89373597486,1,'JS TS')
console.log(Rufintik.fullInfo)