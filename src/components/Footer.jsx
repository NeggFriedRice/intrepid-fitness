import React from 'react'

export default function Footer() {

    const linkStyles = "font-[Lato] text-[1rem] lg:text-[1.5rem] hover:text-setColour1 transition-all duration-300"

  return (
    <footer id="footer" className="bg-black flex justify-center py-16 relative overflow-hidden">
        <img src="/grey-dots-texture-cropped.png" className="absolute min-w-[3000px] rotate-180 h-[800px] opacity-25"/> 
        <div className="lg:w-[80vw] xl:w-[1500px] text-center">
            <div className="flex justify-center">
                <a href="#home">
                    <img src="/pb-logo-white.png" className="h-[150px]"/>
                </a>
            </div>
                <div className="bg-black grid grid-cols-2 py-4">
                    <div className="relative">
                        <h1 className="font-[BuiltTitling] text-[1.5rem] lg:text-[2rem] text-setColour1">Call us anytime</h1>
                        <a href="tel:0407853346">
                            <p className={linkStyles}>0407 853 346</p>
                        </a>
                        <h1 className="font-[BuiltTitling] text-[1.5rem] lg:text-[2rem] text-setColour1 pt-8">Come visit us</h1>
                        <p className="font-[Lato] text-[1rem] lg:text-[1.5rem]">2/107-113 Heatherdale Road, Ringwood</p>
                        <div className="flex justify-center">
                            <a href="https://www.google.com/maps/place/Pure+Boxing/@-37.8285624,145.2141795,15z/data=!4m6!3m5!1s0x6ad639ae6e9295c7:0xff47d4a8bee177a7!8m2!3d-37.8285624!4d145.2141795!16s%2Fg%2F11h3qp_vtw?entry=ttu" target="_blank">
                                <img src="pb-maps.png" className="max-lg:hidden lg:w-[500px]"/>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className="font-[BuiltTitling] text-[1.5rem] lg:text-[2rem] text-setColour1">Links</h1>
                            <a href="#whatWeOffer">
                                <p className={linkStyles}>What we offer</p>
                            </a>
                            <a href="#facilities">
                                <p className={linkStyles}>Facilities</p>
                            </a>
                            <a href="#pricing">
                                <p className={linkStyles}>Pricing</p>
                            </a>
                            <a href="#team">
                                <p className={linkStyles}>The Team</p>
                            </a>
                        </div>
                        <div>
                            <h1 className="font-[BuiltTitling] text-[1.5rem] lg:text-[2rem] text-setColour1 pt-8">Socials</h1>
                            <div className="flex justify-center">
                                <a href="https://www.instagram.com/pure_boxing/">
                                    <img src="/instagram.png" alt="Instagram logo" className="w-[50px] lg:w-[75px]"/>
                                </a>
                                <a href="https://www.facebook.com/PureBoxingAu/">
                                    <img src="/facebook-icon.png" alt="Facebook logo" className="w-[50px] lg:w-[75px]"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <a href="https://www.google.com/maps/place/Pure+Boxing/@-37.8285624,145.2141795,15z/data=!4m2!3m1!1s0x0:0xff47d4a8bee177a7?sa=X&ved=1t:2428&ictx=111" target="_blank">
                        <img src="pb-maps.png" className="w-[500px] lg:hidden"/>
                    </a>
                </div>
        </div>

    </footer>
    
  )
}
