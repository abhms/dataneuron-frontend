import React, { useState, useEffect } from "react";
import axios from "axios";
const Modal = ({
  isOpen,
  onClose,
  email,
  firstname,
  lastname,
  action,
  number,
  setData,
  setcomponentExecutionTime,
}) => {
  console.log(
    email,
    firstname,
    lastname,
    action,
    number,
    "email, firstname, lastname, action, number"
  );
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedFirstname, setEditedFirstname] = useState(firstname);
  const [editedLastname, setEditedLastname] = useState(lastname);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/allData`
      );
      setData(response.data.allData);
      setcomponentExecutionTime(response?.data?.executionTime);

      console.log(response, "ppppppp");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const add1 = async () => {
    if (action == "add") {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/component1`,
          {
            email: editedEmail,
            firstname: editedFirstname,
            lastname: editedLastname,
          }
        );
        setcomponentExecutionTime(response?.data?.executionTime);
        await fetchData().then(() => {
          onClose();
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/updateComp1`,
          {
            email: editedEmail,
            firstname: editedFirstname,
            lastname: editedLastname,
          }
        );
        setcomponentExecutionTime(response?.data?.executionTime);

        await fetchData().then(() => {
          onClose();
        });

        console.log(response, "ppppppp");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };
  
  const add2 = async () => {
    if (action == "add") {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/component2`,
          {
            email: editedEmail,
            firstname: editedFirstname,
            lastname: editedLastname,
          }
        );
        setcomponentExecutionTime(response?.data?.executionTime);

        await fetchData().then(() => {
          onClose();
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/updateComp2`,
          {
            email: editedEmail,
            firstname: editedFirstname,
            lastname: editedLastname,
          }
        );
        setcomponentExecutionTime(response?.data?.executionTime);

        await fetchData().then(() => {
          onClose();
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };
  const add3 = async () => {
    if (action == "add") {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/component3`,
          {
            email: editedEmail,
            firstname: editedFirstname,
            lastname: editedLastname,
          }
        );
        setcomponentExecutionTime(response?.data?.executionTime);

        await fetchData().then(() => {
          onClose();
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/updateComp3`,
          {
            email: editedEmail,
            firstname: editedFirstname,
            lastname: editedLastname,
          }
        );
        setcomponentExecutionTime(response?.data?.executionTime);

        await fetchData().then(() => {
          onClose();
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  useEffect(() => {
    setEditedEmail(email);
    setEditedFirstname(firstname);
    setEditedLastname(lastname);
  }, [email, firstname, lastname, number]);

  const handleEmailChange = (event) => {
    setEditedEmail(event.target.value);
  };

  const handleFirstnameChange = (event) => {
    setEditedFirstname(event.target.value);
  };

  const handleLastnameChange = (event) => {
    setEditedLastname(event.target.value);
  };

  if (!isOpen) return null;
  console.log(editedEmail, "editedEmail");
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-content">
        <h1 style={{alignContent:"center"}}>{action && action=="add"?"Add":"Update"}</h1>

          <label>Email:</label>
          <input
            value={editedEmail}
            onChange={handleEmailChange}
            type="email"
            placeholder="Enter your email"
          />
          <br />
          <label>First Name:</label>
          <input
            value={editedFirstname}
            onChange={handleFirstnameChange}
            type="text"
            placeholder="Enter your first name"
          />
          <label>Last Name:</label>
          <input
            value={editedLastname}
            onChange={handleLastnameChange}
            type="text"
            placeholder="Enter your last name"
          />
          <div className="modal-footer">
            <button onClick={onClose} style={{ backgroundColor: "red" }}>
              Close
            </button>
            <button
              onClick={() => {
                if (number && number === 1) {
                  add1();
                } else if (number && number === 2) {
                  add2();
                } else {
                  add3();
                }
              }}
            >
              {action}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
