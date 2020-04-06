var con = require('./connection')
var express = require('express');
var router = express.Router();

// get all table
router.get('/api/profiles', async (req, res) => {
	con.query("SELECT * FROM profiles", function (err, result, fields) {
	if (err){
      console.log('could not get profiles');
      throw err; 
    }	
	res.send(pringJSON(result));
	});
});

// get one row by user name (un)
router.get('/api/profiles/:un', async (req, res) => {
	con.query(`SELECT * FROM profiles where userName = ${req.params.un}`,
	 function (err, result, fields) {
		if (err) throw err; 
		res.send(pringJSON(result));
	});
});

//should change the id and the date.
router.post('/api/profiles/:n/:un/:p/:e/:fb/:ins/:lind/:o',
 async (req, res) => {
	var val = req.params;
	console.log(val);
	for(i in val){
		console.log(i,val[i]);
	}

	con.query("INSERT INTO profiles (name,userName,password,email,\
		linkToFacebook,linkToInstegram,linkToLinkedIn,otherLink) VALUES (?)",
		 [val['n'],val['un'],val['p'],val['e'],val['fb'],val['ins'],
		 val['lind'],val['o']],function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
	
});





function pringJSON(json){
	var str = "";
	for(i in json){
		str += JSON.stringify(json[i], null, 2) + '\n';
	}
	return str;
}


module.exports = router;