var Discord  = require('discord.io');
var logger   = require('winston');
var auth     = require('./auth.json');
let edgeDict = require('./edges/logic');
let featureDict = require('./features/logic');
let misc     = require('./misc');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'commands':
                    bot.sendMessage({
                        to: channelID,
                        message: misc.commands()
                    }); 
            break;
            case 'edges':
                let edgename = args.join(" ");
                if(edgename)
                    bot.sendMessage({
                        to: channelID,
                        message: edgeDict.lookup(edgename)
                    });
                else
                bot.sendMessage({
                    to: channelID,
                    message: edgeDict.usage()
                }); 
            break;
            case 'listedges':
                if(args[0]){
                    let categoryName = args.join(" ");
                    bot.sendMessage({
                        to: channelID,
                        message: edgeDict.allByCategory(categoryName)
                    }); 
                }
                else{
                    bot.sendMessage({
                        to: channelID,
                        message: edgeDict.listCategories()
                    });
                }
            break;
            case 'features':
                let featurename = args.join(" ");
                if(featurename)
                    bot.sendMessage({
                        to: channelID,
                        message: featureDict.lookup(featurename)
                    });
                else
                bot.sendMessage({
                    to: channelID,
                    message: featureDict.usage()
                }); 
            break;
            case 'listfeatures':
                if(args[0]){
                    let categoryName = args.join(" ");
                    bot.sendMessage({
                        to: channelID,
                        message: featureDict.allByCategory(categoryName)
                    }); 
                }
                else{
                    bot.sendMessage({
                        to: channelID,
                        message: featureDict.listCategories()
                    });
                }
            break;
            // Just add any case commands if you want to..
         }
     }
});