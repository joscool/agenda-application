const { gql } = require("apollo-server");

module.exports = gql`

type Agendum {
    id: ID!
    time: String
    title: String
    description: String
    location:String
}

type Query{
    agenda:[Agendum!]!
    agendum(id:ID!):Agendum
}

type Mutation{
    createAgendum(title:String!,time:String!,title:String!,description:String,location:String):Agendum!
    updateAgendum(id:ID!,title:String!,time:String!,title:String!,description:String,location:String):Int!
    deleteAgendum(id:ID!):Int!
}
`;