<center>
   <h3>NodeJS MySQL/MariaDB Terminal</h3>
</center>
<p>
   NodeJS MySQL/MariaDB Terminal is a remote terminal for MySQL/MariaDB databases, which works in the same way as the official shell does!
</p>
<center>
   <h3>Features</h3>
</center>
<ol>
   <li>
      Secure connection to the database through the <a href="https://www.npmjs.com/package/mysql">mysql</a> npm package, with SSL support.
   </li>
   <br>
   <li>
      Debugging mode to analyze and check for problems with the database
   </li>
   <br>
   <li>
      Clean looking console, possibility to activate/deactivate color mode
   </li>
   <br>
   <li>
      Completely free to redistribute (with appropriate credits and license, along a copy of this README)
   </li>
</ol>
<center>
   <h3>How to use</h3>
</center>
<h4>Terminal Mode</h4>
To run the terminal, you can use the <code>terminal</code> script, with the <code>npm run terminal</code> command.
<br>
<h4>Single-Query Mode <i>(Not Released Yet)</i></h4>
The terminal also supports a "single-query" usage, through CLI Arguments.
<br>
Simply run the <code>index.js</code> file with the <code>node index.js -q (query)</code>
<br>
<strong>Example:</strong> <code>node index.js -q SHOW VARIABLES LIKE 'port';</code>
<br>
<h4>Debug Mode</h4>
To start the terminal in debug mode, use the <code>debug</code> script, or run the index file with the <code>node index.js -debug true</code> command.
The console will throw a warning, to suppress it, go in the <code>config.json</code> file and set <code>silent_debug</code> to <code>true</code>.
<br>
In debug mode, the console will log the raw data recived from the database, along with any error.
<br>
<strong>Please keep in mind that some personal data might be exposed, such as user, password, server address and other. Use debug mode at your own risk</strong>.
<br>

<center><h3>Credits and How to contribute</h3></center>
<ol>
   <li>
      Credits: 
      <br>
      <ul>
         <li>
            Author: <a href="https://github.com/TeknoSenpai">TeknoSenpai</a>
            <br>
            (Special thanks to the <a href="https://hiri.dev">Hiri Devs Org</a>)
         </li>
      </ul>
   </li>
   <li>
      How to contribute:
      <ul>
         <li>
            Fork the repository (or clone it <code>git clone (repo url)</code>
         </li>
         <li>
            Add your work (<code>git add .</code>)
         </li>
         <li>
            Create a new branch (<code>git checkout -b "your branch name (can be your username)"</code>)
         </li>
         <li>
            Commit (<code>git commit -m "Your very detailed description"</code>)
         </li>
         <li>
            Start a pull request and wait
         </li>
      </ul>
   </li>
</ol>