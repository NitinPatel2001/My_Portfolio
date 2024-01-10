import React from 'react'
import './LinkButton.css'

const LinkButton = (props) => {
    const {Icon, Content, Color, Link} = props
  return (
    <div className='buttonLink'>
      <a href={Link}>
        <button style={{border: `2px solid ${Color}`}} className='ButtonContent'>
            <Icon/>
            <div>{Content}</div>
        </button>
      </a>
    </div>
  )
}

export default LinkButton