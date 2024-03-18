import React, { useState } from "react";

const Modal = ({ isOpen, onClose, email, firstname, lastname, action, number }) => {
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedFirstname, setEditedFirstname] = useState(firstname);
  const [editedLastname, setEditedLastname] = useState(lastname);
  const [editedNumber, setEditedNumber] = useState(number);

  const handleEmailChange = (event) => {
    setEditedEmail(event.target.value);
  };

  const handleFirstnameChange = (event) => {
    setEditedFirstname(event.target.value);
  };

  const handleLastnameChange = (event) => {
    setEditedLastname(event.target.value);
  };

  const handleNumberChange = (event) => {
    setEditedNumber(event.target.value);
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <h1>{action}</h1>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <input value={editedEmail} onChange={handleEmailChange} />
        <input value={editedFirstname} onChange={handleFirstnameChange} />
        <input value={editedLastname} onChange={handleLastnameChange} />
        <input value={editedNumber} onChange={handleNumberChange} />
        <br/>
        <button>{action}</button>
      </div>
    </div>
  );
};

export default Modal;
