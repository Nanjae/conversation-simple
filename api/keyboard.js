var express = require('express');
var router = express.Router();

var response = {
      "type": "buttons",
      "buttons" : [
        "Button 1",
      	"Button 2",
      	"Button 3"
      ]
  };

/* GET initial keyboard settings. */
router.get('/', function(req, res, next) {
  res.json(response);
});

module.exports = router;
