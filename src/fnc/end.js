const {RED, BLUE, RESET} = require("../colors");

function cEnd(connection, endPeacefully, endProcess) {
    process.env.MYSQL_NODE_DEBUG = undefined;
    const end = () => connection.end((err) => console.log(err ? RED + 'Error! ' + err.sqlMessage + RESET : BLUE + 'Closing connection... Waiting for all queries to end...' + RESET))
    const destroy = () => connection.destroy().then(() => console.log(RED + 'Connection destroyed!' + RESET))
    switch(true) {
        case endPeacefully:
            end()
            break
        case !endPeacefully:
            destroy()
            break
        case endPeacefully && endProcess:
            end()
            process.exit(1)
            break
        case !endPeacefully && endProcess:
            destroy()
            process.exit(1)
            break
        default:
            return;
    }
}

module.exports = {cEnd}