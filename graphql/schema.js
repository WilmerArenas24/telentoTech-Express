const { GraphQLObjectType, 
        GraphQLString, 
        GraphQLID,
        GraphQLBoolean, 
        graphql,
        GraphQLInputObjectType,
        GraphQLList,
        GraphQLSchema,
        GraphQLInt} = require('graphql');
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

const UserFilterInput = new GraphQLInputObjectType({
    name:"UserFilterInput",
    fields:{
        name: {type: GraphQLString},
        lastname: {type: GraphQLString},
        email: {type: GraphQLString},
    }
})

const Message = new GraphQLObjectType({
    name: 'Message',
    fields: {
      _id: { type: GraphQLString},
      body: { type: GraphQLString},
      from: { type: User},
      to: { type: User},
      readed: {type: GraphQLBoolean}
    }
  })

  const MessageFilterInput = new GraphQLInputObjectType({
    name: 'MessageFilterInput',
    fields: {
      body: {type: GraphQLString},
      from: {type: GraphQLString},
      to: {type: GraphQLString}
    }
  })
  const House = new GraphQLObjectType(
    {
        name: 'House',
        fields:{
            _id:{type: GraphQLID},
            address:{type: GraphQLString},
            city:{type: GraphQLString},
            state:{type: GraphQLString},
            size:{type: GraphQLInt},
            type:{type: GraphQLString},
            zip_code:{type: GraphQLString},
            code:{type: GraphQLString},
            rooms:{type: GraphQLInt},
            batrooms:{type: GraphQLInt},
            price:{type: GraphQLInt},
            image:{type: GraphQLString},


        }

    }
)


const queries = {
    hello: {
        type: GraphQLString,
        resolve: resolvers.hello
    },
    User:{
        type: User,
        resolve: resolvers.User,
        args: {
            id:{type: GraphQLID}
        }
    },

    Users:{
        type: GraphQLList(User),
        resolve: resolvers.Users
    },
    Houses:{
        type: GraphQLList(House),
        resolve: resolvers.Houses
    },

    UsersByFilter: {
        type: GraphQLList(User),
        resolve: resolvers.UsersByFilter,
        args: {
            filter: {type: UserFilterInput}
        }
    },

    // implementando la queries de mensajes
    Message: {
        type: Message,
        resolve: resolvers.Message,
        args: {
          id: {type: GraphQLString}
        }
      },
      Messages: {
        type: GraphQLList(Message),
        resolve: resolvers.Messages
      },
      MessagesByFilter: {
        type: GraphQLList(Message),
        resolve: resolvers.MessagesByFilter,
        args: {
          filter: { type: MessageFilterInput }
        }
      }
}



const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: queries
})

const schema = new GraphQLSchema({
    query: queryType
})

module.exports = schema
