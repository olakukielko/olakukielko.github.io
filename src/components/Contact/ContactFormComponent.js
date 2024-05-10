import React, { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../style/Contact/contact-form.css';
import { api_get, api_post } from "../../common/js/webservice.js";
import {contactPageInitAnimation} from "../../common/js/animate.js"
import ReCAPTCHA from "react-google-recaptcha";

const ContactFormComponent = (props) => {
  const pageTitle = "CONTACT";
  const pageDescription = "Thanks for checking my site out.  If you like what you see, or even if you hate it - shoot me an email by filling out the form below:";
  const [formValidated, setFormValidated] = useState(false);
  useEffect(() => { contactPageInitAnimation();}, []);
  const recaptchaReference = useRef(null);
  const handleFormSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      const recaptchaValue = recaptchaReference.current.getValue();
      if (recaptchaValue.length > 0)
        verifycaptcha(recaptchaValue);
        //TODO - send email
        //this.props.onSubmit(recaptchaValue);
    }
    setFormValidated(true);
  }
  //TODO
  //fires when recaptcha value changes
  const handleChange = async () => {
    // let recaptchaValue = recaptchaReference.current.getValue(); 
    // console.log('recaptchaValue',recaptchaValue) //prompts the value

    // onChange({ value: recaptchaValue, name: `recaptcha` });
  };
  const emailBtnClicked = (e) => {
    if (e!= null){
      e.preventDefault();
      //fetch email address
      
      api_get('bb/getContact').then(data => { 
        var returnText = "API Error";
        if (data){
          returnText = data["mailID"];
        }
        document.getElementById("inputMailID").value = returnText;
      });
    }
    return false;
  }
  const verifycaptcha = (val) => {
      let captchaval = {}
      captchaval["g-recaptcha-response"] = val
      api_post('bb/verifycaptcha/', captchaval).then(data => { 
          console.log(data);
      });
  }
  const disablePaste = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setFormValidated(true);
  }
  return (
    <>
    <div id="contactFormContainer">
      <div id="contactFormBox" class="flexCol">
        <div className="divTitle">
            <h2><strong>{pageTitle}</strong></h2>
            <h3>{pageDescription}</h3>
        </div>
        <div id="divContact">
          <div id="contactOnline">
            <div id="contact_linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </div>
            <div id="contact_email">
              <input value="Click Me" onClick={(e) => emailBtnClicked(e)} type="button"/>
              <input id="inputMailID" readonly type="text" />
              <span>Email</span>
            </div> 
          </div>
          <Form id="formContact" noValidate validated={formValidated} onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label><strong>Email Address</strong></Form.Label>
              <Form.Control required type="email" placeholder="Your Email" onPaste={disablePaste} pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" />
              <Form.Control.Feedback type="invalid"> Provide a valid email.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label><strong>Name</strong></Form.Label>
              <Form.Control required type="textarea" placeholder="Your Name" pattern="[A-Za-z0-9 ]+" />
              <Form.Control.Feedback type="invalid"> Who's asking? Letters, numbers and spaces only.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label><strong>Message</strong></Form.Label>
              <Form.Control required as="textarea" placeholder="Write a few words." minLength={75} maxLength={2000} rows={5} />
              <Form.Control.Feedback type="invalid">75 - 2000 characters.</Form.Control.Feedback>
            </Form.Group>
            <ReCAPTCHA 
              sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY} 
              ref={recaptchaReference} 
              onChange={handleChange} />
            <Button variant="primary" size="lg" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
     </div>
    </>
  );
};

export default ContactFormComponent;
