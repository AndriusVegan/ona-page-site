import React from 'react'

const Projects = () => {
  return (
    <div id="projects">
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 md:w-1/3">
              <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
                <img
                  className="w-full object-cover object-center md:h-36 lg:h-48"
                  src="https://imgs.search.brave.com/Dt26BO5JlekhkRqw8H0bOzPusAZ919eva9t6HLGTrbs/rs:fit:780:1170:1/g:ce/aHR0cHM6Ly93d3cu/ZmVhc3RpbmdhdGhv/bWUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzA4L3Zl/Z2FuLXF1ZXNhZGls/bGFzLTI0LmpwZw"
                  alt="Vegan recipes"
                />
                <div className="p-6">
                  <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                    Vegan recipes
                  </h2>
                  <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                    Vegan feasting at home
                  </h1>
                  <p className="mb-3 leading-relaxed">
                    40 MOUTHWATERING VEGAN RECIPES!
                  </p>
                  <div className="flex flex-wrap items-center ">
                    <a
                      href="https://www.feastingathome.com/vegan-dinner-recipes/"
                      target=""
                      className="inline-flex items-center text-green-500 md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
                <img
                  className="w-full object-cover object-center md:h-36 lg:h-48"
                  src="https://imgs.search.brave.com/Ljh0LoUriw6drTDL95JL6d4tGHCPjh4kWgahd3gCv5k/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/VVhHd2o0OV9wTG1m/UGY2MWZsb2lnSGFF/SyZwaWQ9QXBp"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                    Vegan recipes
                  </h2>
                  <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                    Forks over knives
                  </h1>
                  <p className="mb-3 leading-relaxed">
                    SIGN UP FOR OUR MOST COMPREHENSIVE ONLINE COOKING COURSE
                  </p>
                  <div className="flex flex-wrap items-center">
                    <a
                      href="https://www.forksoverknives.com/"
                      target=""
                      className="inline-flex items-center text-green-500 md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
                <img
                  className="w-full object-cover object-center md:h-36 lg:h-48"
                  src="https://veganparadise.org/wp-content/uploads/2022/03/veg-400-372x240.png"
                  alt="Vegan paradise"
                />
                <div className="p-6">
                  <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                    Vegan directory
                  </h2>
                  <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                    Vegan paradise
                  </h1>
                  <p className="mb-3 leading-relaxed">
                    Vegan directory for Vegans and Non-Vegans
                  </p>
                  <div className="flex flex-wrap items-center ">
                    <a
                      href="https://veganparadise.org/"
                      target=""
                      className="inline-flex items-center text-green-500 md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
