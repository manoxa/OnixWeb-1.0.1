module.exports = function(app){

	var servico = app.controllers.servicos;
		app.route('/servicos').get(servico.index);
}