interface User{
    name:string;
    id:number;
}
interface Admin extends User{
    role:string;
}
 const user: User ={name:'Mark', id:40918101};
 const admin: Admin = { name:"Mark", id:40918101, role:"Admin"}

 console.log(user)
 console.log(admin);
 