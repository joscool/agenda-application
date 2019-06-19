const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolver");
const db = require("./models");

db.sequelize.sync().then(() => {
    console.log(`Connection to postgre successful...`);
});

const server = new ApolloServer({ typeDefs, resolvers, context: { db } });
server.listen().then(({ url }) => {
    console.log(` Server ready at ${url}`);
});

