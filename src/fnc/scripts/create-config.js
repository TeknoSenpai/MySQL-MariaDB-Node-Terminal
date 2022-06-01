const fs = require('fs');
const {join} = require('path');
const path = join(module.path, '../../../');

(function () {
    if(fs.existsSync(`${path}/config.json`)) return console.log('Config file already exists!')
    fs.writeFile(`${path}/config.json`, new Uint8Array(Buffer.from(JSON.stringify({
            "data":{
                "silent_debug":false,
                "no_color":false
            },
            "database_connection":{
                "host":"",
                "user":"",
                "password":"",
                "database":""
            }
        })
    )), (err) => { if(err) {console.log('Error while creating config!')} else {console.log('Config file created! You might need to indent it')} })
})()