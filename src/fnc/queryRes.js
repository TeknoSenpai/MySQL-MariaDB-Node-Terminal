const {RED, RESET, YELLOW, BLUE} = require("../colors");

async function queryRes(err, res) {
    if(err) return console.log(RED + 'Error: ' + RED + (err ? err?.sqlMessage : 'N/A') + RESET);
    switch(err) {
        case true:
            break
        case false:
        default:
            switch(res) {
                case false:
                    return console.log(RED + 'Unknown Error: Database did not return any data!')
                default:
                    break
            }

            switch(true) {
                case process.env.MYSQL_NODE_DEBUG === "true":
                    if(Array.isArray(res) || res instanceof Array) {
                        console.dir(res)
                    } else {
                        console.log(res)
                    }
                    console.log(err)
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
                    console.log(`${BLUE}Query OK.${RESET}\n${BLUE}Rows affected: ${res.affectedRows ? res.affectedRows : 'N/A'}${RESET}`)
                    break
            }
    }
}

module.exports = {queryRes}