

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('dist/w3earth-app/browser'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


