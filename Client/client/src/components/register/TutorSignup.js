import React, { useState } from "react";

const TutorSignup = ({ setLogin, setSignup }) => {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    experience: "",
    startTime: "",
    endTime: "",
    accountHolderName: "",
    bankName: "",
    accountNumber: "",
    bankIFSCCode: ""
  });

  const completeForm = () => {
    setFormStep(cur => cur + 1);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const formDataObject = {
      ...formData
    };
    console.log(formDataObject);
  };

  return (
    <div className="min-h-screen bg-green-900 flex flex-col items-start text-gray-900 antialiased relative">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          height: "34rem",
        }}
        className="absolute bg-green-800 inset-x-0 top-0"
      ></div>
      <div className="mx-auto z-10 mt-48 text-center">
        <h1 className="text-white text-5xl font-semibold">
          Welcome to <span className="text-yellow-500">the Club</span>
        </h1>
        <p className="text-green-200 mt-2">
          Become a new member in 3 easy steps
        </p>
      </div>
      <div className="max-w-xl w-full mt-24 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="px-16 py-10">
          <form onSubmit={handleSubmit}>

            {formStep === 0 && <section>
              <h2 className="font-semibold text-3xl mb-8">
                Personal Information
              </h2>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="text-input"
                value={formData.name}
                onChange={handleInputChange}
              />
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                className="text-input"
                value={formData.age}
                onChange={handleInputChange}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="text-input"
                value={formData.email}
                onChange={handleInputChange}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="text-input"
                value={formData.password}
                onChange={handleInputChange}
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="text-input"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </section>}
            {formStep === 1 && <section>
              <h2 className="font-semibold text-2xl mb-8">Experience and Availability</h2>
              <label htmlFor="experience">Years of Experience</label>
              <input
                type="text"
                id="experience"
                name="experience"
                className="text-input"
                value={formData.experience}
                onChange={handleInputChange}
              />
              <label htmlFor="startTime">Availability Start Time</label>
              <input
                type="text"
                id="startTime"
                name="startTime"
                className="text-input"
                value={formData.startTime}
                onChange={handleInputChange}
              />
              <label htmlFor="endTime">Availability End Time</label>
              <input
                type="text"
                id="endTime"
                name="endTime"
                className="text-input"
                value={formData.endTime}
                onChange={handleInputChange}
              />
            </section>}
            {formStep === 2 && <section>
              <h2 className="font-semibold text-3xl mb-8">Billing Information</h2>
              <label htmlFor="accountHolderName">Account Holder Name</label>
              <input
                type="text"
                id="accountHolderName"
                name="accountHolderName"
                className="text-input"
                value={formData.accountHolderName}
                onChange={handleInputChange}
              />
              <label htmlFor="bankName">Bank Name</label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                className="text-input"
                value={formData.bankName}
                onChange={handleInputChange}
              />
              <label htmlFor="accountNumber">Account Number</label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                className="text-input"
                value={formData.accountNumber}
                onChange={handleInputChange}
              />
              <label htmlFor="bankIFSCCode">Bank IFSC Code</label>
              <input
                type="text"
                id="bankIFSCCode"
                name="bankIFSCCode"
                className="text-input"
                value={formData.bankIFSCCode}
                onChange={handleInputChange}
              />
            </section>}
            
            {formStep === 3 &&
              (<section>
                <h2 className="font-semibold text-3xl mb-8">Congratulations</h2>
              </section>)
            }

            {formStep < 2 && (formStep > -1) && (
                <button
                  onClick={completeForm}
                  type="button"
                  className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Next 
                </button>
            )}
            {formStep === 2 && (
              <div>
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Create Account
                </button>
              </div>
            )}
            {formStep !== 3 && (
              <p onClick={() => { setLogin(); setSignup(); }}> Already have an account </p>
            )}


          </form>
        </div>
      </div>
    </div>
  )
}

export default TutorSignup
