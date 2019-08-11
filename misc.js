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
    }
}