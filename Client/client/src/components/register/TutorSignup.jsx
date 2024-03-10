import React, { useState } from "react";

const TutorSignup = ({ setLogin, setSignup }) => {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    yoe: "",
    availiablityS: "",
    availiablityE: "",
    holderName: "",
    accNo: "",
    IFSC: "",
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

  const handleSubmit = async (e) => {
    setLogin();
    setSignup();
    e.preventDefault();
    const response = await fetch("http://localhost:3000/tutor/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);

  };

  return (
    <div className="min-h-scree flex flex-col items-start text-gray-900 antialiased relative">
      <div className="max-w-xl w-full rounded-lg shadow-2xl bg-[#2e4057] mx-auto overflow-hidden z-10">
        <div className="px-12 py-8">
          <form onSubmit={handleSubmit}>
            {formStep === 0 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8 text-center text-white">
                  Personal Information
                </h2>
                <label className="text-white pt-1" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="text-input"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <label className="text-white pt-1" htmlFor="age">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className="text-input"
                  value={formData.age}
                  onChange={handleInputChange}
                />
                <label className="text-white pt-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="text-input"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label className="text-white pt-1" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="text-input"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {/* <label className="text-white pt-1"  htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="text-input"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              /> */}
              </section>
            )}
            {formStep === 1 && (
              <section>
                <h2 className="font-semibold text-2xl mb-8 text-center text-white">
                  Experience and Availability
                </h2>
                <label className="text-white pt-1" htmlFor="experience">
                  Years of Experience
                </label>
                <input
                  type="text"
                  id="experience"
                  name="yoe"
                  className="text-input"
                  value={formData.experience}
                  onChange={handleInputChange}
                />
                <label className="text-white pt-1" htmlFor="startTime">
                  Availability Start Time
                </label>
                <input
                  type="text"
                  id="startTime"
                  name="availiablityS"
                  className="text-input"
                  value={formData.startTime}
                  onChange={handleInputChange}
                />
                <label className="text-white pt-1" htmlFor="endTime">
                  Availability End Time
                </label>
                <input
                  type="text"
                  id="endTime"
                  name="availiablityE"
                  className="text-input"
                  value={formData.endTime}
                  onChange={handleInputChange}
                />
              </section>
            )}
            {formStep === 2 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8 text-center text-white">
                  Billing Information
                </h2>
                <label className="text-white pt-1" htmlFor="accountHolderName">
                  Account Holder Name
                </label>
                <input
                  type="text"
                  id="accountHolderName"
                  name="holderName"
                  className="text-input"
                  value={formData.accountHolderName}
                  onChange={handleInputChange}
                />
                {/* <label className="text-white pt-1" htmlFor="bankName">
                  Bank Name
                </label>
                <input
                  type="text"
                  id="bankName"
                  name="bankName"
                  className="text-input"
                  value={formData.bankName}
                  onChange={handleInputChange}
                /> */}
                <label className="text-white pt-1" htmlFor="accountNumber">
                  Account Number
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  name="accNo"
                  className="text-input"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                />
                <label className="text-white pt-1" htmlFor="bankIFSCCode">
                  Bank IFSC Code
                </label>
                <input
                  type="text"
                  id="bankIFSCCode"
                  name="IFSC"
                  className="text-input"
                  value={formData.bankIFSCCode}
                  onChange={handleInputChange}
                />
              </section>
            )}

            {formStep === 3 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8">Congratulations</h2>
              </section>
            )}

            {formStep < 2 && formStep > -1 && (
              <button
                onClick={completeForm}
                type="button"
                className="mt-6 bg-[#5bbcde] text-[#2e4057] font-bold rounded px-8 py-4 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Next
              </button>
            )}
            {formStep === 2 && (
              <div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="mt-6 bg-[#5bbcde] text-[#2e4057] font-bold rounded px-8 py-4 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Create Account
                </button>
              </div>
            )}
            {formStep !== 3 && (
              <p
                className="cursor-pointer text-center text-xs mt-5 text-gray-400"
                onClick={() => {
                  setLogin();
                  setSignup();
                }}
              >
                {" "}
                Already have an account{" "}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default TutorSignup
