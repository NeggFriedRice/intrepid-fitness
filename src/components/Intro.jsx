import React from 'react'


export default function Intro() {
  return (
    <div className="flex justify-center py-8 bg-black font-[BuiltTitling] text-[2rem] text-center">
        <div className="text-[2rem] lg:text-[3.5rem] relative">
            <p>2/107-113 Heatherdale Road</p>
            <p>Ringwood</p>
            <div className="h-[2.25rem] lg:h-[4rem] ">
              <p className="hover:text-[2.25rem] hover:text-setColour1 hover:lg:text-[4rem] relative transition-all duration-300 delay-50">
                <a href="tel:0407853346" className="absolute ml-auto mr-auto left-0 right-0">0407 853 346</a>
              </p>
            </div>
        </div>
    </div>
  )
}
