const v      = require('voca');
const fs     = require('fs');
const logger = require('winston');

module.exports = {
    saveJSONFile : (folder, filename, data) => {
        fs.writeFile('./'+folder+'/'+filename+'.json', data, function(err) {

            if(err) {
                return console.log(err);
            }
            console.log(filename + " was saved in "+ folder+'/'+filename+'.json')
        }); 
    },
    readJSONFile : (folder, filename) => {
        console.log("Reading: "+folder+'/'+filename+'.json')
        return fs.readFile(folder+'/'+filename+'.json', 'utf8', function(err, contents) {
          return contents;
        });
    }
}