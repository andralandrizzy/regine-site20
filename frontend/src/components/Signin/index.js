import React, {useState, useEffect} from "react";
import {
  SigninContainer,
  LogoImg,
  FormButton,
  FormContent,
  Form,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
  FormH1Wrap,
  FormH1Icon,
  FormImagewrap,
  FormImage,
} from "./SigninElements";
import SigninImage from '../../images/secure_login.svg'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { login } from '../../actions/userActions'



const Signin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)

  const {loading, error, userInfo } = userLogin

  useEffect(() => {
    if(userInfo){
      navigate('/profile')
    }
  }, [userInfo])

  const submitHandler = (e)=> {
    e.preventDefault()
    //Dispatch login user
    dispatch(login(email, password))
  }
  
  return (
    <>
      <SigninContainer>
        <FormWrap>
          <FormContent>
            <FormImagewrap>
              <FormImage alt="sign in image" src={SigninImage} />
            </FormImagewrap>
            <Form onSubmit={submitHandler}>
              <FormH1Wrap>
                <FormH1Icon /> <FormH1>Sign In to your account</FormH1>
              </FormH1Wrap>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                onChange={(e)=> setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                required
              />
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput
                onChange={(e)=> setPassword(e.target.value)}
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                required
              />
              <FormButton type="submit">Continue</FormButton>
              <Icon to="/register">
                <Text>Don't have an account? Register here </Text>
              </Icon>
            </Form>
          </FormContent>
        </FormWrap>
      </SigninContainer>
    </>
  );
};

export default Signin;
