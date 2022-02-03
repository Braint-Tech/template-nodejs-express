const knex = require("../database/connection");

class Schema{

    async teamTable(){
        try{
            await knex.raw('CREATE TABLE IF NOT EXISTS Team( id_Team INT NOT NULL AUTO_INCREMENT,'+
            ' name_Team VARCHAR(230) NOT NULL,'+
            ' firstRange_Team FLOAT NOT NULL,'+
            ' secondRange_Team FLOAT NOT NULL,'+
            ' thirdRange_Team FLOAT NOT NULL,'+
            ' fourthRange_Team FLOAT NOT NULL,'+
            ' CONSTRAINT PK_Team PRIMARY KEY (id_Team),'+
            ' INDEX(id_Team))');

            return true;
        }catch(error){
            console.log(error);

            return false;
        }
    }
}

module.exports = new Schema();