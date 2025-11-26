import WindowControls from '#components/WindowControls'
import { techStack } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import { Check, Flag } from 'lucide-react'
import React from 'react'

const Terminal = () => {
  return (
    <>
        <div id='window-header'>
            <WindowControls target="terminal" />
            <h2>Texh Stack</h2>
        </div>

        <div className='techstack'>
            <p>
                <span className='font-bold'>@alex % </span>
                show tech stack
            </p>

            <div className='label'>
                <p className='w-32'>
                    Category
                </p>

                <p>
                    Technologies
                </p>
            </div>

            <ul className='content'>
                {techStack.map((v) => (
                    <li key={v.category} className='flex items-center'>
                        <Check className='check' size={20} />

                        <h3 className=''>
                            {v.category}
                        </h3>
                        
                        <ul>
                            {v.items.map((val, index) => (
                                <li key={index}>
                                    {val}{index < v.items.length - 1 ? ',' : ''}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <div className='footnote'>
                <p>
                    <Check size={20} />
                    6 of 6 loaded successfully (100%)
                </p>

                <p className='text-black'>
                    <Flag size={15} fill='black' />
                    Render time: 5ms
                </p>
            </div>
        </div>
    </>
  )
}

const TerminalWindow = WindowWrapper(Terminal, 'terminal')

export default TerminalWindow