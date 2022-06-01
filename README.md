## NodeJS MySQL/MariaDB Terminal

NodeJS MySQL/MariaDB Terminal is a remote terminal for MySQL/MariaDB databases, which works in the same way as the official shell does!

### Features

1.  Secure connection to the database through the [mysql](https://www.npmjs.com/package/mysql) npm package, with SSL support.
  
3.  Debugging mode to analyze and check for problems with the database
  
5.  Clean looking console, possibility to activate/deactivate color mode
  
7.  Completely free to redistribute (with appropriate credits and license, along a copy of this README)

### How to install

#### Using `git`

To install the terminal using git: 
1. Clone this repository, by running the `git clone https://github.com/TeknoSenpai/MySQL-MariaDB-Node-Terminal.git` in your console.

_Beware that you'll need to install and configure git, a guide that explains how to do so can be found [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)_

#### Using my WebServer (_Not yet available_)

To install the package through my WebServer you can use any command line utility that lets you download files from URLs (for this example and for the sake of simplicity, I'm going to use `curl` for this example)
1. [Install `curl`](https://www.cyberciti.biz/faq/download-a-file-with-curl-on-linux-unix-command-line/)
2. Run the `curl https://tekno.is-a.dev/MySQL-MariaDB-NodeTerminal` (if you wish to select a destination folder, use `--output <destination>`)

_This method doesn't require having a GitHub account unlike using git, but you'll need to update manually_

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

### Configuring the terminal

The terminal doesn't need an extensive configuration.
To create a config file, run the `npm run create-config` command.

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
The config file is straightforward, here is a list of the meaning of all the options:

`data`:
1. `silent_debug`: Suppresses the debug Mode Warning when debug mode is activated. Default: `false`
2. `no_color`: Disables the usage of colors in the terminal, this is to support monochrome terminals or if you just don't like colors. Default: `false`

`database_connection`:
1. A detailed description of this can be found [here](https://github.com/mysqljs/mysql#connection-options)

### Credits and How to contribute

1.  Credits:  
    *   Author: [TeknoSenpai](https://github.com/TeknoSenpai)  
        (Special thanks to the [Hiri Devs Org](https://hiri.dev))
2.  How to contribute:
    *   [Fork](https://github.com/TeknoSenpai/MySQL-MariaDB-Node-Terminal/fork) the repository 
    *   Clone your fork locally (`git clone (repo url)`)
    *   Add your work (`git add .`)
    *   Create a new branch (`git checkout -b "your branch name (can be your username)"`)
    *   Commit (`git commit -m "Your very detailed description"`)
    *   Start a pull request and wait

### Screenshots

Some screenshots of the terminal in action, taken from the Manjaro Shell.

1. Terminal (full screen with color) ![Terminal With Color](https://imgur.com/PIHEjgw.png)
2. Terminal (full screen, no color) ![Terminal Without Color](https://imgur.com/UrflaBm.png)
