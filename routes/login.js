const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/login', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'login.html'));
});

module.exports = router; 