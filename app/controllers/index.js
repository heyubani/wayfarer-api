/* eslint-disable  */
import dotenv from 'dotenv';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/env';
import { response, Success, Error } from '../utils/helpers/response.helpers';
import {
  createUser,
  signInUser,
  buses,
  trip,
  getBus,
  updateBus,
} from '../services';

dotenv.config();

const createAccount = async (req, res, next) => {
  try {
    const newUser = await createUser(req.body);
    if (newUser) {
      const success = Success(201, 'user created account', newUser);
      return response(res, success);
    }
    const error = Error(402, 'invalid details');
    return response(res, error);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const users = await signInUser(email);
    const { password: pwd, id, is_admin, ...user } = users[0];
    const passwordIsValid = bcryptjs.compareSync(password, pwd);
    if (passwordIsValid) {
      const payload = { id, is_admin, email };
      const token = jwt.sign(payload, config.SECRET_KEY, {
        expiresIn: '1d',
      });
      req.token = token;
      const success = Success(200, 'user authenticated', {
        id,
        is_admin,
        ...user,
        token,
      });
      return response(res, success);
    }
    const error = Error(402, 'invalid user details');
    return response(res, error);
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};

const bus = async (req, res, next) => {
  try {
    const data = await buses(req.body);
    if (data) {
      const success = Success(200, 'admin created bus', data);
      return response(res, success);
    }
    const error = Error(500, 'invalid user details');
    return response(res, error);
  } catch (error) {
    logger.error(error.message);
    next(error);
  }
};

const createTrip = async (req, res, next) => {
  try {
    const { busId } = req.query;
    if (busId) {
      const bus = await getBus(busId);
      const { capacity } = bus[0];
      const trips = await trip({ ...req.body, busId });
      if (capacity && capacity > 0) {
        const a = await updateBus(busId, capacity - 1);
        const success = Success(200, 'admin created bus', trips);
        return response(res, success);
      } else {
        const error = Error(400, 'Bus not available');
        return response(res, error);
      }
    }
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
// eslint-disable-next-line import/prefer-default-export
export { createAccount, signIn, bus, createTrip };
