const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.status(500).send('Something went wrong...please try again later!')
})

app.get('/version', (req, res) => {
  res.send('Current deployed version: v18')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
