var middleware = {
	requireAuthentication: function(req,res,next){
		console.log('private info');
		next();
	},
	logger:function(req,res,next){
     console.log('Requested to '+ new Date().toString() + ' ' +req.method + ' ' + req.originalUrl);
     next();
	}
};
module.exports = middleware;