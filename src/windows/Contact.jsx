import React from 'react'
import WindowControls from '#components/WindowControls'
import WindowWrapper from '#hoc/WindowWrapper'
import { socials } from '#constants'

const Contact = () => {

  return (
    <>
        <div id='window-header'>
            <WindowControls target="contact" />
            <h2>Contact Me</h2>
        </div>

        <div className='p-5 space-y-5'>
            <img src="/images/alex.jpg" alt="alexImg" className='w-20 rounded-full' />

            <h3>Let's Connect</h3>
            <p>
               Got an idea? A bug to kill? Or just wanna talk tech? I'm in. 
            </p>

            <ul>
                {socials.map((val) => (
                    <li key={val.id} style={{background: val.bg}} >
                        <a href={val.link} target='_blank' rel='noopener noreferrer' title={val.text}>
                            <img src={val.icon} alt={val.text} className='size-5' />
                            <p>{val.text}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, 'contact')

export default ContactWindow