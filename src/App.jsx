import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import UserFormPage1 from "./Components/UserFormPage1";
import UserFormPage2 from "./Components/UserFormPage2";
import ConfirmPage from "./Components/ConfirmPage";
import Success from "./Components/Success";

function App() {
  const [step, setStep] = useState(1);

  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  function nextStep() {
    setStep((prev) => prev + 1);
  }

  function previousStep() {
    setStep((prev) => prev - 1);
  }

  function handleChange(data) {
    setFormInfo((prevData) => {
      return { ...prevData, ...data };
    });
  }

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid p-3">
          <h2 className="text-light mx-auto" href="#">
            MULTISTEP FORM
          </h2>
        </div>
      </nav>

      {step === 1 ? (
        <UserFormPage1
          handleChange={handleChange}
          nextStep={nextStep}
          data={formInfo}
          step={step}
        />
      ) : (
        ""
      )}
      {step === 2 ? (
        <UserFormPage2
          handleChange={handleChange}
          nextStep={nextStep}
          previousStep={previousStep}
          data={formInfo}
          step={step}
        />
      ) : (
        ""
      )}
      {step === 3 ? (
        <ConfirmPage
          data={formInfo}
          nextStep={nextStep}
          previousStep={previousStep}
          step={step}
        />
      ) : (
        ""
      )}
      {step === 4 ? <Success step={step} /> : ""}
    </>
  );
}

export default App;
