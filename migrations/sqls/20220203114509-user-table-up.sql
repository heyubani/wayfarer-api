/* Replace with your SQL commands */

CREATE TABLE users (
id serial unique PRIMARY KEY,
firstname VARCHAR NOT NULL,
lastname VARCHAR NOT NULL,
gender VARCHAR NOT NULL,
email VARCHAR NOT NULL,
password VARCHAR NOT NULL,
is_admin BOOLEAN,
contact VARCHAR,
created_at TIMESTAMPTZ DEFAULT NOW(),
updated_at TIMESTAMPTZ DEFAULT NOW()
);