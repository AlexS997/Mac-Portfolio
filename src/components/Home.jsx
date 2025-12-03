import React from 'react'
import { locations } from '#constants'
import clsx from 'clsx'
import { useGSAP } from '@gsap/react'
import { Draggable } from 'gsap/Draggable'
import useWindowStore from '#store/window'
import useLocationStore from '#store/location'

const projects = locations.work?.children ?? []

const Home = () => {

    const {setActiveLocation} = useLocationStore()
    const { openWindow } = useWindowStore()

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project)
        openWindow("finder")
    }

    useGSAP(() => {
        Draggable.create(".folder")
    }, [])

    return (
        <section id='home'>
            <ul>
                {projects.map((val) => (
                    <li key={val.id} 
                    className={clsx("group folder", val.windowPosition)} onClick={() => handleOpenProjectFinder(val)}>
                        <img src="/images/folder.png" alt={val.name} />
                        <p>{val.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Home