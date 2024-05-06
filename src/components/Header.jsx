import React from 'react'
import Reveal from '../utils/Reveal'

export default function Header() {
  return (
    <>
    <div className="flex justify-center w-[100vw] bg-black">
        <div className="flex xl:w-[1280px] flex-wrap justify-center">
            <div className="w-[100vw] lg:w-[894px] h-[50vh] xl:w-[640px] xl:h-[650px] bg-setColour1 flex place-items-center justify-center">
                <div className="font-[BuiltTitling] relative">
                    <div className="absolute rotate-[270deg] top-[80px] left-[-145px]">
                        <p className="text-[3.5rem]">IT'S TIME TO</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-left">
                            <Reveal direction={"left"} delay={0.35}>
                                <p className="text-[4rem] mb-[-20px]">WORK HARD.</p>
                            </Reveal>
                            <Reveal direction={"right"} delay={0.65}>
                                <p className="text-[4.1rem] mb-[-20px]">TRAIN HARD.</p>
                            </Reveal>
                        </div>
                    </div>
                    <Reveal direction={"left"} delay={0.95}>
                        <p className="text-[4.5rem] mt-[-10px]">SWEAT HARD.</p>
                    </Reveal>
                </div>
            </div>
            <div className="xl:w-[640px] flex justify-center">
                <img src="1cropped.png" className="xl:w-[640px]"/>
            </div>
        </div>
    </div>
    </>
  )
}
