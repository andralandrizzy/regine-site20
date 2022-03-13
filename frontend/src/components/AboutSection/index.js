import React, { useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader'
import { toast } from 'react-toastify'
import imageOne from '../../images/about1.jpeg'
import imageTwo from '../../images/about2.jpeg'
import { listHomeAbout } from '../../actions/aboutActions.js'
import { 
    AboutContainer, 
    AboutHeading, 
    AboutImage, 
    AboutImageContent, 
    AboutImageWrapper, 
    AboutTextContent, 
    AboutWrapper, 
    AboutTitle,
    AboutTitleBar,
    AboutLine,
    DescriptionWrapper, 
    TitleWrapper } from './AboutElements'

const AboutSection = () => {
    const dispatch = useDispatch()
    const aboutsHome = useSelector((state) => state.aboutsHome)
    const { loading, error, abouts } = aboutsHome

    useEffect(() => {
      dispatch(listHomeAbout())
    }, [dispatch])
    
  return (
        <AboutContainer id='about'>
            <AboutHeading>About Us</AboutHeading>
            <Row>
            <AboutWrapper>
            <Col>
            <AboutImageContent>
                <AboutImageWrapper>
                    <AboutImage src={imageOne} alt="about image one"/>
                </AboutImageWrapper>
                <AboutImageWrapper>
                    <AboutImage src={imageTwo} alt="about image two"/>
                </AboutImageWrapper>
            </AboutImageContent>
            </Col>
            <Col>
            {loading ? (<Loader/>) : error ? (toast.error(error)) : (
                abouts.map(about => (
                <AboutTextContent key={about._id}>
                <TitleWrapper>
                    <AboutTitle>
                        {about.title}
                    </AboutTitle>
                    <AboutTitleBar/>
                </TitleWrapper>
                <DescriptionWrapper>
                    {about.description}
                </DescriptionWrapper>
                <AboutLine/>
            </AboutTextContent>
            ))
            )}
            </Col>
            </AboutWrapper>
            </Row>
        </AboutContainer>
  )
}

export default AboutSection