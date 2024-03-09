import React from 'react'
import ClipPath from "../home/ClipPath";

export const TopTutors = () => {
    return (
        <div className="container relative z-2">
            <div className="flex flex-wrap gap-10 mb-10">

                <div
                    className="tutor-card block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                    style={{
                        // backgroundImage: `url(../../assets/img/home/card-1.svg)`,
                    }}
                >
                    <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                        <h5 className="h5 mb-5">Learn English</h5>
                        <p className="body-2 mb-6 text-n-3">From top tutors</p>
                        <div className="flex items-center mt-auto">
                            <div>

                                <img
                                    src='https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png'
                                    width={48}
                                    height={48}
                                />
                            </div>
                            <div>
                                <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                                    Learn Spanish
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* {item.light && <GradientLight />} */}

                    <div
                        className="tutor-clippath absolute inset-0.5 bg-n-8"
                    // style={{ clipPath: 'url()' }}
                    // style={{ clipPath: "url(../../assets/img/home/card-1.svg)" }}
                    >
                        <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                            {(
                                <img
                                    src='https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png'
                                    width={380}
                                    height={362}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                    </div>

                    <ClipPath />
                </div>
            </div>
        </div>
    );
}
