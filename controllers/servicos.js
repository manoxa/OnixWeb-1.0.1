module.exports = function(app){

	var ServicoController = {
		index: function(req, res){
			res.render('servicos/index');
		}
	}

	return ServicoController;
}