class Rectangle{
    width;
    height;

    constructor(w,h){
        this.width=w;
        this.height=h;
    }

    calcArea(){
        return this.width*this.height
    }
    calcPerimeter(){
        return this.width*2+this.height*2
    }
    get height(){
        return this.width
    }
}

const myRect=new Rectangle(10,20)


console.log(myRect.height)