
class User1{
  
}


interface UserRepo{
    getUsers:()=>User1[]
}

class UserMongoDBRepo implements UserRepo {
    getUsers():User1[]{
        console.log('Use connection to Mongo DB and get users')
        return [{age:25,username:'Mongo DB user'}]
    }
}

class UserPostgresRepo implements UserRepo{
    getUsers():User1[]{
        console.log('Use connection to POSTGRES and get users')
        return [{age:25,username:'POSTGRES user'}]
    }
}

class UserNewBDRepo implements UserRepo{
    getUsers():User1[]{
        console.log('Use connection to NewBD and get users')
        return [{age:25,username:'NewBD user'}]
    }
}

class UserAllBDRepos implements UserRepo{
    getUsers():User1[]{
        console.log('use connect to all BD')
        return [{age:25,username:'Mongo DB user'},{age:25,username:'Postgres user'},{age:25,username:'NewBD user'}]
    }
}


class UserService{
    userRepo:UserRepo;

    constructor(userRepo:UserRepo){
        this.userRepo=userRepo
    }

    filterUsersByAge(age:number){
        const users=this.userRepo.getUsers()
        //Какая-то логика по фильтрации
        console.log(users)
    }
}

const userService=new UserService(new UserAllBDRepos())
userService.filterUsersByAge(25)



