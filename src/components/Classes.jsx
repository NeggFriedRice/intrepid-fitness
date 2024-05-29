import React from 'react'
import Reveal from '../utils/Reveal'

export default function Classes() {
  return (
    <>
    <div id="whatWeOffer" className="classes bg-[url('/circuit-class-bg.png')] bg-cover text-white ">
        <div className="flex justify-center bg-black bg-opacity-70 pt-24">
            <h1 className="font-[BuiltTitling] text-[5rem] max-md:text-[4rem] relative">What we offer</h1>
        </div>
        <section className="flex justify-center bg-black bg-opacity-70 pb-16">
            <div className="max-md:w-[600px] max-lg:w-[800px] xl:w-[1280px] relative xl:flex xl:flex-wrap justify-center text-[1.5rem]">

                <div className="flex flex-wrap justify-center place-items-center my-8 ">
                    <div className="max-lg:w-[80vw] lg:w-[600px] relative">
                        <div className="h-[200px] max-lg:w-[90vw] w-[670px] bg-setColour1 absolute top-[40px] left-[-50px]"></div>
                        <Reveal direction={"left"} delay={0.25}>
                            <h1 className="font-[BuiltTitling] text-[3rem]"><span className="font-[Staatliches] text-[2.5rem]">01. </span>One on One</h1>
                        </Reveal>
                        <div className="relative">
                        <p className="font-[BuiltTitling] text-[2rem]">Personal Training</p>
                        <p className="font-[Lato] max-lg:text-[1rem]">A high intensity personal training session including boxing, cardio and weights with specifically tailored work outs to suit your fitness and boxing goals.</p>
                        <p className="font-[Lato] max-lg:text-[1rem] my-2">Available in 30 and 45 minute sessions based in Ringwood</p>
                        </div>
                    </div>
                    <div className="w-[300px] mx-4 h-[300px] bg-gray-300 relative mb-4">
                        <video autoPlay loop muted src="/videos/boxing-1-on-1.mp4" className="h-[300px] w-[300px]"/>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center place-items-center my-8">
                    <div className="max-lg:w-[80vw] lg:w-[600px] relative">
                    <div className="h-[200px] max-lg:w-[90vw] w-[670px] bg-setColour1 absolute top-[40px] left-[-50px]"></div>
                        <Reveal direction={"right"} delay={0.25}>
                            <h1 className="font-[BuiltTitling] text-[3rem]"><span className="font-[Staatliches] text-[2.5rem]">02. </span>Group Training</h1>
                        </Reveal>
                        <div className="relative">
                            <p className="font-[BuiltTitling] text-[2rem]">Grab a mate</p>
                            <p className="font-[Lato] max-lg:text-[1rem]">A 60 minute training session in a group setting.</p>
                            <p className="font-[Lato] max-lg:text-[1rem] my-2">Pure Boxing group sessions are a great way to get fit while learning the art of boxing</p>
                        </div>
                    </div>
                    <div className="w-[300px] mx-4 h-[250px] bg-gray-300 relative mb-16">
                        <video autoPlay loop muted src="/videos/group-class.mp4" className="h-[300px] w-[300px]"/>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center place-items-center my-8">
                    <div className="max-lg:w-[80vw] lg:w-[600px] relative">
                    <div className="h-[200px] max-lg:w-[90vw] w-[670px] bg-setColour1 absolute top-[40px] left-[-50px]"></div>
                        <Reveal direction={"left"} delay={0.25}>
                            <h1 className="font-[BuiltTitling] text-[3rem]"><span className="font-[Staatliches] text-[2.5rem]">03. </span>Casual boxing</h1>
                        </Reveal>
                        <div className="relative">
                            <p className="font-[BuiltTitling] text-[2rem]">You do you</p>
                            <p className="font-[Lato] max-lg:text-[1rem]">Have the freedom to do what works for you.</p>
                            <p className="font-[Lato] max-lg:text-[1rem] my-2">Hit the weights, put on the gloves, jump on some cardio, it's all up to you!</p>
                        </div>
                    </div>
                    <div className="w-[300px] mx-4 h-[250px] bg-gray-300 relative">
                        <video autoPlay loop muted src="/videos/weightlifting.mp4" className="h-[300px] w-[300px]"/>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center my-16">
                    <h1 className="font-[BuiltTitling] text-[5rem]">Our Timetable</h1>
                    <img src="/pb-calendar.png" className="px-4"/>
                    <div className="flex flex-wrap justify-center items-center">
                        <a href="https://www.instagram.com/pure_boxing/" className="flex place-items-center">
                            <img src="/instagram.png" className="h-[70px] max-md:h-[45px] hover:rotate-[366deg] hover:scale-105 transition-all duration-300"/>
                        </a>
                        <a href="https://www.facebook.com/PureBoxingAu/" className="flex place-items-center">
                            <img src="/facebook-icon.png" className="h-[70px] max-md:h-[45px] hover:rotate-[366deg] hover:scale-105 transition-all duration-300"/>
                        </a>
                        <p className="font-[Lato] max-md:text-[1rem] px-4">Follow us on Instagram and Facebook to keep up to date with our pop up classes</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}
