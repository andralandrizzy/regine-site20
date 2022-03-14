import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ContactMeContainer,
  ContactMeForm,
  ContactMeFormButton,
  ContactMeFormContent,
  ContactMeFormeTextArea,
  ContactMeFormInput,
  ContactMeFormWrap,
  ContactMeHeading,
  ContactMeMapContent,
} from "./ContactMeElements";
import { useNavigate, useParams, Link } from "react-router-dom";
import { createContact } from "../../actions/contactActions";
import { toast } from "react-toastify";

const ContactMe = () => {
  // const {id} = useParams()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text_message, setText_message] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contactCreate = useSelector((state) => state.contactCreate);

  const { loading, error, contactInfo } = contactCreate;

  useEffect(() => {
    if (contactInfo) {
      navigate("/");
    } else {
      toast.error(error);
    }
  }, [contactInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createContact({ name, email, subject, text_message }));
    setName("");
    setEmail("");
    setSubject("");
    setText_message("");
    toast.success("Your message was sent");
  };

  return (
    <>
      <ContactMeContainer id="contact">
        <ContactMeHeading>Contact Us</ContactMeHeading>
        <ContactMeFormWrap>
          <ContactMeFormContent>
            <ContactMeForm onSubmit={submitHandler}>
              <ContactMeFormInput
                type="name"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                required
              />
              <ContactMeFormInput
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <ContactMeFormInput
                type="text"
                name="subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Your message subject"
                required
              />
              <ContactMeFormeTextArea
                type="text-area"
                name="text_message"
                id="text_message"
                value={text_message}
                onChange={(e) => setText_message(e.target.value)}
                placeholder="Message"
                required
              ></ContactMeFormeTextArea>
              <ContactMeFormButton type="submit">Submit</ContactMeFormButton>
            </ContactMeForm>
          </ContactMeFormContent>
          <ContactMeMapContent src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0416371610795!2d-81.42032988452532!3d28.508394982466967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77be56ad7665d%3A0xe27d27442c5f5e1!2s3275%20S%20John%20Young%20Pkwy%2C%20Orlando%2C%20FL%2032839!5e0!3m2!1sen!2sus!4v1647225187963!5m2!1sen!2sus"></ContactMeMapContent>
        </ContactMeFormWrap>
      </ContactMeContainer>
    </>
  );
};

export default ContactMe;
