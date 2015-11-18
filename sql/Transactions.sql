CREATE TABLE transaction
(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  currency_id int NOT NULL,
  descriptions VARCHAR(1) NOT NULL,
  exchange_rate int,
  currency_amount int,
  FOREIGN KEY (currency_id) REFERENCES currency(id)
);