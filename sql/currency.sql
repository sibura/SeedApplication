CREATE TABLE currency 
(
Id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
currency_code VARCHAR(3) NOT NULL,
description VARCHAR(1) NOT NULL,
exchange_rate decimal(5,2)
);

INSERT INTO currency (Id, currency_code, description, exchange_rate) VALUES (1,'USD', '$', "R");
INSERT INTO currency (Id, currency_code, description, exchange_rate) VALUES (2, 'EUR', '€', "R");
INSERT INTO currency (Id, currency_code, description, exchange_rate) VALUES (3, 'GBP', '£', "R");
