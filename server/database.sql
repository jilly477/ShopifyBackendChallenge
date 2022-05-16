CREATE DATABASE shopify;
\c shopify;
CREATE TABLE inventory(
    id SERIAL PRIMARY KEY,
    item_name VARCHAR(500) NOT NULL,
    description VARCHAR(500) NOT NULL,
    amount BIGINT NOT NULL
);