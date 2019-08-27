-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS crm_db;

-- Creates the "blogger" database --
CREATE DATABASE crm_db;
USE crm_db;

-- Create table
CREATE TABLE client_data(
    id INT NOT NULL AUTO_INCREMENT,
    client_name VARCHAR(100) NOT NULL,
    client_address VARCHAR(100) NOT NULL,
    client_state VARCHAR(40) NOT NULL,
    client_email VARCHAR(100) NULL,
    client_phone VARCHAR(10) NULL,
    contact_name VARCHAR(100) NULL,
    client_priority VARCHAR(20) NOT NULL,
    client_value INT NOT NULL,
    PRIMARY KEY (id) 
);