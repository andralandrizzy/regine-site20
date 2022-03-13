import asyncHandler from 'express-async-handler'
import Service from '../models/serviceModel.js'

// @desc    Fetch all services
// @route   GET /api/services
// @access  Public
const getServices = asyncHandler(async (req, res) => {
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

    // const count = await Service.countDocuments({ ...keyword })
    const services = await Service.find()

    res.json({ services})
})

// @desc    Fetch single service
// @route   GET /api/services/:id
// @access  Public
const getServiceById = asyncHandler(async (req, res) => {
    const service = await Service.findById(req.params.id)

    if (service) {
        res.json(service)
    } else {
        res.status(404)
        throw new Error('Service content not found')
    }
})

// @desc    Delete an service
// @route   DELETE /api/service/:id
// @access  Private/Admin
const deleteService = asyncHandler(async (req, res) => {
    const service = await Service.findById(req.params.id)

    if (service) {
        await service.remove()
        res.json({ message: 'Service was removed' })
    } else {
        res.status(404)
        throw new Error('Service not found')
    }
})

// @desc    Create a service
// @route   POST /api/services
// @access  Private/Admin
const createService = asyncHandler(async (req, res) => {
    const service = new Service({
        title: 'Sample service title',
        image: '/images/serviceSample.jpg',
        description: 'Sample service description',
    })

    const createdService = await service.save()
    res.status(201).json(createdService)
})

// @desc    Update a Service
// @route   PUT /api/service/:id
// @access  Private/Admin
const updateService = asyncHandler(async (req, res) => {
    const {
        title,
        image,
        description,
    } = req.body

    const service = await Service.findById(req.params.id)

    if (service) {
        service.title = title
        service.description = description
        service.image = image
        
        const updatedService = await service.save()
        res.json(updatedService)
    } else {
        res.status(404)
        throw new Error('service not found')
    }
})



// @desc    Get homepage service
// @route   GET /api/service/home
// @access  Public
const getHomeServices = asyncHandler(async (req, res) => {
    const services = await Service.find({}).limit(6)

    res.json(services)
})

export {
    getServices,
    getServiceById,
    deleteService,
    createService,
    updateService,
    getHomeServices,
}
