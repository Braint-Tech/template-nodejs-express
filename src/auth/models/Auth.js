const knex = require("../../database/connection");

class User{

    async findUserByEmail(email){
        try{
            let result = await knex.raw(`
            SELECT 
                a.id_User,
                a.role_User,
                a.password_User,
                b.name_PlansPG
            FROM User a
            LEFT JOIN PlansPG b ON (b.id_PlansPG = a.idPlansPG_User)
            WHERE a.email_User = '${email}'`);
            
            return result[0];
        }catch(error){
            console.log(error);
            return error;
        }
    }

}

module.exports = new User();