### NodeJS MySQL/MariaDB Terminal

NodeJS MySQL/MariaDB Terminal is a remote terminal for MySQL/MariaDB databases, which works in the same way as the official shell does!

### Features

1.  Secure connection to the database through the [mysql](https://www.npmjs.com/package/mysql) npm package, with SSL support.
  
3.  Debugging mode to analyze and check for problems with the database
  
5.  Clean looking console, possibility to activate/deactivate color mode
  
7.  Completely free to redistribute (with appropriate credits and license, along a copy of this README)

### How to use

#### Terminal Mode

To run the terminal, you can use the `terminal` script, with the `npm run terminal` command.  

#### Single-Query Mode

The terminal also supports a "single-query" usage, through CLI Arguments.  
Simply run the `index.js` file with the `node index.js -q (query)`  
**Example:** `node index.js -q SHOW VARIABLES LIKE 'port';`  

#### Debug Mode

To start the terminal in debug mode, use the `debug` script, or run the index file with the `node index.js -debug true` command. The console will throw a warning, to suppress it, go in the `config.json` file and set `silent_debug` to `true`.  
In debug mode, the console will log the raw data recived from the database, along with any error.  
**Please keep in mind that some personal data might be exposed, such as user, password, server address and other. Use debug mode at your own risk**.  

### Credits and How to contribute

1.  Credits:  
    *   Author: [TeknoSenpai](https://github.com/TeknoSenpai)  
        (Special thanks to the [Hiri Devs Org](https://hiri.dev))
2.  How to contribute:
    *   Fork the repository (or clone it `git clone (repo url)`
    *   Add your work (`git add .`)
    *   Create a new branch (`git checkout -b "your branch name (can be your username)"`)
    *   Commit (`git commit -m "Your very detailed description"`)
    *   Start a pull request and wait

### Useful Things

1.  Example `config.json` file:  
```json
{
   "data":{
      "silent_debug":false,
      "no_color":false
   },
   "database_connection":{
      "host":"localhost",
      "user":"tekno",
      "password":"tekno",
      "database":"mysql"
   }
}
```
