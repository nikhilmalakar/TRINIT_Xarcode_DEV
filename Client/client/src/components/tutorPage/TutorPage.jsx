import React, { useState } from 'react'

const TutorPage = () => {
    return (
        <>

            <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:place-items-center lg:py-20">
                <article>
                    <div className="lg:hidden">
                        <img
                            src='https://www.spencerclarkegroup.co.uk/uploads/5005001.png'
                            alt=""
                            className="w-full lg:rounded-2xl"
                        />
                    </div>

                    <div className="hidden lg:block">
                        <img
                            src='https://www.spencerclarkegroup.co.uk/uploads/5005001.png'
                            alt=""
                            className="w-full lg:rounded-2xl"
                        />
                    </div>

                </article>

                <article className="px-8 pb-10">
                    <h2 className="bg-[#5bbcde] py-1 px-2 text-[#fff] uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-4">
                        English Tutor
                    </h2>
                    <h1 className="text-slate-900 mb-4 font-bold text-3xl lg:text-4xl">
                        Nick Tonny
                    </h1>
                    <p className="text-slate-600 mb-10 leading-relaxed">
                    Hi, My name's Nick and I'm a certified TEFL teacher with an AA (Associate of arts) degree in Education and over 15 years of experience teaching English, both in the U.S. and abroad. With advanced certificates in teaching one on one, teaching teenagers, teaching young learners, and business English.
                    </p>

                    <div className='mb-10'>
                        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-200 dark:border-gray-600 dark:text-white">
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center ps-3">
                                    <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-[#2e4057] bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-[#2e4057] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="horizontal-list-radio-license" class="w-full py-3 ms-2 text-lg font-extrabold text-gray-900 dark:text-[#2e4057]">9:00</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center ps-3">
                                <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-[#2e4057] bg-gray-100 border-gray-300 focus:ring-[#2e4057] dark:focus:ring-[#2e4057] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="horizontal-list-radio-license" class="w-full py-3 ms-2 text-lg font-extrabold text-gray-900 dark:text-[#2e4057]">14:00</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center ps-3">
                                <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-[#2e4057] bg-gray-100 border-gray-300 focus:ring-[#2e4057] dark:focus:ring-[#2e4057] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="horizontal-list-radio-license" class="w-full py-3 ms-2 text-lg font-extrabold text-gray-900 dark:text-[#2e4057]">16:00</label>
                                </div>
                            </li>
                            <li class="w-full dark:border-gray-600">
                                <div class="flex items-center ps-3">
                                <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-[#2e4057] bg-gray-100 border-gray-300 focus:ring-[#2e4057] dark:focus:ring-[#2e4057] dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="horizontal-list-radio-license" class="w-full py-3 ms-2 text-lg font-extrabold text-gray-900 dark:text-[#2e4057]">21:00</label>
                                </div>
                            </li>
                        </ul>
                    </div>


                    <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2">
                        <ul className="flex items-center gap-5">
                            <li className="text-slate-900 font-bold text-2xl">$125.00</li>
                            <li className="bg-orange-100 py-1 px-2 text-[#2e4057] tracking-wide text-sm font-bold inline-block rounded shadow">
                                50%
                            </li>
                        </ul>

                        <p className="text-slate-600 text-sm">
                            <s>$250.00</s>
                        </p>
                    </div>

                    <div className="mt-10 lg:flex items-center justify-between gap-2">


                        <div className="lg:flex-1">
                            <button className="flex items-center justify-center gap-4 bg-[#2e4057] py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full lg:mt-0 hover:bg-[#192330] transition-all duration-200">
                                Subscribe Now!
                            </button>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
}

export default TutorPage;