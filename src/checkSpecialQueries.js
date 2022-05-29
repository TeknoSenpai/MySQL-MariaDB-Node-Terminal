/*
    -------------------------------------
    |   NodeJS MySQL/MariaDB Terminal   |
    |    Copyright TeknoSenpai 2022     |
    -------------------------------------

    GitHub: https://github.com/TeknoSenpai
    Discord: TeknoSenpai#0957
*/

const {BLUE} = require('./colors.js')

module.exports = {
    checkSpecialQueries(query) {
        switch(query) {
            case '\\q':
                console.log(BLUE + 'Bye.')
                return false
            case query.toLowerCase().replace(';', '') === 'exit':
                console.log(BLUE + 'Bye.')
                return false
            default:
                return true
        }
    }
}