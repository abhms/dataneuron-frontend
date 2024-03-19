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
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedFirstname, setEditedFirstname] = useState(firstname);
  const [editedLastname, setEditedLastname] = useState(lastname);
  //fetching all data 
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
  // update and add api for component 1
  const add1 = async () => {
    //add data in component 1
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
    //update data in component 1

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
  //update and add data in conponent2
  const add2 = async () => {
    //add data in component 2
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
    //update data in component 2
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
  //add and update data in component3
  const add3 = async () => {
    //add data in component 3
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
    //add data in component 3
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
// for updating data on render time of this component 
  useEffect(() => {
    setEditedEmail(email);
    setEditedFirstname(firstname);
    setEditedLastname(lastname);
  }, [email, firstname, lastname, number]);
// for making email field editable
  const handleEmailChange = (event) => {
    setEditedEmail(event.target.value);
  };
// for making firstname field editable

  const handleFirstnameChange = (event) => {
    setEditedFirstname(event.target.value);
  };
// for making lastname field editable

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
            {/**this button is for making api call according to requirement */}
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
