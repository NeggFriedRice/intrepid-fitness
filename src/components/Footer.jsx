export default function Footer() {

    const linkStyles = "font-[Lato] text-[1rem] lg:text-[1.5rem] hover:text-setColour1 transition-all duration-300"

  return (
    <footer id="footer" className="bg-black flex justify-center py-16 relative overflow-hidden">
        <img src="/grey-dots-texture-cropped.png" className="absolute min-w-[3000px] rotate-180 h-[800px] opacity-25"/> 
        <div className="lg:w-[80vw] xl:w-[1500px] text-center">
            <div className="flex justify-center relative">
                <a href="#home">
                    <img src="/pb-logo-white.png" className="h-[150px] cursor-pointer"/>
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
                        <div className="flex justify-center max-lg:hidden relative">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12605.422029710226!2d145.2141795!3d-37.8285624!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad639ae6e9295c7%3A0xff47d4a8bee177a7!2sPure%20Boxing!5e0!3m2!1sen!2sau!4v1716029235891!5m2!1sen!2sau" 
                        width="500"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        />
                        </div>
                    </div>
                    <div>
                        <div className="relative">
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
                            <h1 className="font-[BuiltTitling] text-[1.5rem] lg:text-[2rem] text-setColour1 pt-8 relative">Socials</h1>
                            <div className="flex justify-center relative">
                                <a href="https://www.instagram.com/pure_boxing/">
                                    <img src="/instagram.png" alt="Instagram logo" className="w-[50px] lg:w-[75px] hover:scale-110 transition-all duration-300"/>
                                </a>
                                <a href="https://www.facebook.com/PureBoxingAu/">
                                    <img src="/facebook-icon.png" alt="Facebook logo" className="w-[50px] lg:w-[75px] hover:scale-110 transition-all duration-300"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center relative lg:hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12605.422029710226!2d145.2141795!3d-37.8285624!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad639ae6e9295c7%3A0xff47d4a8bee177a7!2sPure%20Boxing!5e0!3m2!1sen!2sau!4v1716029235891!5m2!1sen!2sau"
                width="400"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mx-4"/>
                </div>
        </div>

    </footer>
    
  )
}
