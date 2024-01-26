

var express = require('express')
var app = express()
var port = 3000
var cors = require('cors')

var fs = require('fs').promises;

app.use(cors())

app.use(express.static('dist/w3earth-app/browser'));

app.get('/carddetails', async (req, res) => {
  try {
    const data = await fs.readFile('backend/dashboard-carddetails.json', 'utf-8');
    const cardData = JSON.parse(data);
    console.log(cardData.data);
    res.json(cardData.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


