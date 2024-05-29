import React from 'react'


export default function Intro() {
  return (
    <div className="flex justify-center py-8 bg-black font-[BuiltTitling] text-[2rem] text-center">
        <div className="text-[2rem] lg:text-[3.5rem] relative">
            <p>2/107-113 Heatherdale Road</p>
            <p>Ringwood</p>
            <p className="hover:text-[2.25rem] hover:text-setColour1 hover:lg:text-[4rem] transition-all duration-300 delay-50">
              <a href="tel:0407853346">0407 853 346</a>
            </p>
        </div>
    </div>
  )
}
