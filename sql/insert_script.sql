INSERT INTO currency (Id, code, description) VALUES (1,'USD', '$');
INSERT INTO currency (Id, code, description) VALUES (2, 'EUR', '€');
INSERT INTO currency (Id, code, description) VALUES (3, 'GBP', '£');
-- NTO currency (exchange_rate) VALUES ('ZAR = R 1');


/*Transactions INSERT */
-- INSERT INTO transaction (id, description, exchange_rate, currency_amount) VALUES(1);

insert into transaction (currency_id, descriptions, exchange_rate, currency_amount) VALUES (1, '$', 'R', 'R10');

	
