-- setup.sql

-- Create the database
CREATE DATABASE farmers_db;

-- Connect to the database
\c farmers_db;

-- Create the table
CREATE TABLE farmers (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(15) NOT NULL,
  age INT NOT NULL,
  address VARCHAR(255) NOT NULL,
  crops TEXT NOT NULL
);
