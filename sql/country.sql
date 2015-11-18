CREATE TABLE countries (
`id_countries` int(3) unsigned NOT NULL AUTO_INCREMENT,
`name` varchar(200) DEFAULT NULL,
`iso_alpha2` varchar(2) DEFAULT NULL,
`iso_alpha3` varchar(3) DEFAULT NULL,
`iso_numeric` int(11) DEFAULT NULL,
`currency_code` char(3) DEFAULT NULL,
`currency_name` varchar(32) DEFAULT NULL,
`currrency_symbol` varchar(3) DEFAULT NULL,
`flag` varchar(6) DEFAULT NULL,
PRIMARY KEY (`id_countries`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=240;

CREATE TABLE 
(
  Id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  product_Id int NOT NULL,
  date text,
  sale_price int,
  no_sold int,
  FOREIGN KEY (product_Id) REFERENCES products(Id)
);