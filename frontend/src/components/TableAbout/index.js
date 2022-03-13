import React, { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import {
    listAbouts,
    deleteAbout,
    createAbout,
} from '../../actions/aboutActions'
import { ABOUT_CREATE_RESET } from '../../constants/aboutConstants'
import {Table} from 'react-bootstrap'
import { TableAboutContainer, TableHeading, IconPlus, HeadingWrap, PlusIconLink, AboutDeleteBtn, AboutEditBtn } from './TableAboutElements'
import { DeleteIcon, EditIcon } from '../../screens/UserListScreen/UserListScreenElements'

const TableAbout = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const aboutList = useSelector((state) => state.aboutList)
    const { loading, error, abouts  } = aboutList

    const aboutDelete = useSelector((state) => state.aboutDelete)
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = aboutDelete

    const aboutCreate = useSelector((state) => state.aboutCreate)
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        about: createdAbout,
    } = aboutCreate

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch({ type: ABOUT_CREATE_RESET })

        if (!userInfo || !userInfo.isAdmin) {
            navigate('/login')
        }

        if (successCreate) {
            navigate(`/admin/about/${createdAbout._id}/edit`)
        } else {
            dispatch(listAbouts(''))
        }
    }, [
        dispatch,
        navigate,
        userInfo,
        successDelete,
        successCreate,
        createdAbout,
    ])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteAbout(id))
        }
    }

    const createAboutHandler = () => {
        dispatch(createAbout())
        toast.success("About sample was created. you can edit it")
    }
    return (
    <>
    <TableAboutContainer>
        <HeadingWrap><TableHeading>About Content </TableHeading><PlusIconLink onClick={createAboutHandler}><IconPlus/></PlusIconLink></HeadingWrap>
        {loadingDelete && <Loader />}
            {errorDelete && toast.error(errorDelete)}
            {loadingCreate && <Loader />}
            {errorCreate && toast.error(errorCreate)}
            {loading ? (
                <Loader />
            ) : error ? (
                toast.error(error)
            ) : (
                <Table striped bordered hover responsive="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th colSpan={2}>Description</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {abouts.map((about, i) => (
                        <tr key = {about._id}>
                            <td>{i}</td>
                            <td>{about.title}</td>
                            <td>{about.description}</td>
                            <td><Link to={`/admin/about/${about._id}/edit`}><AboutEditBtn><EditIcon/></AboutEditBtn></Link></td>
                            <td><AboutDeleteBtn onClick={()=> deleteHandler(about._id)}><DeleteIcon/></AboutDeleteBtn></td>
                            
                        </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        
    </TableAboutContainer>
    </>
  )
}

export default TableAbout