class Rectsngle{
    private _width;
    private _height;

    constructor(w:number,h:number){
        this._width=w;
        this._height=h;

    }

    get width(){
        return this._width
    }

    get height(){
        return this._height
    }

    set width(value){
        if(value<=0) this._width=1
        else this._width=value
    }

    set height(value){
        if(value<=0) this._height=1
        else this._height=value
    }

    calcArea(){
        return this._height*this._width
    }
}

const rect1=new Rectsngle(5,10)
rect1.width=100
console.log(rect1.width)