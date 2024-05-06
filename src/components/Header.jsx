import React from 'react'

export default function Header() {
  return (
    <>
    <div className="flex justify-center w-[100vw] bg-black">
        <div className="flex xl:w-[1280px] flex-wrap justify-center">
            <div className="w-[894px] h-[50vh] xl:w-[640px] xl:h-[650px] bg-setColour1 flex place-items-center justify-center">
                <div className="font-[BuiltTitling] relative">
                    <div className="absolute rotate-[270deg] top-[55px] left-[-80px]">
                        <p className="text-[2rem]">IT'S TIME TO</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-left">
                            <p className="text-[4rem] mb-[-30px]">WORK HARD.</p>
                            <p className="text-[4.1rem]">TRAIN HARD.</p>
                        </div>
                    </div>
                    <p className="text-[4.5rem] m-[-40px]">SWEAT HARD.</p>
                </div>
            </div>
            <div className="w-[100vw] xl:w-[640px] flex justify-center">
                <img src="1cropped.png" className="xl:w-[640px]"/>
            </div>
        </div>
    </div>
    </>
  )
}
