import React from 'react'

const Nav = () => {
  return (
    <div>
      <header className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
          <nav className="flex flex-wrap items-center text-base md:ml-auto lg:w-2/5">
            <a href="#home" className="mr-5 hover:text-gray-900">
              Home
            </a>
            <a href="#about" className="mr-5 hover:text-gray-900">
              About
            </a>
            <a href="#about" className="mr-5 hover:text-gray-900">
              Projects
            </a>
            <a href="#testimonials" className="hover:text-gray-900">
              Testimony
            </a>
          </nav>
          <a className="title-font order-first mb-4 flex items-center font-medium text-gray-900 md:mb-0 lg:order-none lg:w-1/5 lg:items-center lg:justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="h-10 w-10 rounded-full bg-green-700 p-2 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Andrius Vegan</span>
          </a>
          <div className="ml-5 inline-flex lg:ml-0 lg:w-2/5 lg:justify-end">
            <a
              href="#contact"
              className="mt-4 inline-flex items-center rounded border-0 bg-green-600 py-1 px-3 text-white hover:bg-green-500 focus:outline-none md:mt-0"
            >
              Contact Me
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="ml-1 h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Nav
