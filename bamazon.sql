DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;

-- Make it so all of the following code will affect bamazon_db --
USE bamazon_db;

-- create a table called products -- 
-- item_id (unique id for each product)
-- product_name (Name of product)
-- department_name
-- price (cost to customer)
-- stock_quantity (how much of the product is available in stores)

CREATE TABLE products (
  item_id INT NOT NULL auto_increment,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity int NULL,
  PRIMARY KEY (item_id)
);


-- Create new rows containing data in all named columns --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tent", "Camping and Hiking", 130, 100),
("Backpack", "Camping and Hiking", 140, 200),
("Sleeping Bag", "Camping and Hiking", 100, 300),
("Camp Kitchen", "Camping and Hiking", 80, 100),
("Shoes", "Footwear", 130, 100),
("Boots", "Footwear", 150, 100),
("Sandals", "Footwear", 90, 100),
("Socks", "Footwear", 30, 100),
("Men's Jacket", "Men's Clothing", 130, 100),
("Men's Pants", "Men's Clothing", 80, 100), 
("Men's Shorts", "Men's Clothing", 50, 100),
("Men's Shirt", "Men's Clothing", 40, 100), 
("Women's Jacket", "Women's Clothing", 130, 100),
("Women's Pants", "Women's Clothing", 80, 100),
("Women's Shorts", "Women's Clothing", 50, 100),
("Women's Shirt", "Women's Clothing", 40, 100),
("Kayak", "Paddling", 230, 10),
("Canoe", "Paddling", 330, 10),
("Paddles", "Paddling", 80, 100),
("Climbing Ropes", "Climbing", 70, 100),
("Climbing Harness", "Climbing", 130, 100),
("Climbing Shoes", "Climbing", 150, 100) 
