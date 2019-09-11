var express = require('express');
var User = require('../models');
var router = express.Router();
const bcrypt = require('bcrypt');

router.get('/', function(req, res, next) {

    res.render('Signup');
});

router.post('/', function(req, res, next) {

    if(User.find({name : req.body.groupName}).length != 0) {
			res.send('user not found');
		}
	else

	var _mem0 = req.body.mem0; 
	//if(typeof(req.body.mem1) != 'undefined')
	//	var _mem1 = req.body.groupName;
	//if(typeof(req.body.mem2) != 'undefined')
	//	var _mem2 = req.body.groupName;
	var hasedpass = bcrypt.hashSync(req.body.gppassword, 10);

	var new_user = User({
		name : req.body.groupName,
		pass : hashedpass,
		//mem0 : _mem0her
		//mem1 : _mem1,
		//mem2:_mem2
	});
    
    new_user.save(function (err) {
        if (err) return handleError(err);
        // saved!
      });
    //res.redirect("/");
});

module.exports = router;
 