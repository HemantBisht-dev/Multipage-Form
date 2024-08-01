import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function UserFormPage2({ nextStep, previousStep, handleChange, data, step }) {
  const [inputData, setInputData] = useState({
    occupation: data.occupation,
    city: data.city,
    bio: data.bio,
  });
  function getInputData(e) {
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

  function previousPage(e) {
    e.preventDefault();
    previousStep();
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
            <label htmlFor="occupation" className="form-label">
              Occupation
            </label>
            <input
              type="text"
              name="occupation"
              value={inputData.occupation}
              className="form-control bg-light"
              id="occupation"
              onChange={getInputData}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              name="city"
              value={inputData.city}
              className="form-control bg-light"
              id="city"
              onChange={getInputData}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="bio" className="form-label">
              Bio
            </label>
            <input
              type="text"
              name="bio"
              value={inputData.bio}
              className="form-control bg-light"
              id="bio"
              onChange={getInputData}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <button
            onClick={previousPage}
            className="btn btn-secondary px-5 py-2"
          >
            Previous
          </button>
          <button onClick={continuePage} className="btn btn-primary px-5 py-2">
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default UserFormPage2;
