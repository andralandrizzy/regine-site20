import asyncHandler from 'express-async-handler'
import About from '../models/aboutModel.js'

// @desc    Fetch all abouts
// @route   GET /api/abouts
// @access  Public
const getAbouts = asyncHandler(async (req, res) => {
    // const pageSize = 10
    // const page = Number(req.query.pageNumber) || 1

    // const keyword = req.query.keyword
    //     ? {
    //         name: {
    //             $regex: req.query.keyword,
    //             $options: 'i',
    //         },
    //     }
    //     : {}

    // const count = await About.countDocuments({ ...keyword })
    const abouts = await About.find()

    res.json({ abouts})
})

// @desc    Fetch single about
// @route   GET /api/abouts/:id
// @access  Public
const getAboutById = asyncHandler(async (req, res) => {
    const about = await About.findById(req.params.id)

    if (about) {
        res.json(about)
    } else {
        res.status(404)
        throw new Error('About content not found')
    }
})

// @desc    Delete an about
// @route   DELETE /api/about/:id
// @access  Private/Admin
const deleteAbout = asyncHandler(async (req, res) => {
    const about = await About.findById(req.params.id)

    if (about) {
        await about.remove()
        res.json({ message: 'About was removed' })
    } else {
        res.status(404)
        throw new Error('About not found')
    }
})

// @desc    Create an About
// @route   POST /api/abouts
// @access  Private/Admin
const createAbout = asyncHandler(async (req, res) => {
    const about = new About({
        title: 'Sample about',
        description: 'Sample about description',
    })

    const createdAbout = await about.save()
    res.status(201).json(createdAbout)
})

// @desc    Update an about
// @route   PUT /api/about/:id
// @access  Private/Admin
const updateAbout = asyncHandler(async (req, res) => {
    const {
        title,
        description,
    } = req.body

    const about = await About.findById(req.params.id)

    if (about) {
        about.title = title
        about.description = description

        const updatedAbout= await about.save()
        res.json(updatedAbout)
    } else {
        res.status(404)
        throw new Error('About not found')
    }
})



// @desc    Get homepage about
// @route   GET /api/abouts/home
// @access  Public
const getHomeAbouts = asyncHandler(async (req, res) => {
    const abouts = await About.find({}).limit(3)

    res.json(abouts)
})

export {
    getAbouts,
    getAboutById,
    deleteAbout,
    createAbout,
    updateAbout,
    getHomeAbouts,
}
