import React from 'react'
import { stack as Menu } from 'react-burger-menu'
import '../sidebar.css'

export default function Sidebar({ pageWrapId, outerContainerId}) {
  return (
    <div className="lg:hidden">
      <Menu right pageWrapId={ pageWrapId } outerContainerId={ outerContainerId }>
          <a href="/" className="menu-item">Home</a>
      </Menu>
    </div>
  )
}
