import React from 'react'
import TableAbout from '../components/TableAbout'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const AboutListScreen = ({ isOpen, toggle }) => {

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <TableAbout/>
        </>
    )
}

export default AboutListScreen
