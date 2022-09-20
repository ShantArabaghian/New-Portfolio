import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { ContactH1,Span } from './Contactcss';
import {  useRef} from "react";

import emailjs from '@emailjs/browser';


const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  height: 700px;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
  &:hover{
    transition: 0.2s ease-in-out;
    box-shadow: 5px 5px 10px grey;
  }
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
  &:hover{
    transition: 0.2s ease-in-out;
    box-shadow: 5px 5px 10px grey;
  }
`;
const StyledButton = styled.button`
  display: block;
  background-color: #01bf71;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  &:hover{
    background-color: #000;
    transition: all 0.2s ease-in-out;


  }
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

const initalState = {
  name: '',
  email: '',
  message: '',
};

function Contact() {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState('');
  const formRef = useRef();
  const [done, setDone] = useState(false)
  
  const handleSubmit = e => {
    e.preventDefault();

    console.log('submitted!');
    console.log(state);

    for (let key in state) {
      if (state[key] === '') {
        setError(`You must provide the ${key}`)
        return
      }
    }
    setError('');
    console.log("Succeeded!!!")
    emailjs
    .sendForm(
      "service_tltx1p5",
      "template_y6ts6te",
      formRef.current,
      "user_AqcBlIaX2POaOmy3IBb48"
    )
    .then(
      (result) => {
        console.log(result.text);
        setDone(true)
      },
      (error) => {
        console.log(error.text);
      }
    );
    formRef.current.reset()

  };

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [inputName]: value }));
  };

  return (
    <>

    <ContactH1 data-aos="fade-up">Let's <Span>Work</Span> Together</ContactH1>

      <StyledFormWrapper name="contact">
        <StyledForm onSubmit={handleSubmit} ref={formRef}>
          <label htmlFor="name">Name</label>
          <StyledInput
            type="text"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
          <label htmlFor="message">Message</label>
          <StyledTextArea
            name="message"
            value={state.message}
            onChange={handleInput}
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton type="submit">Send Message</StyledButton>
          {done && "Thank you for your message !"}
        </StyledForm>
      </StyledFormWrapper>
      
    </>
  );
}

export default Contact;