import express from 'express'

// const express = require('express')
const app = express()
const port = 2020

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.get('/our-story', (req, res) => {
  res.status(200).send('Our Story')
})

app.get('/our-programs', (req, res) => {
  res.status(200).send('Our Programs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})