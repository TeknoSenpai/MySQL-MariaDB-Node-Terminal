"use strict";
/*
    -------------------------------------
    |   NodeJS MySQL/MariaDB Terminal   |
    |    Copyright TeknoSenpai 2022     |
    -------------------------------------

    GitHub: https://github.com/TeknoSenpai
    Discord: TeknoSenpai#0957
*/
exports.__esModule = true;
var config = require("../../config.json");
var colors_1 = require("../colors");
switch (true) {
    case typeof config === "undefined":
    case typeof config.database_connection === "undefined":
    case typeof config.database_connection.host === "undefined" || "null":
    case typeof config.database_connection.user === "undefined" || "null":
    case typeof config.database_connection.password === "undefined" || "null":
    case typeof config.database_connection.database === "undefined" || "null":
        console.log(colors_1.RED + 'Please provide a valid database config!');
        process.exit(0);
        break;
}
