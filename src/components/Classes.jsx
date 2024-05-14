import React from 'react'
import Reveal from '../utils/Reveal'

export default function Classes() {
  return (
    <>
    <div className="classes bg-[url('/gymfloor.png')] bg-cover max-lg:bg-[url('https://static.wixstatic.com/media/b8366a_cb4a9f2ab9b44f04a9b11fb6dc408e03f000.jpg/v1/fill/w_240,h_426,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/b8366a_cb4a9f2ab9b44f04a9b11fb6dc408e03f000.jpg')]">
        <div className="flex justify-center bg-setColour1 bg-opacity-85 pt-16">
            <h1 className="font-[BuiltTitling] text-[5rem] max-md:text-[4rem]">What we offer</h1>
        </div>
        <section className="flex justify-center bg-setColour1 bg-opacity-85 pb-16">
            <div className="max-md:w-[600px] max-lg:w-[800px] xl:w-[1280px] relative xl:flex xl:flex-wrap justify-center text-[1.5rem]">

                <div className="flex flex-wrap justify-center place-items-center my-8 ">
                    <div className="max-lg:w-[80vw] lg:w-[600px] relative">
                        <div className="h-[200px] max-lg:w-[90vw] w-[670px] bg-red-700 absolute top-[40px] left-[-50px]"></div>
                        <Reveal direction={"left"} delay={0.25}>
                            <h1 className="font-[BuiltTitling] text-[3rem]"><span className="font-[Staatliches] text-[2.5rem]">01. </span>One on One</h1>
                        </Reveal>
                        <div className="relative">
                        <p className="font-[BuiltTitling] text-[2rem]">Personal Training</p>
                        <p className="font-[Lato] max-lg:text-[1rem]">A high intensity personal training session including boxing, cardio and weights with specifically tailored work outs to suit your fitness and boxing goals.</p>
                        <p className="font-[Lato] max-lg:text-[1rem] my-2">Available in 30 and 45 minute sessions based in Ringwood</p>
                        </div>
                    </div>
                    <div className="w-[300px] mx-4 h-[250px] bg-gray-300 relative"></div>
                </div>
                <div className="flex flex-wrap justify-center place-items-center my-8">
                    <div className="max-lg:w-[80vw] lg:w-[600px] relative">
                    <div className="h-[200px] max-lg:w-[90vw] w-[670px] bg-red-700 absolute top-[40px] left-[-50px]"></div>
                        <Reveal direction={"right"} delay={0.25}>
                            <h1 className="font-[BuiltTitling] text-[3rem]"><span className="font-[Staatliches] text-[2.5rem]">02. </span>Group Training</h1>
                        </Reveal>
                        <div className="relative">
                            <p className="font-[BuiltTitling] text-[2rem]">Grab a mate</p>
                            <p className="font-[Lato] max-lg:text-[1rem]">A 60 minute training session in a group setting.</p>
                            <p className="font-[Lato] max-lg:text-[1rem] my-2">Pure Boxing group sessions are a great way to get fit while learning the art of boxing</p>
                        </div>
                    </div>
                    <div className="w-[300px] mx-4 h-[250px] bg-gray-300 relative"></div>
                </div>

                <div className="flex flex-wrap justify-center place-items-center my-8">
                    <div className="max-lg:w-[80vw] lg:w-[600px] relative">
                    <div className="h-[200px] max-lg:w-[90vw] w-[670px] bg-red-700 absolute top-[40px] left-[-50px]"></div>
                        <Reveal direction={"left"} delay={0.25}>
                            <h1 className="font-[BuiltTitling] text-[3rem]"><span className="font-[Staatliches] text-[2.5rem]">03. </span>Casual boxing</h1>
                        </Reveal>
                        <div className="relative">
                            <p className="font-[BuiltTitling] text-[2rem]">You do you</p>
                            <p className="font-[Lato] max-lg:text-[1rem]">Have the freedom to do what works for you.</p>
                            <p className="font-[Lato] max-lg:text-[1rem] my-2">Hit the weights, put on the gloves, jump on some cardio, it's all up to you!</p>
                        </div>
                    </div>
                    <div className="w-[300px] mx-4 h-[250px] bg-gray-300 relative"></div>
                </div>
                <div className="flex flex-wrap justify-center my-16">
                    <h1 className="font-[BuiltTitling] text-[5rem]">Our Timetable</h1>
                    <img src="/pb-calendar.png" className="px-4"/>
                    <a href="https://www.instagram.com/pure_boxing/" className="flex place-items-center py-4">
                        <img src="/instagram.png" className="h-[70px]"/>
                        <p className="font-[Lato]">Follow us on Instagram to keep up to date with our pop up classes</p>
                    </a>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}
