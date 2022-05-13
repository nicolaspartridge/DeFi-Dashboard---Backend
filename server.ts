import express from 'express'
import axios from 'axios'

const app = express()


app.listen(8080, () => {
  console.log('listening on port 8080')
})

// BTC 

app.get('/btc-perp', (req, res) => {
  const api_url = 'https://ftx.com/api/markets/BTC-PERP'
  axios.get(api_url)
  .then((response) => {
    res.send(response.data.result)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.get('/btc-usd', (req, res) => {
  const api_url = 'https://ftx.com/api/markets/BTC/USD'
  axios.get(api_url)
  .then((response) => {
    console.log(response.data.result)
    res.send(response.data.result)
  })
  .catch((err) => {
    console.log(err)
  })
})

// ETH

app.get('/eth-perp', (req, res) => {
  const api_url = 'https://ftx.com/api/markets/ETH-PERP'
  axios.get(api_url)
  .then((response) => {
    res.send(response.data.result)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.get('/eth-usd', (req, res) => {
  const api_url = 'https://ftx.com/api/markets/ETH/USD'
  axios.get(api_url)
  .then((response) => {
    console.log(response.data.result)
    res.send(response.data.result)
  })
  .catch((err) => {
    console.log(err)
  })
})

// SOL

app.get('/sol-perp', (req, res) => {
  const api_url = 'https://ftx.com/api/markets/SOL-PERP'
  axios.get(api_url)
  .then((response) => {
    res.send(response.data.result)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.get('/sol-usd', (req, res) => {
  const api_url = 'https://ftx.com/api/markets/SOL/USD'
  axios.get(api_url)
  .then((response) => {
    console.log(response.data.result)
    res.send(response.data.result)
  })
  .catch((err) => {
    console.log(err)
  })
})

// BNB

app.get('/bnb-perp', (req, res) => {
  const api_url = 'https://ftx.com/api/markets/BNB-PERP'
  axios.get(api_url)
  .then((response) => {
    res.send(response.data.result)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.get('/bnb-usd', (req, res) => {
  const api_url = 'https://ftx.com/api/markets/BNB/USD'
  axios.get(api_url)
  .then((response) => {
    console.log(response.data.result)
    res.send(response.data.result)
  })
  .catch((err) => {
    console.log(err)
  })
})

// FTT

app.get('/ftt-perp', (req, res) => {
  const api_url = 'https://ftx.com/api/markets/FTT-PERP'
  axios.get(api_url)
  .then((response) => {
    res.send(response.data.result)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.get('/ftt-usd', (req, res) => {
  const api_url = 'https://ftx.com/api/markets/FTT/USD'
  axios.get(api_url)
  .then((response) => {
    console.log(response.data.result)
    res.send(response.data.result)
  })
  .catch((err) => {
    console.log(err)
  })
})

// AVAX

app.get('/avax-perp', (req, res) => {
  const api_url = 'https://ftx.com/api/markets/AVAX-PERP'
  axios.get(api_url)
  .then((response) => {
    res.send(response.data.result)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.get('/avax-usd', (req, res) => {
  const api_url = 'https://ftx.com/api/markets/AVAX/USD'
  axios.get(api_url)
  .then((response) => {
    console.log(response.data.result)
    res.send(response.data.result)
  })
  .catch((err) => {
    console.log(err)
  })
})