const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
});

// Task 1 - replicate the route but for specific campsite IDs. We're using params since we're retrieving resources through GET and PUT and DELETE
campsiteRouter.route('/:campsiteId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /campsites/:campsiteId');
})
.put((req, res) => {
    res.end(`Will update the campsite: ${req.params.campsiteId} with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Will delete the campsite: ${req.params.campsiteId}`);
});


module.exports = campsiteRouter;