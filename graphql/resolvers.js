const UserSchema = require ('../models/User')
const resolvers = {
    // funcion hello
    hello: ()=>{
        return "Hola mundo"      
    },
// funcion User

    User: async({id}) =>{
        try{
            return user = await UserSchema.findById(id);
        } catch(e){
            console.error(`Error al buscar el usuario por ID: ${e.message}`);
        }
    },
// funcion Users

    Users: async()=>{
        try{
            return await UserSchema.find();
        }catch(e){
            console.error(`Error al buscar todos los usuarios: ${e.message}`);
        }
    },

    UsersByFilter: async({filter})=>{
        try {
            let query = {};
            
            if(filter){
                if(filter.name){
                    query.name = {$regex: filter.name, $options: 'i'} // 'i' se usa para que no importe mayuscula o minuscula
                }
                if(filter.email){
                    query.email = {$regex: filter.email, $options: 'i'}
                }
                if(filter.lastname){
                    query.lastname = {$regex: filter.lastname, $options: 'i'}
                }

                const users = await UserSchema.find(query)
                return users;
            }
        } catch (e) {

            console.log('Error obteniendo el usuario')
            
        }
    }



}

module.exports = resolvers