import React from 'react'

export default function Header() {
  return (
    <>
        <div className="flex w-[100vw] flex-wrap">
            <div className="w-[100vw] h-[50vh] bg-setColour1 flex place-items-center justify-center">
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
            <div className="w-[100vw] flex justify-center">
                <img src="1cropped.png" />
            </div>
        </div>
    </>
  )
}
