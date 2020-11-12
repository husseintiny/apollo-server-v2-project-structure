module.exports= async (_,__,{models})=>{
    let users= await models.users.users.find();
    return users;
}
