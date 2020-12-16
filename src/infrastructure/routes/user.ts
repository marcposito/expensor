import { Router } from 'express';

import controllers from '../controllers/user';


const router = Router();

router.route('/')
    .post(controllers.createUser);


export default router;