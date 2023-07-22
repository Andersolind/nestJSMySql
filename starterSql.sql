CREATE DATABASE jsMysql CHARACTER SET utf8 COLLATE utf8_general_ci;
USE jsMysql;

CREATE TABLE customers (
    id INT(11) NOT NULL AUTO_INCREMENT,
    invoiceNumber VARCHAR(50),
    fullName VARCHAR(50),
    email VARCHAR(50),
    street VARCHAR(50),
    address VARCHAR(50),
    postalCode VARCHAR(50),
    vehicle VARCHAR(50),
    make VARCHAR(50),
    model VARCHAR(50),
    year VARCHAR(50),
    mileage VARCHAR(50),
    price VARCHAR(50),
    total VARCHAR(50),
    dateOfService DATETIME,
    PRIMARY KEY (id)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8 AUTO_INCREMENT=5;

customers_entityINSERT INTO customers (id,invoiceNumber, fullName, email,street,address,postalCode,vehicle,make,model,year,mileage,price,total,dateOfService) VALUES
(1, '100011', 'Anders','andersolind@gmail.com','90','George street','m8v2s4','subaru','wrx','STI','2020','100000','2000','40000','2023-01-23 12:45:56')

select * from customers