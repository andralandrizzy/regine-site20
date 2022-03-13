import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import { toast } from 'react-toastify'
import { getUserDetails, updateUserProfile } from '../../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants'
import { UserForm, UserFormButton, UserFormContent, UserFormH1, UserFormH1Wrap, UserFormInput, UserFormLabel, UserFormWrap, UserProfileContainer } from './UserProfileElements'

const UserProfile = ({ history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile


    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user || !user.name || success) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user, success])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
    }

    return (

        <UserProfileContainer>
        <UserFormWrap>
            <UserFormContent>
                <UserFormH1Wrap> 
                    <UserFormH1>Edit login informations</UserFormH1>
                </UserFormH1Wrap>
                    {error && toast.error(error)}
                    {success && toast.success('Profile Updated')}
                    {loading ? (<Loader/>) : (
                    <UserForm onSubmit={submitHandler}>
                        <UserFormLabel htmlFor='name'>Name</UserFormLabel>
                        <UserFormInput onChange={(e) => setName(e.target.value)} type='name' id='name' name='name' value={name} placeholder='Enter your name' required />
                        <UserFormLabel htmlFor='email'>Email</UserFormLabel>
                        <UserFormInput onChange={(e) => setEmail(e.target.value)} type='email' id='email' name='email' value={email} placeholder='Enter your email' required />
                        <UserFormLabel htmlFor='password'>Password</UserFormLabel>
                        <UserFormInput onChange={(e) => setPassword(e.target.value)} type='password' id='password' name='password' value={password} placeholder='Enter your password' required />
                        <UserFormLabel htmlFor='password2'>Confirm Password</UserFormLabel>
                        <UserFormInput onChange={(e) => setConfirmPassword(e.target.value)} type='password' id='confirmPassword' name='password2' value={confirmPassword} placeholder='Confirm password' required />
                        <UserFormButton type='submit'>Update</UserFormButton>
                    </UserForm>
                    )}
                
            </UserFormContent>
        </UserFormWrap>
    </UserProfileContainer>
    )
}

export default UserProfile
