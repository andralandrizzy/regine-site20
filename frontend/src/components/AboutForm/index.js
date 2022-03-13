import React, { useState, useEffect } from "react";
import { AboutFormSection, AboutsForm, AboutFormGroup, AboutFormLabel, AboutFormInput, AboutBtnGroup, AboutBtn } from './AboutFormElement'
import {useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from 'react-router-dom';
import { listAboutDetails, updateAbout } from "../../actions/aboutActions";
import { ABOUT_UPDATE_RESET } from '../../constants/aboutConstants'
import Loader from "../Loader";
import { toast } from "react-toastify";


const AboutForm = () => {

  const {id} = useParams()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const aboutDetails = useSelector((state) => state.aboutDetails)
  const { loading, error, about} = aboutDetails

  const aboutUpdate = useSelector((state) => state.aboutUpdate)
  const {loading: loadingUpdate,
          error: errorUpdate,
          success: successUpdate,
        } = aboutUpdate


  useEffect(() => {
    if(successUpdate) {
      dispatch({ type: ABOUT_UPDATE_RESET })
      navigate('/admin/aboutlist')
    } else {
      if (!about.title || about._id !== id){
        dispatch(listAboutDetails(id))
      }
      else {
        setTitle(about.title)
        setDescription(about.description)
      }
    }
  }, [dispatch, navigate, id, about, successUpdate])
  



  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateAbout({_id:id, title, description }));
  };

  return (
    <>
    
    <AboutFormSection>
      <h1 style={{textAlign: "center", margin: '25px auto'}}>Edit Abouts</h1>
      {loadingUpdate && <Loader/>}
      {errorUpdate && toast.error(errorUpdate)}
      {loading ? (<Loader/>) : error ? (toast.error(error)) :(
        <AboutsForm onSubmit = {submitHandler}>
          <Link style={{border: 'solid red 1px', marginBottom: '30px',}} to='/admin/aboutlist' className='btn btn-back my-3'>
                Go Back
          </Link>
            <AboutFormGroup>
                <AboutFormLabel htmlFor='title'>Title</AboutFormLabel>
                <AboutFormInput 
                type='text'
                name='title'
                id='tile'
                placeholder="Enter a title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required/>
            </AboutFormGroup>
            <AboutFormGroup>
                <AboutFormLabel htmlFor='description'>Description</AboutFormLabel>
                <AboutFormInput 
                type='text'
                name='description'
                placeholder="Type description for about"
                id='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required/>
            </AboutFormGroup>
            <AboutBtnGroup>
                <AboutBtn type='submit'>Add About</AboutBtn>
            </AboutBtnGroup>
        </AboutsForm>
      )}
        
    </AboutFormSection>
    </>
  )
}

export default AboutForm