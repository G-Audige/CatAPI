import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        <Link to='/'>
            <div>The Cat API</div>
        </Link>
        <Link to='/breeds'>
            <div>Breeds</div>
        </Link>
    </div>
  )
}

export default Nav