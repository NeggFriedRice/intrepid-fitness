import React from 'react'

export default function Classes() {

    const boxStyles = "flex flex-wrap justify-center place-items-center my-8"

    return (
    <section className="p-4 flex justify-center">
        <div className="max-lg:w-[400px]">
            <div className={boxStyles}>
                <div className="w-[300px] mx-4">
                    <h1 className="font-[BuiltTitling] text-[3rem]">Boxing</h1>
                    <p className="font-[BuiltTitling] text-[1.5rem]">Prepare to sweat</p>
                    <p>A high intensity class with a combination of boxing drills along with body weight and core exercises! All levels welcome!</p>
                </div>
                <div className="w-[300px] h-[250px] bg-gray-300"></div>
            </div>
            <div className={boxStyles}>
                <div className="w-[300px] mx-4">
                    <h1 className="font-[BuiltTitling] text-[3rem]">Bootcamp</h1>
                    <p className="font-[BuiltTitling] text-[1.5rem]">All Rounder</p>
                    <p>A workout that focuses on all areas of fitness: strength, explosive power, speed, endurance, mental toughness and balance</p>
                    <p className="py-2">We mix indoors and outdoors utilising battle ropes, slam balls, tyres, beer kegs, sledge hammers and bricks for a solid but fun workout!</p>
                </div>
                <div className="w-[300px] h-[250px] bg-gray-300"></div>
            </div>
            <div className={boxStyles}>
                <div className="w-[300px] mx-4">
                    <h1 className="font-[BuiltTitling] text-[3rem]">Stretch & Core</h1>
                    <p className="font-[BuiltTitling] text-[1.5rem]">Stabilise and Strengthen</p>
                    <p>Focus on core strength, stabilise the pelvis and increases your mobility and fexibility. Great for injury prevention or recovery.</p>
                </div>
                <div className="w-[300px] h-[250px] bg-gray-300"></div>
            </div>
            <div className={boxStyles}>
                <div className="w-[300px] mx-4">
                    <h1 className="font-[BuiltTitling] text-[3rem]">Yoga</h1>
                    <p className="font-[BuiltTitling] text-[1.5rem]">Meditate & Relax</p>
                    <p>A perfect class to ease back into training with focus on correct movement and technique of stretches and exercises to strengthen the core.</p>
                </div>
                <div className="w-[300px] h-[250px] bg-gray-300"></div>
            </div>
        </div>
    </section>
    )
}
