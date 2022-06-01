/*
    -------------------------------------
    |   NodeJS MySQL/MariaDB Terminal   |
    |    Copyright TeknoSenpai 2022     |
    -------------------------------------

    GitHub: https://github.com/TeknoSenpai
    Discord: TeknoSenpai#0957
*/

const config = require('../config.json')

let commandline_colors = {
    "RED": "\x1B[31m",
    "YELLOW": "\x1B[33m",
    "BLUE": "\x1b[1m\x1B[34m",
    "CYAN": "\x1B[36m",
    "BLINK": "\x1b[5m",
    "RESET": "\x1B[0m"
}

switch(true) {
    case config.data.no_color:
        commandline_colors = {
            "RED": "",
            "YELLOW": "",
            "BLUE": "",
            "CYAN": "",
            "BLINK": "",
            "RESET": ""
        }
}

module.exports = commandline_colors