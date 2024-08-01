import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../App.css";

function UserFormPage1({ nextStep, handleChange, data, step }) {
  const [inputData, setInputData] = useState({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
  });
  // console.log(inputData, "data");

  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputData((old) => {
      return { ...old, [name]: value };
    });
  }

  function continuePage(e) {
    e.preventDefault();
    handleChange(inputData);
    nextStep();
  }

  return (
    <>
      <div className="container mt-5 p-4">
        <div className="row mb-3">
          <div className="col-12 col-md-7">
            <h2 className="fs-title">Account Information:</h2>
          </div>
          <div className="col-12 col-md-5 text-md-end text-center">
            <h2 className="steps">Step {step} - 3</h2>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={inputData.firstName}
              className="form-control bg-light"
              id="firstname"
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={inputData.lastName}
              className="form-control bg-light"
              id="lastname"
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={inputData.email}
              className="form-control bg-light"
              id="email"
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="text-center">
          <button onClick={continuePage} className="btn btn-primary px-5 py-2">
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default UserFormPage1;
