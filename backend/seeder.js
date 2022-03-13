import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

import users from './data/users.js'
import abouts from './data/abouts.js'
import services from './data/services.js'


import User from './models/userModel.js'
import About from './models/aboutModel.js'
import Service from './models/serviceModel.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await About.deleteMany()
        await User.deleteMany()
        await Service.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleAbout = abouts.map(about => {
            return { ...about, user: adminUser }
        })
        const sampleService = services.map(service => {
            return { ...service, user: adminUser }
        })
        await About.insertMany(sampleAbout)
        await Service.insertMany(sampleService)
        console.log('Data imported'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}


const destroyData = async () => {
    try {
        await About.deleteMany()
        await Service.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}