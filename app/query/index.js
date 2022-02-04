export default {
  createNewUser: `
    INSERT INTO users(
        firstname,
        lastname,
        gender,
        email,
        password,
        is_admin,
        contact
    ) VALUES($1, $2, $3, $4, $5, $6, $7)
     RETURNING *
    `,
  checkUserExit: `
    SELECT * FROM users WHERE email=$1
    `,
  signIn: `
  SELECT * FROM users WHERE email=$1
`,
  createBus: `
INSERT INTO bus (
  plate_number,
  manufacturer,
  model,
  year,
  capacity
) VALUES($1, $2, $3, $4, $5)
RETURNING *
`,
  createTrips: `
INSERT INTO trips (
origin,
destination,
trip_date,
fare,
status,
bus_id 
) VALUES($1, $2, $3, $4, $5, $6)
  RETURNING *
`,
  getBusById: `
 SELECT * FROM bus WHERE id=$1
`,
  updateBus: `
    UPDATE bus
    SET capacity=$1
    WHERE id=$2
    RETURNING *
    `,
};
