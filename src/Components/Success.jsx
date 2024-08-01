function Success({ step }) {
  return (
    <>
      <fieldset className="container p-4">
        <div className="form-card">
          <div className="row mb-3">
            <div className="col-12 col-md-7">
              <h2 className="fs-title">Finish:</h2>
            </div>
            <div className="col-12 col-md-5 text-md-end text-center">
              <h2 className="steps">Step {step} - 4</h2>
            </div>
          </div>
          <h2 className="text-success text-center">
            <strong>SUCCESS!</strong>
          </h2>
          <div className="row justify-content-center mt-4">
            <div className="col-10 col-sm-8 col-md-6 col-lg-4 text-center">
              <img
                src="public\images\success.webp"
                alt="Success"
                className="img-fluid fit-image"
                style={{ maxWidth: "50%", height: "auto" }}
              />
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10 text-center">
              <h5 className="text-success">You Have Successfully Signed Up</h5>
            </div>
          </div>
        </div>
      </fieldset>
    </>
  );
}

export default Success;
