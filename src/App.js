import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { Resizable } from "re-resizable";
// import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import Modal from "./modal/modal";
// import {setData} from "./dataSlice";
function App() {
  // const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [action, setAction] = useState("");
  const openModal = () => {
    setIsModalOpen(true);
    setAction("add")
  };
const updateModal=()=>{
  setIsModalOpen(true);
  setAction("update")
}
console.log(action,"action")
  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/allData`
      );
      setData(response.data.allData);
      console.log(response, "ppppppp");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(data, "pppp");
  return (
    <div className="App">
      <div className="top-row">
        <Resizable
          className="my-element"
          style={{ border: "1px solid" }}
          defaultSize={{
            width: "50%",
            height: 200,
          }}
        >
          <div className="data-container">
            <div className="data">
              <strong>First Name:</strong> {data?.comp1Data[0]?.firstname}
            </div>
            <div className="data">
              <strong>Last Name:</strong> {data?.comp1Data[0]?.lastname}
            </div>
            <div className="data">
              <strong>Email:</strong> {data?.comp1Data[0]?.email}
            </div>
            <strong>API Call:</strong> {data?.comp1Data[0]?.apiCall}{" "}
            <strong>API Update:</strong> {data?.comp1Data[0]?.apiupdate}
            <div className="buttons">
              <button onClick={openModal} className="add-button">
                Add
              </button>
              <button onClick={updateModal}  className="update-button">Update</button>
            </div>
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              number={1}
              action={action}
              firstname={data?.comp1Data[0]?.firstname}
              lastname={data?.comp1Data[0]?.lastname}
              email={data?.comp1Data[0]?.email}
            />
          </div>
        </Resizable>
        <Resizable
          className="my-element"
          style={{ border: "1px solid" }}
          defaultSize={{
            width: "50%",
            height: 200,
          }}
        >
          <div className="data-container">
            <div className="data">
              <strong>First Name:</strong> {data?.comp2Data[0]?.firstname}
            </div>
            <div className="data">
              <strong>Last Name:</strong> {data?.comp2Data[0]?.lastname}
            </div>
            <div className="data">
              <strong>Email:</strong> {data?.comp2Data[0]?.email}
            </div>
            <strong>API Call:</strong> {data?.comp2Data[0]?.apiCall}{" "}
            <strong>API Update:</strong> {data?.comp2Data[0]?.apiupdate}
            <div className="buttons">
              <button onClick={openModal} className="add-button">Add</button>
              <button onClick={updateModal}  className="update-button">Update</button>
            </div>
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              number={2}
              action={action}

              firstname={data?.comp2Data[0]?.firstname}
              lastname={data?.comp2Data[0]?.lastname}
              email={data?.comp2Data[0]?.email}
            />
          </div>
        </Resizable>
      </div>
      <div className="bottom-row">
        <Resizable
          className="my-element"
          style={{ border: "1px solid" }}
          defaultSize={{
            width: "100%",
            height: 200,
          }}
        >
          <div className="data-container">
            <div className="data">
              <strong>First Name:</strong> {data?.comp3Data[0]?.firstname}
            </div>
            <div className="data">
              <strong>Last Name:</strong> {data?.comp3Data[0]?.lastname}
            </div>
            <div className="data">
              <strong>Email:</strong> {data?.comp3Data[0]?.email}
            </div>
            <strong>API Call:</strong> {data?.comp3Data[0]?.apiCall}{" "}
            <strong>API Update:</strong> {data?.comp3Data[0]?.apiupdate}
            <div className="buttons">
              <button onClick={openModal} className="add-button">Add</button>
              <button onClick={updateModal}  className="update-button">Update</button>
            </div>
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              number={3}
              action={action}

              firstname={data?.comp3Data[0]?.firstname}
              lastname={data?.comp3Data[0]?.lastname}
              email={data?.comp3Data[0]?.email}
            />
          </div>
        </Resizable>
      </div>
    </div>
  );
}

export default App;
