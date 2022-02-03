const Schema = require('./../models/Schema');

class SchemaController{
    async createTables(req, res){
        try{
            let result = await Schema.teamTable();
     
            if(!result)
                return res.status(500).json({message: "It was not possible to create the team table"});

            
        }catch(error){
            return res.status(500).json({message: "Couldn't call method 'teamTable'", error});
        }
    }
}

module.exports = new SchemaController();