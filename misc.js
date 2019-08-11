module.exports = {
    commands : () => {
        let str = `
commands - Show this list
edges <edge name> - Get details on a specific edge
listedges - Show usage of list edges and the available categories
listedges <edge category> - Show all edges from a specific category`;
        return str;
    }
}