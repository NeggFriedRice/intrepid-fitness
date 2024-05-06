import React from 'react'

export default function Navbar() {
  return (
    <div className="flex justify-center max-lg:hidden bg-black">
        <ul className="font-[BuiltTitling] text-[2.5rem] flex gap-[150px] mt-8">
            <li>Classes</li>
            <li>Membership</li>
            <li>Talk to Us</li>
        </ul>
    </div>
  )
}
