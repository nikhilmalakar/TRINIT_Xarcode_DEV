import React, { useState } from "react";

const StudentLogin = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = { ...formData };
    console.log("Form Data:", loginData);
    setFormData({
      email: "",
      password: ""
    });
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
            <section>
              <h2 className="font-semibold text-3xl mb-8">
                Student Login
              </h2>
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
            </section>

            <button
              type="submit"
              className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Login
            </button>
          </form>
          <p onClick={() => { props.setLogin(false); props.setSignup(true); }}>
            Already have an account
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
