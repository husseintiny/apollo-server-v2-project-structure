const {gql} = require('apollo-server');

module.exports=gql`
    
    type video{
        uid: String!
        title: String!
        description: String!
        videoLinks: String!
        season: String
        
    }

    extend type Mutation{
        addVideo(uid: String!,title: String!, description: String, videoLinks: String!, season: String ): video
    }
    
    `
