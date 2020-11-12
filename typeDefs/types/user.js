const {gql} =require('apollo-server');
module.exports= gql`
    
    type user{
        uid: String
        email: String
    }
    type Mutation{
        addUser(uid: String, email: String, password: String):user
    }
    `
