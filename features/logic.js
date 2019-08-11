const v = require('voca');
var logger = require('winston');
const fdict = require('./dictionary');


module.exports = {
    lookup : (feature) => {
        formatted_feature = v.lowerCase(feature);
        if(fdict.feature_dictionary[formatted_feature])
            return  "**"
            + fdict.feature_dictionary[formatted_feature].name 
            + "**\n" 
            + "**Category: **" + fdict.feature_dictionary[formatted_feature].category 
            +"\n"
            + fdict.feature_dictionary[formatted_feature].desc 
        else
        return fdict.error.non_existent_error;    
    },
    listCategories: () => {
        let categories = [];
        for (var entry in fdict.feature_dictionary) {
            let category = fdict.feature_dictionary[entry].category;   
            if(!categories.includes(category))
                categories.push(category)
        }
        return `
        **Usage:** !listfeatures <category name>
**Example:** !listfeatures Combat
Here is a list of the different categories:\r`+
         categories.join(", ");
    },
    allByCategory : (featureCategory) => {
        let list = [];
        let formattedCategory = v.lowerCase(featureCategory);
        for (var entry in fdict.feature_dictionary) {
            if(v.lowerCase(fdict.feature_dictionary[entry].category) === formattedCategory)
                list.push(fdict.feature_dictionary[entry].name);
        }
        list.sort(function(a, b) {
            var textA = a.toUpperCase();
            var textB = b.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        return list.join("\r");
    },
    usage : () => {
        return `**usage:** !features <feature name>\rexample: !features Defender`;
    }
}