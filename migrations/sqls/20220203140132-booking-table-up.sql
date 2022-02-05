/* Replace with your SQL commands */

CREATE TABLE booking (
id serial unique PRIMARY KEY,
userid BIGINT REFERENCES users(id)
 ON DELETE CASCADE,
bus_id BIGINT REFERENCES bus(id)
 ON DELETE CASCADE,
trips_id BIGINT REFERENCES trips(id)
 ON DELETE CASCADE,
trip_date VARCHAR,
seat_number VARCHAR NOT NULL,
created_at TIMESTAMPTZ DEFAULT NOW(),
updated_at TIMESTAMPTZ DEFAULT NOW()
);