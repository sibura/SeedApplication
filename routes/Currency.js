exports.currencies = function(req, res, next){
	req.getConnection(function(error, connection){
		if(error){
			return next(error);
		}

		connection.query('SELECT * from currency;', [], function(error, results) {
			if (error) {
				return next(error);
			}
			//console.log(results);
			res.render('currencie', {
				currencie : results
			});
		});
	});		
};

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err){ 
			return next(err);
		}
		
		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
			currency_code : input.currency_code,
			description : description
		};
		connection.query('insert into currency set ?', data, function(err, results) {
			if (err)
				console.log("Error inserting : %s ",err );

			res.redirect('/currenc');
		});
	});
};

exports.get = function(req, res, next){
	var id = req.params.Id;
	req.getConnection(function(err, connection){
		connection.query('SELECT description  FROM currency WHERE Id = ?', [id], function(err,rows){
			if(err){
				console.log("Error Selecting : %s ",err );
			}
			res.render('currencyEdit',{page_title:"Edit Customers - Node.js", data : rows[0]});      
		}); 
	});
};

exports.update = function(req, res, next){

	var data = JSON.parse(JSON.stringify(req.body));
	var id = req.params.Id;
	req.getConnection(function(err, connection){
		connection.query('UPDATE currency SET ? WHERE Id = ?', [data, id], function(err, rows){
			if (err){
				console.log("Error Updating : %s ",err );
			}
			res.redirect('/currenc');
		});

	});
};

exports.delete = function(req, res, next){
	var id = req.params.Id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM currency WHERE Id = ?', [id], function(err,rows){
			if(err){
				console.log("Error Selecting : %s ",err );
			}
			res.redirect('/currenc');
		});
	});
};