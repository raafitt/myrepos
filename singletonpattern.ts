class Database{
    url:number;
    private static instance:Database;

    constructor(){
        if(Database.instance){
            return Database.instance
        }
        this.url=Math.random();
        Database.instance=this;
    }
}

const db1=new Database()
