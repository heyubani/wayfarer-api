/* eslint-disable  */
import { Router } from 'express';
import { createAccount, signIn, bus, createTrip} from '../../controllers';
import { checkExistingUser, authenticateToken, authenticateIsAdmin } from '../../middlewares';

const router = Router();

router.get('/', (req, res) => {
  res
    .status(200)
    .json({ status: 'success', code: 200, message: 'We outside!' });
});

router.post('/signup', checkExistingUser, createAccount);
router.post('/signin', signIn);
router.post('/bus',authenticateToken, authenticateIsAdmin, bus);
router.post('/trip',authenticateToken, createTrip);

export default router;
