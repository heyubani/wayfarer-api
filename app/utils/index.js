import bcrypt from 'bcryptjs';
import bluebird from 'bluebird';

bluebird.config();

const hashPassword = (password) => {
  const encryptedPassword = bcrypt.hash(password, 10);
  return encryptedPassword;
};

export default hashPassword;
