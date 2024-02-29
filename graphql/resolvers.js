const UserSchema = require ('../models/User');
const HouseSchema = require ('../models/House');
const MessageSchema = require ('../models/Message');
const resolvers = {
    // funcion hello
    hello: ()=>{
        return "Hola mundo"      
    },
// funcion User

    User: async(_, {id}) =>{
        try{
            return user = await UserSchema.findById(id);
        } catch(e){
            console.error(`Error al buscar el usuario por ID: ${e.message}`);
        }
    },

    // funcion House

    House: async(_, {id}) =>{
        try{
            return House = await HouseSchema.findById(id);
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
// funcion filtro de usuario
    UsersByFilter: async(_, {filter})=>{
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
    },

    //Funcion para obtener mensajes

    Message: async (_, {id}) => {
        try {
            return message = await MessageSchema.findById(id).populate({
                path: 'from',
                select: '-password'})
            .populate({
                path: 'to',
                select: '-password'}) ;
        }catch(e){
            console.log()
        }
    },
    Messages: async () => {
        try{
            return await MessageSchema.find().populate({
                path: 'from',
                select: '-password'})
            .populate({
                path: 'to',
                select: '-password'});
        }
        catch(e){
            console.log(e)
        }
    }, 
    MessagesByFilter: async (_, {filter}) => {
        try{
            let query = {};
            if(filter){
                if(filter.from){
                    query= {from: filter.from} 
                }
                if(filter.to){
                    query = { to: filter.to}
                }
                if(filter.body){
                    query.body = { $regex: filter.body, $options: 'i'}
                }

                const message = await MessageSchema.find(query).populate('from')
                                        .populate('to') 
                return message;
            }

        }catch(e){
            console.log("Error obteniendo el mensaje")
        }
    },

    // funcion para casas
    
    Houses: async()=>{
        try{
            return await HouseSchema.find();
        }catch(e){
            console.error(`Error al buscar todas las casas: ${e.message}`);
        }
    },

    // funcion para filtrar casas
    
    HousesByFilter: async(_, {filter})=>{
        try {
            let query = {};
            
            if(filter){
                if(filter.code){
                    query.code = {$regex: filter.code, $options: 'i'} // 'i' se usa para que no importe mayuscula o minuscula
                }
                if(filter.city){
                    query.city = {$regex: filter.city, $options: 'i'}
                }
                if(filter.price){
                    query.price = {$regex: filter.price, $options: 'i'}
                }

                const Houses = await HouseSchema.find(query)
                return Houses;
            }
        } catch (e) {

            console.log('Error obteniendo la casa')            
        }
    },
}

module.exports = resolvers