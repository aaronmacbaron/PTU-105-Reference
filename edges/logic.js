const v = require('voca');
var logger = require('winston');
const edict = require('./dictionary');

module.exports = {
    lookup : (edge) => {
        formatted_edge = v.lowerCase(edge);
        if(edict.edge_dictionary[formatted_edge])
            return  edict.edge_dictionary[formatted_edge].desc 
        else
        return edict.error.non_existent_edge;    
    },
    all : () => {
        let list = "";
        for (var entry in edict.edge_dictionary) {
            list += edict.edge_dictionary[entry].name + "\r";
        }
        return list;
    },
    allByCategory : (edgeCategory) => {
        let list = "";
        let formattedCategory = v.lowerCase(edgeCategory);
        for (var entry in edict.edge_dictionary) {
            if(v.lowerCase(edict.edge_dictionary[entry].category) === formattedCategory)
                list += edict.edge_dictionary[entry].name + "\r";
        }
        return list;
    },
    usage : () => {
        return `**usage:** !edges <skill name>\rexample: !edges Basic Skills`;
    }
}