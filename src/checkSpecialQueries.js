/*
    -------------------------------------
    |   NodeJS MySQL/MariaDB Terminal   |
    |    Copyright TeknoSenpai 2022     |
    -------------------------------------

    GitHub: https://github.com/TeknoSenpai
    Discord: TeknoSenpai#0957
*/

const {BLUE, RESET} = require('./colors.js')
const {cEnd} = require('./fnc/end')

module.exports = {
    checkSpecialQueries(query, connection) {
        switch(query) {
            case '\\q':
                console.log(BLUE + 'Bye.' + RESET)
                cEnd(connection, true, false);
                return false;
            case query.toLowerCase().replace(';', '') === 'exit':
                console.log(BLUE + 'Bye.' + RESET)
                cEnd(connection, true, false);
                return false
            default:
                return true;
        }
    }
}