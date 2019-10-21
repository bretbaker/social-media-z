// initialize express and router
const express = require("express");
const app = express();
const router = express.Router();
const path = require('path');

// initialize params/body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// homepage route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', '/html/index.html'));
});

module.exports = router;