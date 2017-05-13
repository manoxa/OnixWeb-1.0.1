module.exports = function(app){

	var index = app.controllers.index;
		app.route('/index').get(index.index);
}