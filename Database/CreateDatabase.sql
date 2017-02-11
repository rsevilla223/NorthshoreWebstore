
DROP TABLE Customers;
DROP TABLE Products;
DROP TABLE Inventory;
DROP TABLE Orders;
DROP TABLE Manufacturers;

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
	productId int,
	quantity int,
	PRIMARY KEY(orderId)
);

CREATE TABLE if not exists NorthshoreWebstore.Manufacturers (
	manName varchar(30),
	manId bigint,
	PRIMARY KEY (manId)
);
