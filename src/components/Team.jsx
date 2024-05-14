import React from 'react'
import Reveal from '../utils/Reveal'

export default function Team() {
  return (
    <>
        <div className="">
            <div className="flex justify-center bg-black pt-16">
                <h1 className="font-[BuiltTitling] text-[5rem]">The Team</h1>
            </div>
            <section className="flex justify-center bg-black pb-16">
                <div className="max-md:w-[600px] max-lg:w-[800px] xl:w-[1280px] relative xl:flex xl:flex-wrap justify-center text-[1.5rem]">
                    <div className="flex justify-center flex-wrap bg-setColour2 py-8">
                        <div className="px-12">
                            <h1 className="font-[BuiltTitling] max-md:text-[2rem] text-[4rem]">Jason Whateley</h1>
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
                                <img src="/jason1.png" className="max-lg:w-[300px] w-[400px] my-8"></img>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    </>
  )
}
