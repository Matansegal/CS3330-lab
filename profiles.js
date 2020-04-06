var conn = require('./connection')
var express = require('express');
var router = express.Router();

router.get('/api/profiles', async (req, res) => {

	conn.query("SELECT * FROM profiles", function (err, result, fields) {
	if (err){
      console.log('could not get profiles');
      throw err; 
    }
		res.send(result); 
	});
});

module.exports = router;