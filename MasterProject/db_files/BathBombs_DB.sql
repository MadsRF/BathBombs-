CREATE DATABASE IF NOT exists BathBombs_DB;
USE BathBombs_DB;

CREATE TABLE customers(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
firstname varchar(30) NOT NULL,
lastname varchar(30) NOT NULL,
address varchar(30) NOT NULL,
postal_code varchar(30) NOT NULL,
city varchar(30) NOT NULL,
country varchar(30) NOT NULL,
email varchar(50) NOT NULL, 
tlf varchar(20)
);

INSERT INTO customers VALUES(default, "mads", "hansen", "håndvej", "2450", "KBH", "Denmark","mads@mads.dk", "12345678");

CREATE TABLE users(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
firstname varchar(30) NOT NULL,
lastname varchar(30),
address varchar(30),
postal varchar(30),
city varchar(30),
country varchar(30), 
email varchar(50) NOT NULL, 
tlf varchar(20),
username varchar(30) NOT NULL UNIQUE,
password varchar(30) NOT NULL,
fk_customer_id int NOT NULL, 

FOREIGN KEY(fk_customer_id)references customers(id)
);

INSERT INTO users VALUES(default, "kasper", "kaspersen", "håndvej", "2500", "KBH SV", "Denmark","KASPER@mads.dk", "99999999", "Teletubi", "1234", "1");


CREATE TABLE products(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
name varchar(50) NOT NULL,
price decimal(10,2) NOT NULL,  
description varchar(250) NOT NULL,
category varchar(50) NOT NULL
); 

INSERT INTO products VALUES(DEFAULT, "BATHBOMB", "100", "this is a bathbomb!", "bathbomb");
INSERT INTO products VALUES(DEFAULT, "BATHBOMB", "800", "this is a bathbomb!", "bathbomb");
INSERT INTO products VALUES(DEFAULT, "BATHBOMB", "600", "this is a bathbomb!", "bathbomb");
INSERT INTO products VALUES(DEFAULT, "BATHBOMB", "400", "this is a bathbomb!", "bathbomb");
INSERT INTO products VALUES(DEFAULT, "BATHBOMB", "200", "this is a bathbomb!", "bathbomb");
INSERT INTO products VALUES(DEFAULT, "BATHBOMB", "250", "this is a bathbomb!", "bathbomb");
INSERT INTO products VALUES(DEFAULT, "BATHBOMB", "350", "this is a bathbomb!", "bathbomb");
INSERT INTO products VALUES(DEFAULT, "BATHBOMB", "450", "this is a bathbomb!", "bathbomb");
INSERT INTO products VALUES(DEFAULT, "BATHBOMB", "666", "this is a bathbomb!", "bathbomb");
INSERT INTO products VALUES(DEFAULT, "BATHBOMB", "6969", "this is a bathbomb!", "bathbomb");

CREATE TABLE owner(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
username varchar(30) NOT NULL UNIQUE,
password varchar(30) NOT NULL
);

INSERT INTO owner VALUES(DEFAULT, "admin", "pass");
