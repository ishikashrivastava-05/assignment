import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <div className="Nav">
      <input type="text" placeholder="Search..." className="serchbox" />
      <ul className="categories">
        <li>Electronics</li>
        <li> Website Builder</li>
        <li>Today's Deal</li>
      </ul>
    </div>
  )
}

export default Navbar
