import { motion } from 'framer-motion'
import { useRef } from 'react';
import { ControlledMenu, MenuItem, useHover, useMenuState } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

export default function Navbar() {

  const ref = useRef(null);
  const [menuState, toggle] = useMenuState({ transition: true });
  const { anchorProps, hoverProps } = useHover(menuState.state, toggle);

  const menuItemClassName = ({ hover }) =>
    hover ? 'menuItem-hover' : 'menuItem';

  return (
    <div id="navbar" className="flex justify-center max-lg:hidden bg-black bg-opacity-65">
        <div className="relative">
          <motion.ul 
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1, delay: 1.25, ease: 'easeIn' }}
          className="font-[BuiltTitling] lg:text-[2rem] flex md:gap-[30px] md:text-[2rem] lg:gap-[50px] my-4 justify-center place-items-end">
              <li className="relative">
                <a href="#home">
                  <img src="/pb-logo-side.png" className="w-[250px]"/>
                </a>
              </li>

              <li>
                <a href="#whatWeOffer" className="navbar-itm">What we offer</a>
              </li>
              <li>
                <div ref={ref} {...anchorProps} className="navbar-itm">
                  The Gym
                </div>
                <ControlledMenu
                  {...hoverProps}
                  {...menuState}
                  anchorRef={ref}
                  onClose={() => toggle(false)}
                  id="menu-dropdown">
                  <MenuItem className={menuItemClassName}>
                    <a href="#team">The Team</a>
                  </MenuItem>
                  <MenuItem className={menuItemClassName}>
                    <a href="#facilities">Our Facilities</a>
                  </MenuItem>
                </ControlledMenu>
              </li>
              <li>
                <a href="#pricing" className="navbar-itm">Pricing</a>
              </li>
              <li>
                <a href="#contact" className="navbar-itm">Talk to us</a>
              </li>
          </motion.ul>
        </div>
    </div>
  )
}
