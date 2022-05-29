/*
    -------------------------------------
    |   NodeJS MySQL/MariaDB Terminal   |
    |    Copyright TeknoSenpai 2022     |
    -------------------------------------

    GitHub: https://github.com/TeknoSenpai
    Discord: TeknoSenpai#0957
*/

require('./src/interfaces/config.js');
const {init} = require('./src/fnc/init.js')
const mysql = require('mysql');
const {MysqlError} = require('mysql');
const center = require('center-align');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const {checkSpecialQueries} = require('./src/checkSpecialQueries.js');

let {RED, YELLOW, BLUE, CYAN, RESET} = require('./src/colors.js')

//----//
const config = require('./config.json')

switch (true) {
    case config.data.no_color === true:
        RED = ''
        YELLOW = ''
        BLUE = ''
        CYAN = ''
        break
}

//----//

const connection = init();

//----//

(function () {
    console.log(center(BLUE + 'Welcome to Node MySQL/MariaDB Remote Terminal. \nCopyright TeknoSenpai 2022, All Rights Reserved. [https://github.com/TeknoSenpai] \n' + RESET, process.stdout.columns))
    query();
})()

function query() {
    readline.question(`${BLUE}MySQL/MariaDB Node Terminal ${RESET}${CYAN}[(${config.database_connection.database ? config.database_connection.database : 'none'})] ${RESET}${BLUE}=> `, q => {
        checkSpecialQueries(q) ? connection.resume() : process.exit(0);

        if(q) {
            connection.query(q.trim(), (e, a) => {
                switch(true) {
                    case process.env.MYSQL_NODE_DEBUG === "true":
                        console.log(e ? RED + e : RED + 'NO ERROR')
                        break
                    case typeof e === MysqlError:
                        console.log(RED + 'Error' + e.sqlMessage);
                        break
                    case typeof a === undefined || null:
                        console.log(YELLOW + 'Database returned no data!')
                        break
                    case (typeof a === undefined || null) && (typeof e === undefined || null):
                        console.log(RED + 'Unknown Error: Database did not return any data nor error!')
                        return query()
                }

                //----//

                switch(true) {
                    case process.env.MYSQL_NODE_DEBUG === "true":
                        console.log(a)
                        break
                    case Array.isArray(a):
                        console.table(a)
                        break
                    case a instanceof Array:
                        console.log(BLUE + 'Query OK.')
                        console.table(BLUE + a + BLUE)
                        break
                    default:
                        console.log(BLUE + 'Query OK.')
                        console.log(BLUE + 'Rows affected: ' + a.affectedRows ? a.affectedRows : 0 + '\n Response: ' + a.sqlMessage ? a.sqlMessage : 'N/A')
                        break
                }

                //----//

                query();
            })
        } else {
            query()
        }
    })
}