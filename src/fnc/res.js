const {RED, RESET, YELLOW, BLUE, BLINK} = require("../colors");

async function response(err, res, con, exitProcess) {
    // noinspection FallThroughInSwitchStatementJS
    switch(true) {
        case process.env.MYSQL_NODE_DEBUG === "true":
            console.log(err ? RED + err : RED + 'NO ERROR' + RESET)
        case typeof res === undefined || null:
            console.log(YELLOW + 'Database returned no data!' + RESET)
            break
        case (typeof res === undefined || null) && (typeof err === undefined || null):
            console.log(RED + 'Unknown Error: Database did not return any data nor error!' + RESET)
            break
        case Array.isArray(res) || res instanceof Array:
            console.log(BLUE + 'Query OK.' + RESET)
            console.table(res)
            break
        default:
            console.log(BLUE + 'Query OK.' + RESET)
            console.log(BLUE + 'Rows affected: ' + (res.affectedRows ? res.affectedRows : 0) + '\n Response: ' + res.sqlMessage ? res.sqlMessage : 'N/A' + RESET)
            break
    }
    switch(true) {
        case con && exitProcess:
            con.destroy();
            console.log(BLUE + 'Closing connection... Waiting for all queries to end...' + RESET);
            process.exit(1);
            break
        default:
            break
    }
}

module.exports = {response}