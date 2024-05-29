import React from 'react'
import Reveal from '../utils/Reveal'

export default function Facilities() {
  return (
    <>
    <div id="facilities" className="classes bg-[url('https://i.shgcdn.com/6dcb9e8a-6a31-47a3-9a4a-036266aa81e5/-/format/auto/-/preview/3000x3000/-/quality/lighter/')] bg-cover text-white ">
        <div className="flex justify-center bg-black bg-opacity-70 pt-24">
            <h1 className="font-[BuiltTitling] text-[5rem] max-md:text-[4rem] relative pt-24 pb-16">Our Facilities</h1>
        </div>
        <section className="flex justify-center bg-black bg-opacity-70 pb-16 font-[BuiltTitling]">
            <div className="max-md:w-[350px] max-lg:w-[500px] xl:w-[600px] text-[1.5rem] h-[800px]">
                <h1 className="text-[2rem] pb-4">We've got the latest equipment to suit any work out</h1>
                <ul className="list-disc px-8 text-[1.5rem] lg:text-[1.75rem]">
                    <li>Equipment 1</li>
                    <li>Equipment 2</li>
                    <li>Equipment 3</li>
                </ul>
            </div>
        </section>
    </div>
    </>
  )
}
