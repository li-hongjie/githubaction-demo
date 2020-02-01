var fs = require("fs")

fs.writeFileSync('data.json', '{"time": "'+new Date()+'"}', (err)=> {
    console.log(err)
})
