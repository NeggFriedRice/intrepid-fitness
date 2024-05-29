import React from 'react'
import { stack as Menu } from 'react-burger-menu'
import '../sidebar.css'

export default function Sidebar({ pageWrapId, outerContainerId}) {
  return (
    <div className="lg:hidden font-[BuiltTitling] text-[2rem]">
      <Menu right pageWrapId={ pageWrapId } outerContainerId={ outerContainerId }>
          <a href="#home" className="menu-item">Home</a>
          <a href="#whatWeOffer" className="menu-item">What we offer</a>
          <a href="#facilities" className="menu-item">Our Facilities</a>
          <a href="/#pricing" className="menu-item">Pricing</a>
          <a href="#team" className="menu-item">The Team</a>
          <a href="#footer" className="menu-item">Talk to us</a>
      </Menu>
    </div>
  )
}
