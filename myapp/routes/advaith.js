var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "NjitCapstone1"
});

var mainresult;
var sql= 'select * from sys.test'
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    mainresult=result
  });

});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(mainresult);
});

module.exports = router;
