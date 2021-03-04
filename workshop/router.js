const express = require('express');
const router = express.Router();
const handlers = require("./handlers");

router.get('/', handlers.home)
router.get('/try-catch', handlers.tryCatch)
router.get('/callback', handlers.callback)
router.get('/rejection', handlers.rejection)
router.use(handlers.missing)

module.exports = router;
