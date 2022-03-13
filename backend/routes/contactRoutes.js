import express from 'express'
const router = express.Router()
import {
    getContacts,
    getContactById,
    deleteContact,
    createContact,
} from '../controllers/contactController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getContacts).post(createContact)
router
    .route('/:id')
    .get(getContactById)
    .delete(protect, admin, deleteContact)

export default router