CREATE DATABASE shopify;
\c shopify;


CREATE TABLE locations(
    id SERIAL,
    location VARCHAR(500) PRIMARY KEY NOT NULL
);

CREATE TABLE inventory(
    id SERIAL PRIMARY KEY,
    item_name VARCHAR(500) NOT NULL,
    description VARCHAR(500) NOT NULL,
    amount BIGINT NOT NULL,
    location VARCHAR(500) REFERENCES locations(location)
);
