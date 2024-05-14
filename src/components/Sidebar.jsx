import React from 'react'
import { stack as Menu } from 'react-burger-menu'
import '../sidebar.css'

export default function Sidebar({ pageWrapId, outerContainerId}) {
  return (
    <div className="lg:hidden font-[BuiltTitling] text-[2rem]">
      <Menu right pageWrapId={ pageWrapId } outerContainerId={ outerContainerId }>
          <a href="/" className="menu-item">Home</a>
          <a href="/" className="menu-item">What we offer</a>
          <a href="/" className="menu-item">Facilities</a>
          <a href="/" className="menu-item">Pricing</a>
          <a href="/" className="menu-item">The Team</a>
          <a href="/" className="menu-item">Talk to us</a>
      </Menu>
    </div>
  )
}
