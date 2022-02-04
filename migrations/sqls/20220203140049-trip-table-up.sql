/* Replace with your SQL commands */

CREATE TABLE trips (
id serial UNIQUE PRIMARY KEY,
bus_id INT REFERENCES bus_id(id) ON DELETE CASCADE,
origin VARCHAR NOT NULL,
destination VARCHAR NOT NULL,
trip_date VARCHAR NOT NULL,
fare VARCHAR NOT NULL,
status VARCHAR,
created_at TIMESTAMPTZ DEFAULT NOW(),
updated_at TIMESTAMPTZ DEFAULT NOW()
);