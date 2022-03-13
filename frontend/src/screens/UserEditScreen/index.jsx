import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import { toast } from 'react-toastify'
import { getUserDetails, updateUser } from '../../actions/userActions'
import { USER_UPDATE_RESET } from '../../constants/userConstants'
import { AdminCheckBox, AdminCheckWrap, AdminEditForm, AdminEditFormButton, AdminEditFormContent, AdminEditFormH1, AdminEditFormH1Wrap, AdminEditFormInput, AdminEditFormLabel, AdminEditFormWrap, AdminEditProfileContainer, SmallAdmin } from './UserEditScreenElements'

const UserEditScreen = ({ match, history }) => {
    const { id } = useParams();


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userUpdate = useSelector((state) => state.userUpdate)
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = userUpdate

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: USER_UPDATE_RESET })
            navigate('/admin/userlist')
        } else {
            if (!user.name || user._id !== id) {
                dispatch(getUserDetails(id))
            } else {
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
            }
        }
    }, [dispatch, history, id, user, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({ _id: id, name, email, isAdmin }))
    }

    return (
        <>
                <AdminEditProfileContainer>
                    <AdminEditFormWrap>
                        <AdminEditFormContent>
                            <AdminEditFormH1Wrap> 
                                <AdminEditFormH1>Manage User Information</AdminEditFormH1>
                            </AdminEditFormH1Wrap>
                                {loadingUpdate && <Loader />}
                                {errorUpdate && toast.error(errorUpdate)}
                                {loading ? (<Loader/>) : error ? (toast.error(error)):(
                                <AdminEditForm onSubmit={submitHandler}>
                                    <AdminEditFormLabel htmlFor='name'>Name</AdminEditFormLabel>
                                    <AdminEditFormInput onChange={(e) => setName(e.target.value)} type='name' id='name' name='name' value={name} placeholder='Enter your name' required />
                                    <AdminEditFormLabel htmlFor='email'>Email</AdminEditFormLabel>
                                    <AdminEditFormInput onChange={(e) => setEmail(e.target.value)} type='email' id='email' name='email' value={email} placeholder='Enter your email' required />
                                    <AdminCheckWrap>
                                        <SmallAdmin>Is Admin</SmallAdmin>
                                        <AdminCheckBox 
                                        type='checkbox'
                                        label='Is Admin'
                                        checked={isAdmin}
                                        onChange={(e) => setIsAdmin(e.target.checked)}/> </AdminCheckWrap>
                                    <AdminEditFormButton type='submit'>Update</AdminEditFormButton>
                                </AdminEditForm>
                                )}
                            
                        </AdminEditFormContent>
                    </AdminEditFormWrap>
                </AdminEditProfileContainer>
        </>
    )
}

export default UserEditScreen
