const express = require('express')
const listingRouter = express.Router()

listingRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })
  .get((req, res) => {
    res.end('Will send all the listings to you')
  })
  .post((req, res) => {
    res.end(
      `Will add the listing: ${req.body.name} with description: ${req.body.description}`
    )
  })
  .put((req, res) => {
    res.statusCode = 403
    res.end('PUT operation not supported on /listings')
  })
  .delete((req, res) => {
    res.end('Deleting all listings')
  })

listingRouter
  .route('/:listingId')
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })

  .post((req, res) => {
    res.statusCode = 403
    res.end(
      `POST operation not supported on /listings/${req.params.listingID}`
    )
  })

  .put((req, res) => {
    res.write(`Updating the listing: ${req.params.listingID}\n`)
    res.end(
      `Will update the listing: ${req.body.name} with description: ${req.body.description}`
    )
  })

  .delete((req, res) => {
    res.end(`Deleting listing: ${req.params.listingID}`)
  })

module.exports = listingRoute