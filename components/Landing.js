import React from 'react'

const Landing = () => {
  return (
    <div id="landing">
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
            <img
              className="rounded object-cover object-center"
              alt="hero"
              //   src="https://res.cloudinary.com/dynnioyzs/image/upload/v1647869348/undraw_dev_productivity_re_fylf_ts5lma.svg"
              // />
              src="https://res.cloudinary.com/dynnioyzs/image/upload/v1647871211/undraw_agree_re_hor9_qbojlx.svg"
            />
          </div>
          <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
            <h1 className="title-font mb-4 text-3xl font-medium text-green-700 sm:text-4xl">
              Hi, I am Andrius Vegan{' '}
            </h1>
            <br className="hidden lg:inline-block" />
            {/* <h1 className="title-font mb-4 text-3xl font-medium text-green-700 sm:text-4xl">
              You should go vegan too
            </h1> */}
            <p className="mb-8 leading-relaxed">
              You should go vegan too. Following plant-based lifestyle is the
              best for your health, for the planet and for the animals, who are
              needlessly killed every day
            </p>
            <div className="flex justify-center">
              <button className="inline-flex rounded border-0 bg-green-500 py-2 px-6 text-lg text-white hover:bg-green-600 focus:outline-none">
                Hire Me
              </button>
              <button className="ml-4 inline-flex rounded border-0 bg-gray-100 py-2 px-6 text-lg text-gray-700 hover:bg-gray-200 focus:outline-none">
                Find out more
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
