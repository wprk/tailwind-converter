import React, { useState } from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

import Transition from './Transition'
import FullLogoImg from '../images/logo-light.png'

import { APP_PATH } from '../config/index'

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <nav className="bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-1 items-center">
            <div className="flex-shrink-0">
              <a href="/">
                <img className="h-8 w-auto" src={FullLogoImg} alt="PledgeLedger Logo" />
              </a>
            </div>
            <div className="flex flex-1 hidden md:block">
              <div className="flex items-baseline md:justify-between">
                <div className="flex items-baseline">
                  <NavLink to="/how-it-works" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700" activeClassName="text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">
                    How it works
                  </NavLink>                
                </div>
                <div className="flex items-baseline">

                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <svg className={classNames('h-6','w-6', { block: !mobileNavOpen, hidden: mobileNavOpen })} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={classNames('h-6','w-6', { block: mobileNavOpen, hidden: !mobileNavOpen })} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={classNames('md:hidden', { block: mobileNavOpen, hidden: !mobileNavOpen })}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          {/*
          <a href="/discover" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Discover venues</a>
          <a href="/how-it-works" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">How it works</a>
          <a href="/register-your-venue" className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Venue registration</a>
          <a href={`${APP_PATH}/login`} className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Login</a>
          */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
