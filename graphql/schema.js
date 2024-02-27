const { GraphQLID,
    buildSchema,
     GraphQLObjectType, 
     GraphQLString, 
     GraphQLID,
    GraphQLBoolean } = require('graphql');
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




module.exports = schema
