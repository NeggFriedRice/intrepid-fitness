import React from 'react'

export default function Classes() {
  return (
    <>
    <div className="classes bg-[url('/gymfloor.png')] bg-cover max-lg:bg-[url('https://static.wixstatic.com/media/b8366a_cb4a9f2ab9b44f04a9b11fb6dc408e03f000.jpg/v1/fill/w_240,h_426,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/b8366a_cb4a9f2ab9b44f04a9b11fb6dc408e03f000.jpg')]">
        <div className="flex justify-center bg-setColour1 bg-opacity-85 pt-8">
            <h1 className="font-[BuiltTitling] text-[5rem]">Classes</h1>
        </div>
        <section className="flex justify-center bg-setColour1 bg-opacity-85 pb-16">
            <div className="max-md:w-[600px] max-lg:w-[800px] xl:w-[1280px] relative xl:flex xl:flex-wrap justify-center text-[1.5rem]">
                <div className="flex flex-wrap justify-center place-items-center my-8">
                    <div className="w-[300px]">
                        <h1 className="font-[BuiltTitling] text-[3rem]"><span className="font-[Staatliches] text-[2.5rem]">01. </span>Boxing</h1>
                        <p className="font-[BuiltTitling] text-[2rem]">Prepare to sweat</p>
                        <p className="font-[Lato]">A high intensity class with a combination of boxing drills along with body weight and core exercises! All levels welcome!</p>
                    </div>
                    <div className="w-[300px] mx-4 h-[250px] bg-gray-300"></div>
                </div>
                <div className="flex flex-wrap justify-center place-items-center my-8">
                    <div className="w-[300px]">
                        <h1 className="font-[BuiltTitling] text-[3rem]"><span className="font-[Staatliches] text-[2.5rem]">02. </span>Bootcamp</h1>
                        <p className="font-[BuiltTitling] text-[2rem]">All Rounder</p>
                        <p className="font-[Lato]">A workout that focuses on all areas of fitness: strength, explosive power, speed, endurance, mental toughness and balance</p>
                    </div>
                    <div className="w-[300px] mx-4 h-[250px] bg-gray-300"></div>
                </div>
                <div className="flex flex-wrap justify-center place-items-center my-8">
                    <div className="w-[300px]">
                        <h1 className="font-[BuiltTitling] text-[3rem]"><span className="font-[Staatliches] text-[2.5rem]">03. </span>Stretch & Core</h1>
                        <p className="font-[BuiltTitling] text-[2rem]">Stabilise and Strengthen</p>
                        <p className="font-[Lato]">Focus on core strength, stabilise the pelvis and increases your mobility and fexibility. Great for injury prevention or recovery.</p>
                    </div>
                    <div className="w-[300px] mx-4 h-[250px] bg-gray-300"></div>
                </div>
                <div className="flex flex-wrap justify-center place-items-center my-8">
                    <div className="w-[300px]">
                        <h1 className="font-[BuiltTitling] text-[3rem]"><span className="font-[Staatliches] text-[2.5rem]">04. </span>Yoga</h1>
                        <p className="font-[BuiltTitling] text-[2rem]">Meditate & Relax</p>
                        <p className="font-[Lato]">A perfect class to ease back into training with focus on correct movement and technique of stretches and exercises to strengthen the core.</p>
                    </div>
                    <div className="w-[300px] mx-4 h-[250px] bg-gray-300"></div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}
