import React from 'react'
import Reveal from '../utils/Reveal'

export default function Team() {
  return (
    <>
        <div id="team">
            <div className="flex justify-center bg-black pt-16">
                <h1 className="font-[BuiltTitling] text-[5rem]">The Team</h1>
            </div>
            <section className="flex justify-center bg-black pb-16">
                <div className="max-md:w-[600px] max-lg:w-[800px] xl:w-[1280px] relative xl:flex xl:flex-wrap justify-center text-[1.5rem]">
                    <div className="flex justify-center flex-wrap lg:bg-setColour2 py-8">
                        <div className="px-12">
                            <h1 className="font-[BuiltTitling] max-md:text-[2.75rem] text-[4rem]">Jason Whateley</h1>
                            <p className="py-4 max-md:text-[1rem]">Growing up in Lakes Entrance Jason was all about footy. Identified as a likely starter for a boxing match by his football coach, Jason took the plunge into the world of boxing winning a number of championships across the world.</p>
                            <p className="py-4 max-md:text-[1rem]">After a fruitful boxing career Jason set his sights on sharing his knowledge and passion for fitness and boxing to help others achieve their fitness goals.</p>

                            <div className="flex flex-wrap-reverse max-lg:justify-center">
                                <ul className="list-disc text-[1.5rem] max-md:text-[1rem] px-8">
                                    <h3 className="font-[BuiltTitling] max-md:1.5rem text-[2rem]">Career highlights</h3>
                                    <li>2009 Victorian Heavyweight Champion</li>
                                    <li>2010 Commonwealth Games - Silver Medal</li>
                                    <li>2010 New Caledonia Oceania - Gold Medal</li>
                                    <li>2011 Arafura Games - Gold Medal</li>
                                    <li>2011 State of Origin Champion</li>
                                    <li>2014 Australian Championships - Silver Medal</li>
                                    <li>2015 Australian Championships - Gold Medal</li>
                                    <li>2016 Rio Olympics Team</li>
                                    <li>2018 Commonwealth Games - Heavyweight - Silver Medal</li>
                                </ul>
                                <img src="/jason1.png" className="max-lg:w-[300px] w-[400px] my-8 hover:scale-105 transition-all duration-300"></img>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center flex-wrap lg:bg-setColour2 py-8 my-8">
                        <div className="px-12 flex flex-wrap-reverse">
                            <img src="/jason1.png" className="max-lg:w-[300px] w-[400px] m-auto lg:py-8 lg:mx-24 hover:scale-105 transition-all duration-300"></img>
                            <div className="lg:w-[45%]">
                                <h1 className="font-[BuiltTitling] max-md:text-[2.75rem] text-[4rem]">Samantha Holborn</h1>
                                <p className="py-4 max-md:text-[1rem]">Sam specialises in strength training and diet advice and has a wealth of boxing knowledge. Sam's boxing pad work and boxing IQ make her a brilliant well-rounded trainer that her clients love.</p>
                                <p className="py-4 max-md:text-[1rem]">Sam is available for personal training and group sessions for friends, work groups and sports teams and is happy to help you meet your diet and fitness needs and smash your goals out of the park!</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}
