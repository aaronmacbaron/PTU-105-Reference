const v = require('voca');
var logger = require('winston');
const edict = require('./dictionary');

module.exports = {
    lookup : (edge) => {
        formatted_edge = v.lowerCase(edge);
        if(edict.edge_dictionary[formatted_edge])
            return  "**"
            + edict.edge_dictionary[formatted_edge].name 
            + "**\r" 
            + "**Category: **" + edict.edge_dictionary[formatted_edge].category 
            +"\r"
            + "**Prerequisites: **" + edict.edge_dictionary[formatted_edge].prerequisites 
            +"\r"
            + "**Effect: **" + edict.edge_dictionary[formatted_edge].effect
        else
        return edict.error.non_existent_edge;    
    },
    listCategories: () => {
        let categories = [];
        for (var entry in edict.edge_dictionary) {
            let category = edict.edge_dictionary[entry].category;   
            if(!categories.includes(category))
                categories.push(category)
        }
        return `
        **Usage:** !listedges <category name>
**Example:** !listedges Combat
Here is a list of the different categories:\r`+
         categories.join(", ");
    },
    allByCategory : (edgeCategory) => {
        let list = [];
        let formattedCategory = v.lowerCase(edgeCategory);
        for (var entry in edict.edge_dictionary) {
            if(v.lowerCase(edict.edge_dictionary[entry].category) === formattedCategory)
                list.push(edict.edge_dictionary[entry].name);
        }
        list.sort(function(a, b) {
            var textA = a.toUpperCase();
            var textB = b.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        return list.join("\r");
    },
    usage : () => {
        return `**usage:** !edges <skill name>\rexample: !edges Basic Skills`;
    }
}