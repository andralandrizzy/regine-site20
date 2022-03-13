import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register} from '../../actions/userActions';
import Loader from '../../components/Loader'
import { RegisterContainer, FormButton, FormContent,Form, FormH1, FormInput, FormLabel, FormWrap, Icon, Text, FormH1Wrap, FormH1Icon, FormImagewrap, FormImage } from './RegisterElements'
import registerImage from '../../images/add_user.svg'


const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)

  const {loading, error, userInfo} = userRegister

  useEffect(()=>{
    if(userInfo){
      navigate('/profile')
    } else{
      toast.error(message)
    }

  },[userInfo, navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
      toast.error(setMessage('Passwords do not match'))
    } else {
      dispatch(register(name, email, password))
    }
  }
  return (
    <>
    <RegisterContainer>
        <FormWrap>
            <FormContent>
                <FormImagewrap>
                  <FormImage alt='register image' src={registerImage}/>
                </FormImagewrap>
                { error && toast.error(error)}
                { loading && <Loader/>}
                <Form onSubmit={submitHandler}>
                    <FormH1Wrap><FormH1Icon/> <FormH1>Create an account</FormH1></FormH1Wrap>
                    <FormLabel htmlFor='name'>Name</FormLabel>
                    <FormInput onChange={(e) => setName(e.target.value)} type='name' id='name' name='name' value={name} placeholder='Enter your name' required />
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <FormInput onChange={(e) => setEmail(e.target.value)} type='email' id='email' name='email' value={email} placeholder='Enter your email' required />
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <FormInput onChange={(e) => setPassword(e.target.value)} type='password' id='password' name='password' value={password} placeholder='Enter your password' required />
                    <FormLabel htmlFor='password2'>Confirm Password</FormLabel>
                    <FormInput onChange={(e) => setConfirmPassword(e.target.value)} type='password' id='confirmPassword' name='password2' value={confirmPassword} placeholder='Confirm password' required />
                    <FormButton type='submit'>Register</FormButton>
                    <Icon to="/login"><Text>Already have an account? Login here </Text></Icon>
                </Form>
            </FormContent>
        </FormWrap>
    </RegisterContainer>
    </>
  )
}

export default Register