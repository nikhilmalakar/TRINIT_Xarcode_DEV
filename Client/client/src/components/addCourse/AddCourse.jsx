import React, { useState } from "react";
import DropDown from "./DropDown.jsx";
import DropDown2 from "./DropDown2.jsx";

const AddCourse = () => {
    const [formData, setFormData] = useState({
        duration: "30",
        cost: "",
        selectedLanguage: "", 
        selectedProficiency: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLanguageChange = (selectedLanguage) => {
        setFormData({
            ...formData,
            selectedLanguage: selectedLanguage,
        });
    };
    const handleProficiency = (selectedLanguage) => {
        setFormData({
            ...formData,
            selectedProficiency: selectedLanguage,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            duration: "30",
            cost: "",
            selectedLanguage: "", 
            selectedProficiency: "",
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-start text-gray-900 antialiased relative">
            <div className="max-w-xl w-full rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
                <div className="px-12 py-5">
                    <form onSubmit={handleSubmit}>
                        <section>
                            <h2 className="font-semibold text-3xl mb-8 text-center text-[#2e4057]">
                                Add New Course
                            </h2>

                            <DropDown2 onLanguageChange={handleLanguageChange}/>
                            <DropDown onLanguageChange={handleProficiency}/>

                            <label htmlFor="duration">Lecture Duration (in mins)</label>
                            <label>
                                <input
                                    className="w-1/12 inline"
                                    type="radio"
                                    name="duration"
                                    value="30"
                                    checked={formData.duration === "30"}
                                    onChange={handleChange}
                                />
                                30
                            </label>
                            <label>
                                <input
                                    className="w-1/12 inline"
                                    type="radio"
                                    name="duration"
                                    value="60"
                                    checked={formData.duration === "60"}
                                    onChange={handleChange}
                                />
                                60
                            </label>
                            <label>
                                <input
                                    className="w-1/12 inline"
                                    type="radio"
                                    name="duration"
                                    value="90"
                                    checked={formData.duration === "90"}
                                    onChange={handleChange}
                                />
                                90
                            </label>

                            <label htmlFor="cost">Course Price (in $)</label>
                            <input
                                type="number"
                                id="cost"
                                name="cost"
                                value={formData.cost}
                                onChange={handleChange}
                            />
                            <label htmlFor="description">Course Description</label>
                            <textarea
                                className="border border-gray-300 w-full px-3 text-xs py-2"
                                id="description"
                                name="description"
                            />

                            <label htmlFor="thumbnail">Course Thumbnail</label>
                            <input
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-100  dark:placeholder-gray-600"
                                id="file_input"
                                type="file"
                            />
                        </section>

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