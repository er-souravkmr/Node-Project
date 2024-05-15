var express = require('express');
var router = express.Router();
const userModel = require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', async function(req, res) {
  const created = await userModel.create({
    username: "sourav9871",
    name: "Sourav",
    age: 23
  })
  res.send(created);
});

router.get('/find', async function(req, res) {
  const found = await userModel.find();
  res.send(found);
});

router.get('/del', async function(req, res) {
  const deleted = await userModel.findOneAndDelete({
    username: "sourav9871",
  })
  res.send(deleted);
});

module.exports = router;
