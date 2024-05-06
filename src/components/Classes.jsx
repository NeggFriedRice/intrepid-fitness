import React from 'react'

export default function Classes() {

    const classStyles = "flex flex-wrap justify-center my-8 place-items-center "

    return (
    <section className="p-4 flex justify-center">
        <div className="max-lg:w-[400px]">
            <div className={classStyles}>
                <div className="w-[300px] mx-4">
                    <h1 className="font-[BuiltTitling] text-[3rem]">Boxing</h1>
                    <p>Prepare to sweat! This class is high intensity with a combination of boxing drills along with bodyweight and core exercises! All levels welcome!</p>
                </div>
                <div className="w-[300px] mx-4 h-[250px] bg-gray-300"></div>
            </div>
            <div className={classStyles}>
                <div className="w-[300px] mx-4">
                    <h1 className="font-[BuiltTitling] text-[3rem]">Bootcamp</h1>
                    <p>A high intensity workout that focuses on all areas of fitness: Strength, explosive power, speed, endurance, mental toughness and balance</p>
                    <p>We mix indoors and outdoors,  use battle ropes, slam balls, tyres, beer kegs, sledge hammers and bricks for a solid but fun workout!</p>
                </div>
                <div className="w-[300px] mx-4 h-[250px] bg-gray-300"></div>
            </div>
            <div className={classStyles}>
                <div className="w-[300px] mx-4">
                    <h1 className="font-[BuiltTitling] text-[3rem]">Stretch & Core</h1>
                    <p>Focus on core strength, stabilize the pelvis and increases your mobility and fexibility. Great for injury prevention or recovery.</p>
                </div>
                <div className="w-[300px] mx-4 h-[250px] bg-gray-300"></div>
            </div>
            <div className={classStyles}>
                <div className="w-[300px] mx-4">
                    <h1 className="font-[BuiltTitling] text-[3rem]">Yoga</h1>
                    <p>A perfect class to ease back into training with focus on correct movement and technique of stretches and exercises to strengthen the core.</p>
                </div>
                <div className="w-[300px] mx-4 h-[250px] bg-gray-300"></div>
            </div>
        </div>
        <div className="h-[150px] w-[200vw] bg-blue-800 absolute rotate-[170deg] z-[-1] top-[1900px]"></div>
        <div className="h-[150px] w-[200vw] bg-blue-800 absolute rotate-[220deg] z-[-1] top-[2300px]"></div>
    </section>
    )
}
