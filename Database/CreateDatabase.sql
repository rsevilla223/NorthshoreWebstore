
DROP TABLE Customers;
DROP TABLE Products;
DROP TABLE Inventory;
DROP TABLE Orders;

create database if not exists NorthshoreWebstore;

CREATE TABLE if not exists NorthshoreWebstore.Customers (
	id bigint AUTO_INCREMENT,
	firstname varchar(30),
	lastname varchar(30),
	PRIMARY KEY(id)
);

CREATE TABLE if not exists NorthshoreWebstore.Products (
	productId bigint,
	productName varchar(30),
	category varchar(30),
	manufacturer varchar(30),
	PRIMARY KEY(productId)
);

CREATE TABLE if not exists NorthshoreWebstore.Inventory (
	productId bigint,
	inventory bigint,
	PRIMARY KEY(productId)
);

CREATE TABLE if not exists NorthshoreWebstore.Orders (
	orderId bigint AUTO_INCREMENT,
	customerId int,
	productId int,
	quantity int,
	PRIMARY KEY(orderId)
);

INSERT INTO Customers (firstname, lastname) VALUES ('Ryan', 'Sevilla');
INSERT INTO Customers (firstname, lastname) VALUES ('George', 'Washington');
INSERT INTO Customers (firstname, lastname) VALUES ('Michael', 'Jordan');
INSERT INTO Customers (firstname, lastname) VALUES ('Anthony', 'Rizzo');

INSERT INTO Products (productId, productName, category, manufacturer) VALUES (8675309, 'Skittles', 'candy', 'Wonka');
INSERT INTO Products (productId, productName, category, manufacturer) VALUES (8675308, 'Spree', 'candy', 'Nestle');
INSERT INTO Products (productId, productName, category, manufacturer) VALUES (8675307, 'Jolly Ranchers', 'candy', 'Mars');
INSERT INTO Products (productId, productName, category, manufacturer) VALUES (8675306, 'Gummy worms', 'candy', 'Black Forest');

INSERT INTO Inventory (productId, inventory) VALUES (8675309, 28);
INSERT INTO Inventory (productId, inventory) VALUES (8675308, 26);
INSERT INTO Inventory (productId, inventory) VALUES (8675307, 13);
INSERT INTO Inventory (productId, inventory) VALUES (8675306, 53);

INSERT INTO Orders (orderId, customerId, productId, quantity) VALUES (1, 2, 8675308, 24);
INSERT INTO Orders (orderId, customerId, productId, quantity) VALUES (3, 2, 8675307, 38);
INSERT INTO Orders (orderId, customerId, productId, quantity) VALUES (2, 3, 8675306, 36);
