import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-50">
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col px-5 py-24">
          <div className="mx-auto lg:w-4/6">
            <div className="h-64 overflow-hidden rounded-lg">
              <img
                alt="content"
                className="h-full w-full object-cover object-center"
                src="https://res.cloudinary.com/dynnioyzs/image/upload/v1647875789/I_am_Andrius_Vegan_koqjmy.png"
              />
            </div>
            <div className="mt-10 flex flex-col sm:flex-row">
              <div className="text-center sm:w-1/3 sm:py-8 sm:pr-8">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 text-gray-400">
                  <img
                    className="rounded-full"
                    src="https://res.cloudinary.com/dynnioyzs/image/upload/v1647882056/aj_lates_fb_prifile_photo_h6orjx.jpg"
                  />
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <h2 className="title-font mt-4 text-lg font-medium text-gray-900">
                    Andrius Vegan
                  </h2>
                  <div className="mt-2 mb-4 h-1 w-12 rounded bg-green-500"></div>
                  <p className="text-base text-gray-600">Vegan activist</p>
                </div>
              </div>
              <div className="mt-4 border-t border-gray-200 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
                <p className="mb-4 text-lg leading-relaxed">
                  I am very passionate about veganism. I follow and promote
                  plant-based diet. If you need any help or advice please get in
                  touch via form below.
                </p>
                <a className="inline-flex items-center text-green-500">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
