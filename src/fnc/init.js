/*
    -------------------------------------
    |   NodeJS MySQL/MariaDB Terminal   |
    |    Copyright TeknoSenpai 2022     |
    -------------------------------------

    GitHub: https://github.com/TeknoSenpai
    Discord: TeknoSenpai#0957
*/

const config = require("../../config.json");
const {RED, RESET} = require("../colors");
const mysql = require("mysql");
const connection = mysql.createConnection(config.database_connection)

connection.connect();

function init() {
    switch(true) {
        case String(process.argv.slice(2)[1]) === 'true':
            process.env.MYSQL_NODE_DEBUG = "true";
            if(config.data.silent_debug === false) console.log(RED + 'DEBUG MODE ACTIVE! CONSOLE MIGHT BE FLOODED WITH DATA, TO DISABLE DEBUG MODE, PLEASE RUN THE ' + RESET + '\`terminal\`' + RED + ' SCRIPT WITH THE ' + RESET + '\`npm run terminal\`' + RED + ' COMMAND; \nTO SUPPRESS THIS WARNING, PLEASE SET ' + RESET + '\`silent_debug\`' + RED + ' TO ' + RESET + '\`true\`' + RED + ' IN THE CONFIG, OR RUN THE ' + RESET + '\`silent_debug\` ' + RED + 'SCRIPT WITH THE ' + RESET + '\`npm run silent_debug\`' + RED + ' COMMAND!\n')
            return connection
        default:
            return connection
    }
}

module.exports = { init }
