import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "@mui/material/Button"
import MailOpenIcon from "../assets/img/mail-open.png"
import 'animate.css';
import MailSendIcon from "../assets/img/send-icon.png"

const MailDialog = (props) => {
  return (
    <>
      <Modal className="mailModal animate__animated animate__backInDown"
	    data-bs-theme="dark" 
        show={props.show}
        cancel={props.close}
        size="m"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
			<div id="modal-title-toolbar" onClick={props.close}>
				<svg className="closeButton" width="4vh" height="4vh" viewBox="0 0 10 10">
					<rect x="0" y="0" width="10" height="10" stroke="#fff" fill="#fff" stroke-width="1"/>
					<path d="M 2 2 L 8 8 M 8 2 L 2 8" stroke="black" stroke-width="10%" fill="none"></path>
				</svg>
			</div>
			<div id="modal-title-container">
				<img id="modal-title-mail-icon" src={MailSendIcon}></img>
				<span id="modal-title-text">YOU'VE GOT MAIL!</span>
			</div>
			</Modal.Title>
        </Modal.Header>
        <Modal.Body>
		  <span><strong>Date:</strong> Thursday, March 7 2024, 3:30:33 UTC</span>
		  <br></br>
		  <span><strong>From:</strong> Aleksandra&lt;redacted@redacted.com&#x3e;</span>
		  <br></br>
		  <span><strong>Subject:</strong> Hey!</span>
		  <br></br>
		  <span><strong>Body:</strong></span>
		  <br></br>
		  <span>Thanks for checking my project out.  If you have any thoughts or feedback, fill out the form below to get in touch. </span>
		  <textarea name="txtMailBody" cols="50" rows="5"></textarea>
		  <button className="btnSendMail">SEND</button>		  
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MailDialog;
