const Weight = require('../models/models');
exports.getdefault=function(req, res){
	res.send('You are on the root route.');
};
//
exports.aboutus=function(req, res){
	res.send('You are on the about us route.');
};
//
exports.products=function(req, res){
	res.send('You are viewing product # ' + req.params.productID);
};
//
exports.getallrecords=function(request, response){
	Weight.find({}, function(err, getallrecords){
		if (err)
			response.end(err);
		response.json(getallrecords);
	});
	//res.send('You are on the getallrecords route.');
};
//
exports.getbyname = function(req, res) {
  MISSING_CODE1{
    if (err)
      res.send(err);
    res.json(getByName);
  });
};
//
exports.deletebyname = function(req, res) {
  let delName = req.params.byname;
  MISSING_CODE2 {
    if (err)
      res.send(err);
    res.end(`Deleted ${delName}`);
  });
};
//
exports.putnewdoc = function(req,res){
	let empName = req.body.empName;
	let empWeight = req.body.empWeight;
	const weight = new Weight();
	weight.empName = empName;
	weight.empWeight = empWeight;
	MISSING_CODE3 {
		if (err)
			res.end(err);
		res.end(`Created ${empName} result ${JSON.stringify(result._id)}`);
  });
};
//
exports.updatedoc = function(req,res){
	let fixName = req.body.fixname;
	let newWeight = req.body.newweight;
	var query = { empName : fixName };
	var data = { $set : {empWeight : newWeight } }
	MISSING_CODE4 {
		if (err)
			res.send(err);
		res.end(`Updated ${fixName} result ${JSON.stringify(obj.nModified)}`);
  });
};

