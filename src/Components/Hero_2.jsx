import React from 'react'

const Hero_2 = () => {
    return (
        <>
            <div className="flex justify-between gap-100 px-4 pt-16 mt-[160px] mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full bg-hero2 rounded-4xl">
                <div className="flex-[0_0_80%]">
                    <div className="mb-16 lg:max-w-lg lg:mb-0">
                        <div className="max-w-xl mb-6">

                            <h2 className="w-full mb-6 text-7xl font-extrabold font-tusker text-white ">
                                We Create Digital Products Driven by Courage, Imagination, and Results

                            </h2>
                            <p className="mb-6 text-lg font-medium font-poppins text-white ">
                                At Stuvio, we first understand what your real need is. We then build strategies and solutions that are effective and result-oriented. We create products and marketing campaigns that will delight your customers.
                            </p>
                        </div>
                        <div className="flex items-center">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-blue-600 transition duration-200 rounded shadow-md bg-white hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Our Services
                            </a>

                        </div>
                    </div>
                </div>                <div className="flex-[20%]">
                    <img
                        src="https://kitwind.io/assets/kometa/full-browser.png"
                        className="w-3xl h-auto object-contain rounded shadow-2xl"
                        alt="Browser illustration"
                    />
                </div>
            </div>
        </>
    )
}

export default Hero_2