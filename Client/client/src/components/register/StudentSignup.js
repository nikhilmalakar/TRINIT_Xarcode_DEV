import React, { useState } from "react";

const StudentSignup = () => {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: ""
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

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      age: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    setFormStep(0);
  };

  return (
    <div className="min-h-screen bg-green-900 flex flex-col items-start text-gray-900 antialiased relative">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          height: "34rem"
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
            {formStep === 0 && (
              <section>
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
              </section>
            )}

            {formStep === 1 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8">
                  Congratulations
                </h2>
                <p>You have successfully signed up!</p>
              </section>
            )}

            {formStep === 0 && (
              <button
                onClick={completeForm}
                type="button"
                className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Create Account
              </button>
            )}

            {formStep === 1 && (
              <button
                type="submit"
                className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full"
              >
                Continue
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentSignup;
