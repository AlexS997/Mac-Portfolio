import React from 'react'
import dayjs from 'dayjs'
import { navIcons, navLinks } from '#constants'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="/images/logo.svg" alt="logoImg" />
            
            <p className='font-bold'>
                Alex's Portfolio
            </p>

            <ul>
                {navLinks.map((val) => (
                    <li key={val.id}>
                           {val.name} 
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <ul>
                {navIcons.map((val) => (
                    <li key={val.id}>
                        <img src={val.img} alt={`icon-${val.id}`} className='icon-hover' />
                    </li>
                ))}
            </ul>

            <time>
                {dayjs().format('ddd MMM D h:mm A')}
            </time>
        </div>
    </nav>
  )
}

export default Navbar