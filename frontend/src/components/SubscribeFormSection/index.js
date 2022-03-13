import React from 'react'
import Image from "../../images/news.jpeg";
import { Col, Row } from 'react-bootstrap'

import {
    SubscribeFormContainer,
    SubscribeFormBg,
    FormImageBg,
    SubscribeFormContent,
    SubscribeFormTitle,
    SubscribeForm,
    SubscribeFormInput,
    SubscribeFormBtn,
    SubscribeFormSpan,
  } from "./SubscribeFormElements";


const CtaSection = () => {

  return (
    <SubscribeFormContainer>
      <SubscribeFormBg>
        <FormImageBg src={Image} alt="Cta image one" />
      </SubscribeFormBg>
      <Row>
      <SubscribeFormContent>
        <Col>
            <SubscribeFormTitle>Subscribe to <SubscribeFormSpan>Newsletter</SubscribeFormSpan></SubscribeFormTitle>
        </Col>
        <SubscribeForm>
        <Col>
            <SubscribeFormInput type="text" name="email" placeholder="Your e-mail here"/>
            <SubscribeFormBtn type='submit'>Subscribe</SubscribeFormBtn>
        </Col>
        </SubscribeForm>
      </SubscribeFormContent>
      </Row>
    </SubscribeFormContainer>
  )
}

export default CtaSection