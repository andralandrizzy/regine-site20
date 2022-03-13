import asyncHandler from 'express-async-handler'
import Contact from '../models/contactModel.js'


// @Desc    Get all Contacts
// @route   GET /api/contacts
// @Access  Private/Admin

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({})
    res.json({contacts})
})


// @desc    Create a Contact
// @route   POST /api/contacts
// @access  Public

const createContact = asyncHandler(async (req, res) => {
    const { name, email, subject, text_message } = req.body

    const contact = await Contact.create({
        name,
        email,
        subject,
        text_message,
    })

    if (contact) {
        res.status(201).json({
            _id: contact._id,
            name: contact.name,
            email: contact.email,
            subject: contact.subject,
            text_message: contact.text_message,
        })
    } else {
        res.status(400)
        throw new Error('Invalid Contact data')
    }
})

// @desc    Get contact by ID
// @route   GET /api/contacts/:id
// @access  Private
const getContactById = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)

    if (contact) {
        res.json(contact)
    } else {
        res.status(404)
        throw new Error('Contact content not found')
    }
})


// // @desc    Get contact content
// // @route   GET /api/contact
// // @access  Private/Admin
// const getContact = asyncHandler(async (req, res) => {
//     const contact = await Contact.find({}).populate('user', 'id email')
//     res.json(contact)
// })


// @desc    Delete contact
// @route   DELETE /api/contact/:id
// @access  Private/Admin
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)

    if (contact) {
        await contact.remove()
        res.json({ message: 'Contact message was removed' })
    } else {
        res.status(404)
        throw new Error('Contact message not found')
    }
})

export {
    getContactById,
    getContacts,
    deleteContact,
    createContact,
}
