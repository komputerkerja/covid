const express = require('express');
const app = express();

const PORT = 8080 || process.env.PORT

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, (req,res) => {
    res.sendFile(__dirname + "/dist/index.html")
})

app.listen(PORT, () => console.log('server runing on port ' + PORT))