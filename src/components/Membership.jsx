import React from 'react'

export default function Membership() {
  return (
    <>
        <div id="pricing" className="flex justify-center bg-black pt-8">
            <h1 className="font-[BuiltTitling] text-[5rem] text-white pt-16 pb-4 lg:pb-16">Pricing</h1>
        </div>
        <div className="flex flex-wrap justify-center bg-black pb-4">
            <div className="gold-box bg-white text-black w-[65vw] lg:w-[400px] rounded-lg text-center my-4 lg:my-4 py-4 mx-4 border-4 lg:border-8 border-yellow-400 font-[BuiltTitling]">
                <h3 className="text-[2rem] lg:text-[2rem]">Drop-in Sessions</h3>
                <p className="text-[4rem] lg:text-[5rem]">$23</p>
                <p className="text-[2rem] lg:text-[2rem]">Per visit</p>
                <div className="flex justify-center py-4">
                    <div className="h-[1px] w-[60%] bg-yellow-300"></div>
                </div>
                <ul className="max-lg:text-[1.25rem] text-[1.5rem] font-[Lato]">
                    <li><span className="text-red-500">+</span> Group training classes</li>
                    <li><span className="text-red-500">+</span> Casual boxing</li>
                    <li><span className="text-red-500">+</span> Open gym access</li>
                </ul>
            </div>
            <div className="sport-box bg-white text-black w-[65vw] lg:w-[400px] rounded-lg text-center my-4 lg:my-4 py-4 mx-4 border-4 lg:border-8 border-red-600 font-[BuiltTitling]">
                <h3 className="text-[2rem] lg:text-[2rem]">10 Session Package</h3>
                <p className="text-[4rem] lg:text-[5rem]">$180</p>
                <p className="text-[2rem] lg:text-[2rem]">Valid for 6 months</p>
                <div className="flex justify-center py-4">
                    <div className="h-[1px] w-[60%] bg-red-300"></div>
                </div>
                <ul className="max-lg:text-[1.25rem] text-[1.5rem] font-[Lato]">
                    <li><span className="text-red-700 ">+</span> Group training classes</li>
                    <li><span className="text-red-700">+</span> Casual boxing</li>
                    <li><span className="text-red-700">+</span> Open gym access</li>
                </ul>
            </div>
            <div className="recovery-box bg-white text-black w-[65vw]  lg:w-[400px] rounded-lg text-center my-4 lg:my-4 py-4 mx-4 border-4 lg:border-8 border-violet-400 font-[BuiltTitling]">
                <h3 className="text-[2rem] lg:text-[2rem]">Personal Training</h3>
                <p className="text-[4rem] lg:text-[5rem]">$XX</p>
                <p className="text-[2rem] lg:text-[2rem]">Per session</p>
                <div className="flex justify-center py-4">
                    <div className="h-[1px] w-[60%] bg-violet-400"></div>
                </div>
                <ul className="max-lg:text-[1.25rem] text-[1.5rem] font-[Lato]">
                    <li><span className="text-red-500">+</span> One-on-one coaching</li>
                    <li><span className="text-red-500">+</span> Personalised workout</li>
                </ul>
            </div>
        </div>
    </>
  )
}
