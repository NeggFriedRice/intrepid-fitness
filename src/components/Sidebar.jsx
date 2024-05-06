import React from 'react'
import { stack as Menu } from 'react-burger-menu'
import '../sidebar.css'

export default function Sidebar({ pageWrapId, outerContainerId}) {
  return (
    <div className="lg:hidden font-[BuiltTitling] text-[2rem]">
      <Menu right pageWrapId={ pageWrapId } outerContainerId={ outerContainerId }>
          <a href="/" className="menu-item">Home</a>
          <a href="/" className="menu-item">Classes</a>
          <a href="/" className="menu-item">Membership</a>
          <a href="/" className="menu-item">Talk to us</a>
      </Menu>
    </div>
  )
}
