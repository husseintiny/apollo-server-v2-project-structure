const {ApolloServer, gql} = require('apollo-server');
const typeDefs = require('./typeDefs')
const connectDb = require('./config/db');
const resolvers= require('./resolvers');
const models = require('./models')
connectDb();

const server = new ApolloServer({
    typeDefs, resolvers, context:{models}
});

// The `listen` method launches a web server.
server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});
