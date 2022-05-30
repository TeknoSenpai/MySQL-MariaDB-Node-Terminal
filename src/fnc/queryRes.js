const {RED, RESET, YELLOW, BLUE} = require("../colors");

function queryRes(err, res) {
    switch(true) {
        case process.env.MYSQL_NODE_DEBUG === "true":
            return console.log(err ? RED + err : RED + 'NO ERROR' + RESET)
        case err:
            return console.log(RED + 'Error: ' + err.sqlMessage + RESET);
        case typeof res === "undefined" || "null":
            return console.log(YELLOW + 'Database returned no data, probably due to a syntax error in the query, check your query syntax!' + RESET)
        case (typeof res === "undefined" || "null") && (typeof err === "undefined" || "null"):
            return console.log(RED + 'Unknown Error: Database did not return any data nor error!' + RESET)
    }

    switch(true) {
        case process.env.MYSQL_NODE_DEBUG === "true":
            console.log(res + RESET)
        // noinspection FallThroughInSwitchStatementJS
        case Array.isArray(res):
            console.log(BLUE + 'Query OK.' + RESET)
            console.table(res)
            break
        case res instanceof Array:
            console.log(BLUE + 'Query OK.' + RESET)
            console.table(BLUE + res + BLUE)
            break
        default:
            console.log(BLUE + 'Query OK.' + RESET)
            console.log(BLUE + 'Rows affected: ' + res.affectedRows ? res.affectedRows : 0 + '\n Response: ' + res.sqlMessage ? res.sqlMessage : 'N/A' + RESET)
            break
    }
}

module.exports = {queryRes}