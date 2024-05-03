import React from 'react'

export default function Header() {
  return (
    <>
        <div className="flex w-[100vw] flex-wrap">
            <div className="w-[100vw] h-[50vh] bg-blue-300 flex place-items-center justify-center">
                <div className="font-[BuiltTitling] relative">
                    <div className="absolute rotate-[270deg] top-[55px] left-[-80px]">
                        <p className="text-[2rem]">IT'S TIME TO</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-left">
                            <p className="text-[4rem] mb-[-30px]">TRAIN HARD.</p>
                            <p className="text-[4rem]">SWEAT HARD.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[100vw] h-[50vh] bg-yellow-300">
                <p>Hello</p>
            </div>
        </div>
    </>
  )
}
