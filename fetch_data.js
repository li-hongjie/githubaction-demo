var fs = require("fs")

fs.writeFileSync('data.json', '{"updateTime": "'+new Date()+'"}', (err)=> {
    console.log(err)
})
