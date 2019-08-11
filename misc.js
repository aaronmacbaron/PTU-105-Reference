const fdict = require('./features/dictionary');
const edict = require('./edges/dictionary');
const v     = require('voca');

module.exports = {
    commands : () => {
        let str = `
commands - Show this list

edges <edge name> - Get details on a specific edge
listedges - Show usage of list edges and the available categories
listedges <edge category> - Show all edges from a specific category

features <feature name> - Get details on a specific feature
listfeatures - Show usage of list features and the available categories
listfeatures <feature category> - Show all features from a specific category`;
        return str;
    },
    lookup : (term) => {
        let retVal = "";
        formatted_text = v.lowerCase(term);
        if(fdict.feature_dictionary[formatted_text])
            retVal =  "**"
            + fdict.feature_dictionary[formatted_text].name 
            + "**\r" 
            + "**Type: ** Feature\r"
            + "**Category: **" + fdict.feature_dictionary[formatted_text].category 
            +"\r"
            + fdict.feature_dictionary[formatted_text].desc;
        else if(edict.edge_dictionary[formatted_text])
            retVal = "**"
            + edict.edge_dictionary[formatted_text].name 
            + "**\r" 
            + "**Type: ** Edge\r"
            + "**Category: **" + edict.edge_dictionary[formatted_text].category 
            +"\r"
            + edict.edge_dictionary[formatted_text].desc;
        else
            return "**Lookup failure: **" + term +" was not found.";
        return retVal;
    }
}