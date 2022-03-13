import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import { toast } from 'react-toastify'
import { listUsers, deleteUser } from '../../actions/userActions'
import { CheckIconGreen, CheckIconRed, DeleteIcon, EditIcon, TableContainer, TableHeading, UserBtn } from './UserListScreenElements'

const UserListScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userList = useSelector((state) => state.userList)
    const { loading, error, users } = userList

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userDelete = useSelector((state) => state.userDelete)
    const { success: successDelete } = userDelete

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listUsers())
        } else {
            navigate('/login')
        }
    }, [dispatch, navigate, successDelete, userInfo])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteUser(id))
        }
    }

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                toast.error(error)
            ) : (
                      <TableContainer>
                        <TableHeading> List of users</TableHeading>
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>ADMIN</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user._id}>
                                        <td>{user._id}</td>
                                        <td>{user.name}</td>
                                        <td>
                                            <a href={`mailto:${user.email}`}>{user.email}</a>
                                        </td>
                                        <td>
                                            {user.isAdmin ? (
                                                 <CheckIconGreen/>
                                            ) : (
                                                <CheckIconRed/>
                                                )}
                                        </td>
                                        <td>
                                            <Link to={`/admin/user/${user._id}/edit`}>
                                                <UserBtn >
                                                    <EditIcon/>
                                                </UserBtn>
                                            </Link>
                                            <UserBtn
                                                onClick={() => deleteHandler(user._id)}
                                            >
                                                <DeleteIcon/>
                                            </UserBtn>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                      </TableContainer>
                    )}
        </>
    )
}

export default UserListScreen
