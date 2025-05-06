import express from 'express';

import {
    allAccess,
    userBoard,
    adminBoard,
    moderatorBoard,
} from '../controllers/user.controller.js';

import {
    verifyToken,
    isAdmin
} from '../middlewares/authJwt.js';
const router = express.Router();

router.get('/all', allAccess);
router.get('/user', [verifyToken], userBoard);
router.get('/admin', [verifyToken, isAdmin], adminBoard);

export default router;