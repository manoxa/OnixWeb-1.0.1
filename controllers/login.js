module.exports = function(app){

	var IndexController = {
		login: function(req, res){
			res.render('login/login');
		}
	}

	return IndexController;
}	