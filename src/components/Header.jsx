import React from 'react'
import Reveal from '../utils/Reveal'
import { motion } from 'framer-motion'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'

export default function Header() {
  return (
    <>
    <div className="relative overflow-hidden">
    <img src="/dotted-texture.png" className="absolute min-w-[3000px]"/>
    
    <div className="flex justify-center w-[100vw] bg-black">
        <div className="relative">
            <div className="flex xl:w-[1280px] flex-wrap justify-center">
                <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                className="w-[100vw] lg:w-[894px] max-md:h-[55vh] h-[50vh] xl:w-[640px] xl:h-[650px] bg-setColour1 flex place-items-center justify-center">
                    <div className="font-[BuiltTitling] relative">
                        <div className="absolute rotate-[270deg] top-[90px] left-[-145px] max-md:left-[-105px] max-md:top-[66px]">
                            <p className="max-md:text-[2.5rem] text-[3.25rem]">IT'S TIME FOR</p>
                        </div>
                        <div className="flex justify-center">
                            <div className="text-left">
                                <Reveal direction={"left"} delay={1.55}>
                                    <p className="max-md:text-[2.5rem] text-[4rem] lg:mb-[-20px]">CARDIO.</p>
                                </Reveal>
                                <Reveal direction={"right"} delay={1.85}>
                                    <p className="max-md:text-[2.5rem] text-[4rem] lg:mb-[-20px]">CONDITIONING.</p>
                                </Reveal>
                                <Reveal direction={"left"} delay={2.15}>
                                    <p className="max-md:text-[3rem] text-[5rem] lg:mt-[-10px]">BOXING.</p>
                                </Reveal>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img src="/pb-logo-white.png" className="max-xs:h-[110px] h-[150px] lg:hidden "/>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                className="xl:w-[640px] w-[894px] max-lg:w-[100vw] flex justify-center">
                    {/* <img src="1cropped.png" className="xl:w-[640px]"/> */}
                    <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    swipeable={false}
                    showArrows={false}>
                        <div>
                            <img src="boxing.jpg" alt="Man and woman boxing in a boxing ring" className="xl:w-[640px] xl:h-[650px]"/>
                        </div>
                        <div>
                            <img src="circuit.jpg" alt="Man doing a plank exercise on fake grass inside gym" className="xl:w-[640px] xl:h-[650px]"/>
                        </div>
                        <div>
                            <img src="group-boxing.jpg" alt="People practicing boxing sparring inside gym" className="xl:w-[640px] xl:h-[650px]"/>
                        </div>
                    </Carousel>
                </motion.div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
