import React, { useState } from "react";
import DropDown from "./DropDown";
import Duration from "./Duration";
import { Radio } from "@material-tailwind/react";
import { Dropdown } from 'flowbite-react';

const AddCourse = ({ setLogin, setSignup }) => {
    const [formStep, setFormStep] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [selected, setSelected] = useState("");


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
        <div className="min-h-screen flex flex-col items-start text-gray-900 antialiased relative">

            <div className="max-w-xl w-full rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
                <div className="px-12 py-8">
                    <form onSubmit={handleSubmit}>
                        {formStep === 0 && (
                            <section>
                                <h2 className="font-semibold text-3xl mb-8 text-center text-[#2e4057]">
                                    Add New Course
                                </h2>
                                
                                <DropDown />


                                <input
                                    type="hidden"
                                    id="stripe_key"
                                    name="stripe_key"
                                />

                                <label htmlFor="duration">Lecture Duration (in mins)</label>
                                    <label><input className="w-1/12 inline" type='radio' name="duration" value="30" defaultChecked></input>30</label>
                                    <label><input className="w-1/12 inline" type='radio' name="duration" value="60"></input>60</label>
                                    <label><input className="w-1/12 inline"   type='radio' name="duration" value="90"></input>90</label>
                               

                                <label htmlFor="cost">Course Price (in $)</label>
                                <input
                                    type="number"
                                    id="cost"
                                    name="cost"
                                />
                                <label htmlFor="description">Course Description</label>
                                <textarea className="border border-gray-300 w-full px-3 text-xs py-2"
                                    id="description"
                                    name="description"
                                />


                                <label htmlFor="thumbnail">Course Thumbnail</label>
                                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-100  dark:placeholder-gray-600" id="file_input" type="file" />


                            </section>
                        )}


                        <div>

                            <button
                                type="submit"
                                className="mt-6 bg-[#2e4057] text-white rounded px-8 py-4 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                Create Course
                            </button>
                        </div>



                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;
