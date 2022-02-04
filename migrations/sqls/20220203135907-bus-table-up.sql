/* Replace with your SQL commands */

CREATE TABLE bus (
id serial PRIMARY KEY,
plate_number VARCHAR NOT NULL,
manufacturer VARCHAR NOT NULL,
model VARCHAR NOT NULL,
year integer NOT NULL,
capacity VARCHAR NOT NULL,
created_at TIMESTAMPTZ DEFAULT NOW(),
updated_at TIMESTAMPTZ DEFAULT NOW()
);