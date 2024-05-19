import { motion } from 'framer-motion'
import { useRef } from 'react';
import { ControlledMenu, MenuItem, useHover, useMenuState } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

export default function Navbar() {

  const ref = useRef(null);
  const [menuState, toggle] = useMenuState({ transition: true });
  const { anchorProps, hoverProps } = useHover(menuState.state, toggle);

  return (
    <div id="home" className="flex justify-center max-lg:hidden bg-black py-4">
        <div className="relative">
          
          <motion.ul 
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1, delay: 1.25, ease: 'easeIn' }}
          className="font-[BuiltTitling] lg:text-[2rem] flex md:gap-[30px] md:text-[2rem] lg:gap-[50px] mt-8 justify-center place-items-end">
              <li className="relative">
                <img src="/pb-logo-white.png" className="h-[250px]"/>
              </li>
              <li>
                <a href="#whatWeOffer" className="navbar-itm">What we offer</a>
              </li>
              <li>
                <a href="#facilities" className="navbar-itm">Facilities</a>                
              </li>
              <li>
                <a href="#pricing" className="navbar-itm">Pricing</a>
              </li>
              <li>
                <a href="#team" className="navbar-itm">The Team</a>
              </li>
              <li>
                <a href="#contact" className="navbar-itm">Talk to us</a>
              </li>
              <>
                <div ref={ref} {...anchorProps}>
                  About Us
                </div>

                <ControlledMenu
                  {...hoverProps}
                  {...menuState}
                  anchorRef={ref}
                  onClose={() => toggle(false)}
                  id="menu-dropdown"
                >
                  <MenuItem className="menuItem">Facilities</MenuItem>
                  <MenuItem className="menuItem">The Team</MenuItem>
                </ControlledMenu>
              </>
              
          </motion.ul>
        </div>
    </div>
  )
}
