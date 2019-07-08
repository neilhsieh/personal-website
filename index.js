const express = require('express')
const path = require('path')

const port = process.env.PORT || 8000

const app =  express()

app.get('/', (req, res) => {
  res.send('Hello, this works!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})