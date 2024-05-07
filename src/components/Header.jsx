import React from 'react'
import Reveal from '../utils/Reveal'
import { motion } from 'framer-motion'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'

export default function Header() {
  return (
    <>
    <div className="flex justify-center w-[100vw] bg-black">
        <div className="flex xl:w-[1280px] flex-wrap justify-center">
            <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="w-[100vw] lg:w-[894px] h-[50vh] xl:w-[640px] xl:h-[650px] bg-setColour1 flex place-items-center justify-center">
                <div className="font-[BuiltTitling] relative">
                    <div className="absolute rotate-[270deg] top-[80px] left-[-135px]">
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
                        <img src="1cropped.png" className="xl:w-[640px] xl:h-[650px]"/>
                    </div>
                    <div>
                        <img src="2cropped.jpg" className="xl:w-[640px] xl:h-[650px]"/>
                    </div>
                    <div>
                        <img src="3cropped.jpg" className="xl:w-[640px] xl:h-[650px]"/>
                    </div>
                </Carousel>
            </motion.div>
        </div>
    </div>
    </>
  )
}
