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

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response  = await fetch("http://localhost:3000/student/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    // console.log(data);
    // console.log(data.token);
    if(data.token){
      localStorage.setItem("token", data.token);
      window.location.href = "/";
    }
  };

  return (
    <div className=" flex flex-col items-start text-gray-900 antialiased relative">
      
      
      <div className="max-w-xl w-full rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="px-12 py-8">
          <form onSubmit={handleSubmit}>
            <section>
              <h2 className="font-semibold text-3xl mb-8 text-center text-[#2e4057]">
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
              className="mt-6 bg-[#2e4057] text-white rounded px-8 py-4 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Login
            </button>
          </form>
          <p  className="cursor-pointer text-center text-xs mt-5 text-gray-400" onClick={() => { props.setLogin(false); props.setSignup(true); }}>
            Create a New Account
          </p>
        </div>
      </div>
     </div>
  );
};

export default StudentLogin;
