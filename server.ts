import express from 'express'
import axios from 'axios'

const app = express()


app.listen(8080, () => {
  console.log('listening on port 8080')
})

app.get('/btc', (req, res) => {
  const api_url = 'https://ftx.com/api/markets/BTC-PERP'
  axios.get(api_url)
  .then((response) => {
    console.log(response.data.result)
    res.send(response.data.result)
  })
  .catch((err) => {
    console.log(err)
  })
})