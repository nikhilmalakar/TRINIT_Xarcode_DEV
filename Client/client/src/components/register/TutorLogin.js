import React, { useState } from "react";

const TutorLogin = ({ setLogin, setSignup }) => {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
  };

  return (
    <div className=" flex flex-col items-start text-gray-900 antialiased relative">
      
      <div className="max-w-xl w-full rounded-lg shadow-2xl bg-[#2e4057] mx-auto overflow-hidden z-10">
        <div className="px-12 py-8">
          <form onSubmit={handleSubmit}>

            {formStep === 0 && <section>
              <h2 className="font-semibold text-3xl mb-8 text-center text-white">
                Tutor Login
              </h2>
              <label className="text-white" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="text-input"
                value={formData.email}
                onChange={handleInputChange}
              />
              <label className="text-white pt-5" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="text-input"
                value={formData.password}
                onChange={handleInputChange}
              />
            </section>}
            {formStep === 1 &&
              (<section>
                <h2 className="font-semibold text-3xl mb-8">Congratulations World</h2>
              </section>)
            }

            {formStep < 1 && (formStep > -1) && (
              <div>
                <button
                  onClick={completeForm}
                  type="submit"
                  className="mt-6 bg-[#5bbcde] text-[#2e4057] font-bold rounded px-8 py-4 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Login 
                </button>
                <p  className="cursor-pointer text-center text-xs mt-5 text-gray-400" onClick={() => { setLogin(); setSignup(); }}> Create a New Account </p>
              </div>
            )}

          </form>
        </div>
      </div>
    </div>
  );
};

export default TutorLogin;
