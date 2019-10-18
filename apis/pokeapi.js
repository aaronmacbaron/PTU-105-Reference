const v = require('voca');
const axios = require('axios');
const util = require('../utils/file_utils')
const fs     = require('fs');
var logger = require('winston');
var API_BASE_URL = 'https://pokeapi.co/api/v2/';
var POKEMON_LOOKUP = 'pokemon/'
const POKEMON_FOLDER = "pokemon";
var respdata = "";

module.exports = {
    lookup : (pokemon_name) => {
        let url_target = API_BASE_URL+POKEMON_LOOKUP+pokemon_name;
        let file_contents = "";
        let self = this;
        let file_data = null;
        try{
            //Synchronous
            file_data = fs.readFileSync(POKEMON_FOLDER+'/'+pokemon_name+'.json', 'utf8');
        }
        catch(ex){
            //Do nothing;
        }
        if(!file_data){

            try{
                //async
                axios.get(url_target).then(response => {
                    util.saveJSONFile(POKEMON_FOLDER, pokemon_name, JSON.stringify(response.data));
                }).catch((error) => {
                    console.log("Pokemon doesn't exist")
                });
                return "File not found, fetching from PokeAPI...";
            }catch(exc){
                return "That pokemon doesn't seem to exist";
            }
           
        }
        else{
            console.log("File found.");
            return JSON.parse(file_data).name;
        }
            
        
    
        
    }    
}