
class Engine{
    drive(){
        console.log('Engine run')
    }
}

class Wheel{
    drive(){
        console.log('wheel go')
    }
}

class Freshener{

}

class Car{
    engine: Engine;
    wheels: Wheel[];
    freshener:Freshener;

    constructor(freshener:any){
        //Агрегация
        this.freshener=freshener;//Освежитель не зависит от класса car, и живет своей жизнью. Можно использовать этот класс внутри другого класса
        //Композиция
        this.engine=new Engine();//Объекты engine и wheel инициализируется только внутри объекта класса car, при удалении объекта класса car, эти объекты тоже удалятся
        const wheelsArray:Wheel[]=[]
        for (let i=0;i<4;i++){
            wheelsArray.push(new Wheel())
        }
        this.wheels=wheelsArray;
    }

    drive(){
        this.engine.drive()
        for(let i=0;i<this.wheels.length;i++){
            this.wheels[i].drive()
        }
    }
}
const freshener=new Freshener()
const lada=new Car(freshener)
lada.drive()