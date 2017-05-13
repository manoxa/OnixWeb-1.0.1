module.exports = function(app){

	var cadastro = app.controllers.cadastro;
		app.route('/cadastro').get(cadastro.index);
}