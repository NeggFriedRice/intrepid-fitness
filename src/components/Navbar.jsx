import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <div className="flex justify-center max-lg:hidden bg-black">
        <motion.ul 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 1, delay: 1.25, ease: 'easeIn' }}
        className="font-[BuiltTitling] text-[2.5rem] flex gap-[150px] mt-8">
            <li>Classes</li>
            <li>Membership</li>
            <li>Talk to Us</li>
        </motion.ul>
    </div>
  )
}
