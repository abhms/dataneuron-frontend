import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { Resizable } from "re-resizable";
import axios from "axios";
import Modal from "./modal/modal";
function App() {
  const [data, setData] = useState(null);
  const [executiontime, setExecutionTime] = useState();
  const [componentExecutionTime, setcomponentExecutionTime] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [action, setAction] = useState("");
  const [modalState, setModalState] = useState({
    1: { isOpen: false, action: "" },
    2: { isOpen: false, action: "" },
    3: { isOpen: false, action: "" },
  });

// fetching data on render time of this component
  useEffect(() => {
    fetchData();
  }, []);

// open modal function
  const openModal = (number, action) => {
    setModalState((prevState) => ({
      ...prevState,
      [number]: { isOpen: true, action },
    }));
  };
// close modal function
  const closeModal = (number) => {
    setModalState((prevState) => ({
      ...prevState,
      [number]: { isOpen: false, action: "" },
    }));
  };
// fetching all data 
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/allData`
      );
      setData(response.data.allData);
      setExecutionTime(response?.data?.executionTime);
      console.log(response.data, "ppppppp");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(data, "data");
  return (
    <div className="App">
      <div className="executiontime">
      <h2>
        {/** Get Api execution time  */}
        Approx Execution Time of API : ~{executiontime && executiontime.toFixed(2)}
      </h2>
      <h2>
        {/**Add or Update Api execution time*/}
        Round of Time of Execution Add or Update API :
        {componentExecutionTime ? componentExecutionTime.toFixed(2) : " ---"}
      </h2>
      </div>

      <div className="top-row">
        {/**First Resizable component */}
        <Resizable
          className="my-element"
          style={{ border: "1px solid", backgroundColor: "#a9adab" }}
          defaultSize={{
            width: "50%",
            height: 200,
          }}
        >
          {/**all the data of first component */}
          <div className="data-container">
            <div className="data">
              <strong>First Name : </strong> {data?.comp1Data[0]?.firstname}
            </div>
            <div className="data">
              <strong>Last Name : </strong> {data?.comp1Data[0]?.lastname}
            </div>
            <div className="data">
              <strong>Email : </strong> {data?.comp1Data[0]?.email}
            </div>
            <strong>API Call : </strong> {data?.comp1Data[0]?.apiCall}{" "}
            <strong>API Update : </strong> {data?.comp1Data[0]?.apiupdate}
            <div className="buttons">
              <button
                onClick={() => {
                  openModal(1, "add");
                  setAction("add");
                }}
                className="add-button"
              >
                Add
              </button>

              <button
                onClick={() => {
                  openModal(1, "update");
                  setAction("update");
                }}
                className="update-button"
              >
                Update
              </button>
            </div>
            <Modal
              isOpen={modalState[1].isOpen}
              onClose={() => closeModal(1)}
              number={1}
              action={action}
              setData={setData}
              setcomponentExecutionTime={setcomponentExecutionTime}
              firstname={data?.comp1Data[0]?.firstname}
              lastname={data?.comp1Data[0]?.lastname}
              email={data?.comp1Data[0]?.email}
            />
          </div>
        </Resizable>
        {/**second Resizable component */}

        <Resizable
          className="my-element"
          style={{ border: "1px solid" , backgroundColor: "#84b29b"}}
          defaultSize={{
            width: "50%",
            height: 200,
          }}
          >
          {/**all the data of second component */}
          <div className="data-container">
            <div className="data">
              <strong>First Name : </strong> {data?.comp2Data[0]?.firstname}
            </div>
            <div className="data">
              <strong>Last Name : </strong> {data?.comp2Data[0]?.lastname}
            </div>
            <div className="data">
              <strong>Email : </strong> {data?.comp2Data[0]?.email}
            </div>
            <strong>API Call : </strong> {data?.comp2Data[0]?.apiCall}{" "}
            <strong>API Update : </strong> {data?.comp2Data[0]?.apiupdate}
            <div className="buttons">
              <button
                onClick={() => {
                  openModal(2, "add");
                  setAction("add");
                }}
                className="add-button"
              >
                Add
              </button>
              <button
                onClick={() => {
                  openModal(2, "update");
                  setAction("update");
                }}
                className="update-button"
              >
                Update
              </button>
            </div>
            <Modal
              isOpen={modalState[2].isOpen}
              onClose={() => closeModal(2)}
              number={2}
              action={action}
              setData={setData}

              setcomponentExecutionTime={setcomponentExecutionTime}
              firstname={data?.comp2Data[0]?.firstname}
              lastname={data?.comp2Data[0]?.lastname}
              email={data?.comp2Data[0]?.email}
            />
          </div>
        </Resizable>
      </div>
      <div className="bottom-row">
        {/**third Resizable component */}

        <Resizable
          className="my-element"
          style={{ border: "1px solid", backgroundColor: "#9b90e3"  }}
          defaultSize={{
            width: "100%",
            height: 200,
          }}
        >
          {/**all the data of third and last component */}
          <div className="data-container">
            <div className="data">
              <strong>First Name : </strong> {data?.comp3Data[0]?.firstname}
            </div>
            <div className="data">
              <strong>Last Name : </strong> {data?.comp3Data[0]?.lastname}
            </div>
            <div className="data">
              <strong>Email : </strong> {data?.comp3Data[0]?.email}
            </div>
            <strong>API Call : </strong> {data?.comp3Data[0]?.apiCall}{" "}
            <strong>API Update : </strong> {data?.comp3Data[0]?.apiupdate}
            <div className="buttons">
              <button
                onClick={() => {
                  openModal(3, "add");
                  setAction("add");
                }}
                className="add-button"
              >
                Add
              </button>
              <button
                onClick={() => {
                  openModal(3, "update");
                  setAction("update");
                }}
                className="update-button"
              >
                Update
              </button>
            </div>
            <Modal
              isOpen={modalState[3].isOpen}
              onClose={() => closeModal(3)}
              number={3}
              action={action}
              setData={setData}
              setcomponentExecutionTime={setcomponentExecutionTime}
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
