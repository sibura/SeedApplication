CREATE TABLE transaction
(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  currency_id int NOT NULL,
  descriptions VARCHAR(1) NOT NULL,
  exchange_rate DECIMAL(15,6),
  currency_amount int,
  date date,
  FOREIGN KEY (currency_id) REFERENCES currency(id)
);