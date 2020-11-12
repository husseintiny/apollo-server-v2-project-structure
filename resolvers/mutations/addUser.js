module.exports=async (_,args,{models})=>{
    let newUser= models.users.users.create({uid: args.uid, email: args.email, password: args.password});
    return newUser;

}
