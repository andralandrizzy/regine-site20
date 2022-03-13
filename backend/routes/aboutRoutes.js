import express from 'express'
const router = express.Router()
import {
    getAbouts,
    getAboutById,
    deleteAbout,
    createAbout,
    updateAbout,
    getHomeAbouts,
} from '../controllers/aboutController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getAbouts).post(protect, admin, createAbout)
router.get('/home', getHomeAbouts)
router
    .route('/:id')
    .get(getAboutById)
    .delete(protect, admin, deleteAbout)
    .put(protect, admin, updateAbout)

export default router
