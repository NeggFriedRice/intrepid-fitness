import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <div id="navbar" className="flex justify-center max-lg:hidden bg-black py-4">
        <div className="relative">
          
          <motion.ul 
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1, delay: 1.25, ease: 'easeIn' }}
          className="font-[BuiltTitling] lg:text-[2rem] flex md:gap-[30px] md:text-[2rem] lg:gap-[50px] mt-8 justify-center place-items-end">
              <li className="relative">
                <img src="/pb-logo-white.png" className="h-[250px]"/>
              </li>
              <li>
                <a href="#whatWeOffer" className="navbar-itm">What we offer</a>
              </li>
              <li>
                <a href="#facilities" className="navbar-itm">Facilities</a>                
              </li>
              <li>
                <a href="#pricing" className="navbar-itm">Pricing</a>
              </li>
              <li>
                <a href="#team" className="navbar-itm">The Team</a>
              </li>
              <li>
                <a href="#contact" className="navbar-itm">Talk to us</a>
              </li>
          </motion.ul>
        </div>
    </div>
  )
}
