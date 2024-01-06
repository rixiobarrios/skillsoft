module.exports = function(app){
	let controller = require('../controllers/controller');
	app.route('/').get(controller.getdefault);
	app.route('/aboutus').get(controller.aboutus);
	app.route('/products/:productID').get(controller.products);
	app.route('/getallrecords').get(controller.getallrecords);
	app.route('/getbyname/:byname').get(controller.getbyname);
	app.route('/deletebyname/:byname').delete(controller.deletebyname);
	app.route('/putdoc').post(controller.putnewdoc);
	app.route('/updatedoc').put(controller.updatedoc);

};