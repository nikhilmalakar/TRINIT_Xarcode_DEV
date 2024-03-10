import React, { useState } from "react";

const StudentSignup = ({setLogin, setSignup}) => {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    // confirmPassword: ""
  });

  // const completeForm = () => {
  //   // setFormStep(cur => cur + 1);
  // };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    setLogin();
    setSignup();
    e.preventDefault();
    // console.log(formData);
    const response  = await fetch("http://localhost:3000/student/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
  };

  return (
    <div className="min-h-screen flex flex-col items-start text-gray-900 antialiased relative">
      
      <div className="max-w-xl w-full rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="px-12 py-8">
          <form onSubmit={handleSubmit}>
            {formStep === 0 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8 text-center text-[#2e4057]">
                  Register Yourself
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
                {/* <label htmlFor="confirmPassword">Confirm Password</label>
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

            {/* {formStep === 1 && (
              <section>
                <h2 className="font-semibold text-3xl mb-8">
                  Congratulations
                </h2>
                <p>You have successfully signed up!</p>
              </section>
            )} */}

            {formStep === 0 && (
              <div>

                <button
                  type="submit"
                  className="mt-6 bg-[#2e4057] text-white rounded px-8 py-4 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Create Account
                </button>
                <p  className="cursor-pointer text-center text-xs mt-5 text-gray-400" onClick={() => { setLogin(); setSignup(); }}> Already have an account </p>
              </div>
            )}

            {/* {formStep === 1 && (
              <div>
                <button
                  type="submit"
                  className="mt-6 bg-green-600 text-white rounded px-8 py-4 w-full"
                >
                  Continue
                </button>
              </div>
            )} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentSignup;
