class Person1{
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

    public greeting(){
        console.log(`Привет я человек и меня зовут ${this._name}`)
    }
}

const Rafit1=new Person1('Rafit',25,167)


class Сandidate1 extends Person1{
    private _inn;
    private _phone;

    constructor(n:string,a:number,h:number,i:number,p:number){
        super(n,a,h)
        this._inn=i;
        this._phone=p;
    }

    greeting(){
        console.log(`Привет я кандидат и меня зовут ${this.name}`)
    }

    get inn(){
        return this._inn
    }

    get phone(){
        return this._phone
    }

}

const Rafkek1=new Сandidate1('Rafkek',25,167,324234,89373597486)


class Developer1 extends Сandidate1{
    private _teamNumber:number;
    private _progLang:string;

    constructor(n:string,a:number,h:number,i:number,p:number,tn:number,pl:string){
        super(n,a,h,i,p)
        this._teamNumber=tn;
        this._progLang=pl
    }

    greeting(){
        console.log(`Привет я разработчик и меня зовут ${this.name}`)
    }

    
}

const Rufintik1=new Developer1('Rufintik',25,167,234234,89373597486,1,'JS TS')


const persons:Person1[]=[Rafit1,Rafkek1,Rufintik1]

const massGreats=(persons:Person1[])=>{
    for(let i=0;i<persons.length;i++){
        persons[i].greeting()
    }
}

console.log(massGreats(persons))