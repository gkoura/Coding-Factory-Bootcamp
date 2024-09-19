const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/user', (req, res) => {
  console.log(req.body)
  res.send('POST request to /user') // Fixed typo in response message
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})
