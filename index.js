/*
    -------------------------------------
    |   NodeJS MySQL/MariaDB Terminal   |
    |    Copyright TeknoSenpai 2022     |
    -------------------------------------

    GitHub: https://github.com/TeknoSenpai
    Discord: TeknoSenpai#0957
*/

process.env.MYSQL_NODE_DEBUG = "undefined";

require('./src/interfaces/config.js');
const {init} = require('./src/fnc/init.js')
const center = require('center-align');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const {checkSpecialQueries} = require('./src/checkSpecialQueries.js');
const {queryRes} = require('./src/fnc/queryRes')

let {RED, YELLOW, BLUE, CYAN, RESET} = require('./src/colors.js')

//----//
const config = require('./config.json')

//----//

const connection = init();

//----//

(function () {
    console.log(center(BLUE + 'Welcome to Node MySQL/MariaDB Remote Terminal. \nCopyright TeknoSenpai 2022, All Rights Reserved. [https://github.com/TeknoSenpai] \n' + RESET, process.stdout.columns))
    query();
})()

function query() {
    readline.question(`${BLUE}MySQL/MariaDB Node Terminal ${RESET}${CYAN}[(${config.database_connection.database ? config.database_connection.database : 'none'})] ${RESET}${BLUE}=> ${RESET}`, q => {
        // noinspection BadExpressionStatementJS
        checkSpecialQueries(q, connection)? '' : process.exit(1);

        if(q) {
            connection.query(q.trim(), (err, res) => {
                if(!err) err = false;
                if(!res) res = false;
                queryRes(err, res);
                query();
            })
        } else {
            query()
        }
    })
}