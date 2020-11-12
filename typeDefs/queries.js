const {gql} =require('apollo-server');
const user= require('./types/user');
const video= require('./types/video');

module.exports= gql`
    
    type Query{
        user: [user]
        video: [video]
    }

`
