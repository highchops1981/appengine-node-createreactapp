import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render(){
    return(
      <div>
        <Link to="/Top">Top</Link>
        <Link to="/About">About</Link>
      </div>
    )
  }
}

export default Navbar;