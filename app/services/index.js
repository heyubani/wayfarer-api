/* eslint-disable */
/* eslint-disable camelcase */
/* eslint-disable import/named */
/* eslint-disable consistent-return */
import hashPassword from '../utils/index';
import db from '../db/setup/connection';
import query from '../query';
import dayjs from 'dayjs';

const createUser = async (body) => {
  const { firstname, lastname, gender, email, password, is_admin, contact } =
    body;
  const encryptedPassword = await hashPassword(password);
  const payload = [
    firstname,
    lastname,
    gender,
    email,
    encryptedPassword,
    false,
    contact,
  ];
  return db.any(query.createNewUser, payload);
};

const checkUserExist = (email) => db.any(query.checkUserExit, email);

const signInUser = (email) => {
  const payload = [email];
  return db.any(query.signIn, payload);
};

const buses = (body) => {
  const { plate_number, manufacturer, model, year, capacity } = body;
  const payload = [plate_number, manufacturer, model, year, capacity];
  return db.any(query.createBus, payload);
};

const getBus = (id) => db.any(query.getBusById, id);

const trip = (body) => {
  const { origin, destination, trip_date, fare, status, busId} = body;
  const tripTime = new Date().toLocaleString();
  const payload = [origin, destination, tripTime, fare, 'active', busId];
  return db.any(query.createTrips, payload);
};

const updateBus = (id, capacity) => {
  return db.any(query.updateBus, [capacity, id]);
};

// eslint-disable-next-line import/prefer-default-export
export {
  createUser,
  checkUserExist,
  signInUser,
  buses,
  trip,
  getBus,
  updateBus,
};
