import React from 'react'

export default function Membership() {
  return (
    <>
        <div className="flex justify-center bg-black py-4">
            <div className="">
                <div className="bg-white text-black w-[70vw] rounded-lg text-center my-12 py-4 border-4 border-yellow-500 font-[BuiltTitling]">
                    <h3 className="text-[1.5rem]">Gold Membership</h3>
                    <p className="text-[2rem]">$47 per week</p>
                    <p className="text-[1.25rem]">$88 PW for couples</p>
                    <div className="flex justify-center py-4">
                        <div className="h-[1px] w-[60%] bg-yellow-500"></div>
                    </div>
                    <ul className="">
                        <li>Unlimited group classes</li>
                        <li>Open gym access</li>
                        <li>Sauna access</li>
                        <li>Recovery lounge access</li>
                        <li>Coffee & breakfast</li>
                        <li>Nutrition app access</li>
                    </ul>
                </div>
                <div className="bg-white text-black w-[70vw] rounded-lg text-center my-12 py-4 border-4 border-gray-300 font-[BuiltTitling]">
                    <h3 className="text-[1.5rem]">Silver Membership</h3>
                    <p className="text-[2rem]">$37 per week</p>
                    <div className="flex justify-center py-4">
                        <div className="h-[1px] w-[60%] bg-gray-300"></div>
                    </div>
                    <ul className="">
                        <li>2 group classes per week (incl. yoga)</li>
                        <li>Sauna access</li>
                        <li>Recovery lounge access</li>
                        <li>Coffee & breakfast</li>
                        <li>Nutrition app access</li>
                    </ul>
                </div>
                <div className="bg-white text-black w-[70vw] rounded-lg text-center my-12 py-4 border-4 border-red-600 font-[BuiltTitling]">
                    <h3 className="text-[1.5rem]">Sporting Groups</h3>
                    <p className="text-[2rem]">$10 per session</p>
                    <div className="flex justify-center py-4">
                        <div className="h-[1px] w-[60%] bg-red-600"></div>
                    </div>
                    <ul className="">
                        <li>45 minute sessions</li>
                        <li>Healthy snacks included</li>
                    </ul>
                </div>
                <div className="bg-white text-black w-[70vw] rounded-lg text-center my-12 py-4 border-4 border-green-300 font-[BuiltTitling]">
                    <h3 className="text-[1.5rem]">Juniors Strength Academy</h3>
                    <p className="text-[2rem]">$37 per week</p>
                    <div className="flex justify-center py-4">
                        <div className="h-[1px] w-[60%] bg-green-300"></div>
                    </div>
                    <ul className="">
                        <li>12 - 18 year old</li>
                        <li>Unlimited group classes</li>
                        <li>Open gym access</li>
                        <li>Recovery lounge access</li>
                        <li>Breakfast</li>
                        <li>Nutrition app access</li>
                    </ul>
                </div>
                <div className="bg-white text-black w-[70vw] rounded-lg text-center my-12 py-4 border-4 border-violet-400 font-[BuiltTitling]">
                    <h3 className="text-[1.5rem]">Recovery Lounge Membership</h3>
                    <p className="text-[2rem]">$37 per week</p>
                    <div className="flex justify-center py-4">
                        <div className="h-[1px] w-[60%] bg-violet-400"></div>
                    </div>
                    <ul className="">
                        <li>Unlimited sauna access</li>
                        <li>Unlimited compression boots use</li>
                        <li>Unlimited foot massager use</li>
                        <li>Recovery lounge access</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}
