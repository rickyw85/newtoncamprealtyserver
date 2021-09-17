const express = require('express')
const agentRouter = express.Router()

agentRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })
  .get((req, res) => {
    res.end('Will send all the agents to you')
  })
  .post((req, res) => {
    res.end(
      `Will add the agent: ${req.body.name} with description: ${req.body.description}`
    )
  })
  .put((req, res) => {
    res.statusCode = 403
    res.end('PUT operation not supported on /agents')
  })
  .delete((req, res) => {
    res.end('Deleting all agents')
  })

agentRouter
  .route('/:agentID')
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })

  .post((req, res) => {
    res.statusCode = 403
    res.end(
      `POST operation not supported on /agents/${req.params.agentID}`
    )
  })

  .put((req, res) => {
    res.write(`Updating the agent: ${req.params.agentID}\n`)
    res.end(
      `Will update the agent: ${req.body.name} with description: ${req.body.description}`
    )
  })

  .delete((req, res) => {
    res.end(`Deleting agent: ${req.params.agentID}`)
  })

module.exports = agentRouter