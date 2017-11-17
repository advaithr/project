var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "NjitCapstone1"
});

var dummyResult = [
  {
  ProductId: "0 305 406 901",
  Reduce: 8.784000000000004,
  Margin: 9.760000000000005,
  PriceToPush: 119.024,
  QtyToPush: 0,
  FlagStatus: "F"
  },
  {
  ProductId: "1285431/168",
  Reduce: 1.9080000000000008,
  Margin: 2.120000000000001,
  PriceToPush: 24.788,
  QtyToPush: 0,
  FlagStatus: "F"
  },
  {
  ProductId: "1695900025",
  Reduce: 389.37599999999986,
  Margin: 432.6399999999999,
  PriceToPush: 3206.736,
  QtyToPush: 0,
  FlagStatus: "F"
  },
  {
  ProductId: "265-119",
  Reduce: 2.483999999999998,
  Margin: 2.759999999999998,
  PriceToPush: 34.724000000000004,
  QtyToPush: 7,
  FlagStatus: "F"
  },
  {
  ProductId: "64151",
  Reduce: 4.247999999999999,
  Margin: 4.72,
  PriceToPush: 11.527999999999999,
  QtyToPush: 9,
  FlagStatus: "F"
  },
  {
  ProductId: "D2R",
  Reduce: 4.247999999999999,
  Margin: 4.72,
  PriceToPush: 11.527999999999999,
  QtyToPush: 0,
  FlagStatus: "T"
  },
  {
  ProductId: "D3S",
  Reduce: 32.32799999999999,
  Margin: 35.91999999999999,
  PriceToPush: 216.40800000000002,
  QtyToPush: 0,
  FlagStatus: "T"
  },
  {
  ProductId: "H11LL",
  Reduce: 3.708000000000001,
  Margin: 4.120000000000001,
  PriceToPush: 26.588,
  QtyToPush: 1,
  FlagStatus: "T"
  },
  {
  ProductId: " LM 2012",
  Reduce: 9.576,
  Margin: 10.64,
  PriceToPush: 18.936,
  QtyToPush: 1,
  FlagStatus: "T"
  },
  {
  ProductId: "0 305 555 002",
  Reduce: 5.147999999999999,
  Margin: 5.719999999999999,
  PriceToPush: 64.428,
  QtyToPush: 0,
  FlagStatus: "T"
  }
  ]
var mainresult;
var sql= 'select * from sys.test'
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + dummyResult);
    mainresult=result
  });

});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(dummyResult);
});

module.exports = router;
