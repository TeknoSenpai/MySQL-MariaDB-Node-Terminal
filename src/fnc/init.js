// noinspection JSMissingSwitchBranches

/*
    -------------------------------------
    |   NodeJS MySQL/MariaDB Terminal   |
    |    Copyright TeknoSenpai 2022     |
    -------------------------------------

    GitHub: https://github.com/TeknoSenpai
    Discord: TeknoSenpai#0957
*/

const config = require("../../config.json");
const {RED, RESET, YELLOW, BLUE} = require("../colors");
const mysql = require("mysql");
const connection = mysql.createConnection(config.database_connection)
const {response} = require('./res');

connection.connect((err) => {
    if(err) console.log(RED + 'Error! ' + err.sqlMessage + '\nError Code: ' + err.code + RESET) && process.exit(0)
});

function init() {
    switch(true) {
        case String(process.argv.slice(process.argv.indexOf('-debug') + 1)) === 'true':
            process.env.MYSQL_NODE_DEBUG = "true";
            if(!config.data.silent_debug) console.log(RED + 'DEBUG MODE ACTIVE! CONSOLE MIGHT BE FLOODED WITH DATA, TO DISABLE DEBUG MODE, PLEASE RUN THE ' + RESET + '\`terminal\`' + RED + ' SCRIPT WITH THE ' + RESET + '\`npm run terminal\`' + RED + ' COMMAND; \nTO SUPPRESS THIS WARNING, PLEASE SET ' + RESET + '\`silent_debug\`' + RED + ' TO ' + RESET + '\`true\`' + RED + ' IN THE CONFIG, OR RUN THE ' + RESET + '\`silent_debug\` ' + RED + 'SCRIPT WITH THE ' + RESET + '\`npm run silent_debug\`' + RED + ' COMMAND!' + RESET + '\n')
            return connection
        case process.argv.includes('-q'):
            const query = process.argv.slice(process.argv.indexOf('-q') + 1).join(' ')
                connection.query(query.trim(), (err, res) => {
                    if(err) { console.log(RED + 'ERROR! ' + err.code + RESET); connection.destroy(); process.exit(0) }

                    response(err, res, connection, true)
                })
            break
        default:
            return connection
    }
}

module.exports = { init }
