exports.transact = function(req, res, next){
	req.getConnection(function(error, connection){
		if(error){
			return next(error);
		}
//SELECT transaction.currency_amount, transaction.currency_id  from transaction, currency where transaction.currency_id = currency.id
		connection.query('SELECT transaction.currency_amount, transaction.currency_id,currency.exchange_rate,transaction.exchange_rate, currency.description, transaction.descriptions  from transaction, currency where transaction.currency_id = currency.id;', [], function(error, results) {
			if (error) {
				return next(error);
			}
		  connection.query('SELECT * FROM currency', [], function(error, results1) {
			if (error) return next(error);
			//console.log(results);
			res.render('transactions', {
				transact : results,
				currency : results1
			});
			});
			});
		});	
	}; 

exports.ShowAdd =function(req, res, next){
	req.getConnection(function(error, connection){
		if(error) return next(error);

		connection.query('SELECT * from transaction;', [], function(error, results) {
			if (error) return next(error);
				connection.query('SELECT * FROM currency', [], function(error, results1) {
			if (error) return next(error);	   
				res.render( 'addTransact', {
					transact : results,
					currency : results1
			});
			});
			});
		});	
	}; 

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err){ 
			return next(err);
		}
		
		var input = req.body;
		var data = {
			currency_amount : input.currency_amount,
			currency_id : input.currency_id,
			exchange_rate : input.exchange_rate,
			//description : input.description,
			//descriptions : input.descriptions
		};
		console.log("......" + data)
		connection.query('insert into transaction set ?', data, function(err, results) {
			if (err)
				console.log("Error inserting : %s ",err );

			res.redirect('/trans');
		});
	});
};

exports.get = function(req, res, next){
	var id = req.params.Id;
	req.getConnection(function(err, connection){
		connection.query('SELECT *  FROM transaction WHERE Id = ?', [id], function(err,rows){
			if(err){
				console.log("Error Selecting : %s ",err );
			}
			res.render('transactionEdit',{page_title:"Edit Customers - Node.js", data : rows[0]});      
		}); 
	});
};

exports.update = function(req, res, next){

	var data = JSON.parse(JSON.stringify(req.body));
	var id = req.params.Id;
	req.getConnection(function(err, connection){
		connection.query('UPDATE transaction SET ? WHERE Id = ?', [data, id], function(err, rows){
			if (err){
				console.log("Error Updating : %s ",err );
			}
			res.redirect('/trans');
		});

	});
};

exports.delete = function(req, res, next){
	var id = req.params.Id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM transaction WHERE id = ?', [id], function(err,rows){
			if(err){
				console.log("Error Selecting : %s ",err );
			}
			res.redirect('/trans');
		});
	});
};