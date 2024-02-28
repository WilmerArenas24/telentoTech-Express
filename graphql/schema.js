const { GraphQLObjectType, 
        GraphQLString, 
        GraphQLID,
        GraphQLBoolean, 
        graphql,
        GraphQLInputObjectType} = require('graphql');
const resolvers = require('./resolvers');

const User = new GraphQLObjectType(
    {
        name: 'User',
        fields:{
            _id:{type: GraphQLID},
            name:{type: GraphQLString},
            lastname:{type: GraphQLString},
            email:{type: GraphQLString},
            avatar:{type: GraphQLString},
        }

    }
)

const Message = new GraphQLObjectType(
    {
        name: 'Message',
        fields:{
            _id:{type: GraphQLID},
            body:{type: GraphQLString},
            from:{type: User},
            to:{type: User},
            readed:{type: GraphQLBoolean},
        }

    }
)

const UserFilterInput = GraphQLInputObjectType({
    name:"UserFilterInput",
    fields:{
        name: {type: GraphQLString},
        lastname: {type: GraphQLString},
        email: {type: GraphQLString},
    }
})

//TODO: Implementar house en graphqltype
//type House{
//     id: ID!
//     address:String!
//     city:String!
//     state:String!
//     size:int!
//     type:String!
//     zip_code:String!
//     code:String!
//     rooms:int!
//     batrooms:int!
//     price:int!
//     image:String!
// }

module.exports = schema
