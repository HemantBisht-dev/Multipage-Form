import "bootstrap/dist/css/bootstrap.min.css";
function ConfirmPage({ data, nextStep, previousStep, step }) {
  const { firstName, lastName, email, occupation, bio, city } = data;

  function continuePage(e) {
    e.preventDefault();
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
            <ol className="list-group list-group-numbered">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">First Name</div>
                  {firstName}
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Last Name</div>
                  {lastName}
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Email</div>
                  {email}
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Occupation</div>
                  {occupation}
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">City</div>
                  {city}
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Bio</div>
                  {bio}
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <button
            onClick={previousPage}
            className="btn btn-secondary px-4 py-2"
          >
            Previous
          </button>
          <button onClick={continuePage} className="btn btn-success px-4 py-2">
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}
export default ConfirmPage;
