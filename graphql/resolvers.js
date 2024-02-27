const UserSchema = require ('../models/User')
const resolvers = {

    hello: ()=>{
        return "Hola mundo"      
    },

    User: async({id}) =>{
        try{
            return user = await UserSchema.findById(id);
        } catch(e){
            console.error(`Error al buscar el usuario por ID: ${e.message}`);
        }
    },

    Users: async()=>{
        try{
            return await UserSchema.find();
        }catch(e){
            console.error(`Error al buscar todos los usuarios: ${e.message}`);
        }
    }

}

module.exports = resolvers