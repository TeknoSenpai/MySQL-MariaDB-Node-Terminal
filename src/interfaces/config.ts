/*
    -------------------------------------
    |   NodeJS MySQL/MariaDB Terminal   |
    |    Copyright TeknoSenpai 2022     |
    -------------------------------------

    GitHub: https://github.com/TeknoSenpai
    Discord: TeknoSenpai#0957
*/

/*
    Example config.json file:
    {
       "data": {
           "silent_debug": false,
           "no_color": false
       },
       "database_connection": {
           "host": "localhost",
           "user": "root",
           "password": "",
           "database": "mysql"
    }
}
*/

import {ConnectionConfig} from "mysql";

export default interface Config extends ConnectionConfig {
    "data": {
        "silent_debug": boolean | undefined,
        "no_color": boolean | undefined
    },
    "database_connection": ConnectionConfig
}

// @ts-ignore
import * as config from "../../config.json";
import {RED} from "../colors";

switch (true) {
    case typeof config === undefined:
        // @ts-ignore
        console.log(RED + 'Please provide a valid config!') && process.exit(0)
        break
    case typeof config.database_connection === undefined:
        // @ts-ignore
        console.log(RED + 'Please provide a valid database config!') && process.exit(0)
        break
    case typeof config.database_connection.host === undefined || null:
    case typeof config.database_connection.user === undefined || null:
    case typeof config.database_connection.password === undefined || null:
    case typeof config.database_connection.database === undefined || null:
        // @ts-ignore
        console.log(RED + 'Please provide a valid database config!') && process.exit(0)
        break
}
