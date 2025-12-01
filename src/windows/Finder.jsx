import WindowControls from "#components/WindowControls"
import { locations } from "#constants"
import WindowWrapper from "#hoc/WindowWrapper"
import useLocationStore from "#store/location"
import useWindowStore from "#store/window"
import clsx from "clsx"
import { Search } from "lucide-react"

const Finder = () => {

    const {openWindow} = useWindowStore()

    const {activeLocation, setActiveLocation} = useLocationStore()

    const openItem = (item) => {
        if(item.fileType === 'pdf') return openWindow('resume')

        if(item.kind === 'folder') return setActiveLocation(item)

        if(['fig', 'url'].includes(item.fileType) && item.href) return window.open(item.href, "_blanck")

        openWindow(`${item.fileType}${item.kind}`, item)
    }

    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>

            <ul>
                {items.map((val) => (
                    <li key={val.id} onClick={() => setActiveLocation(val)} className={clsx(val.id === activeLocation.id ? "active" : "not-active")}>
                        <img src={val.icon} alt={val.name} className="w-4" />
                        
                        <p className="text-sm font-medium truncate">
                            {val.name}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )

  return (
    <>
        <div id="window-header">
            <WindowControls target="finder" />
            <Search className="icon" />
        </div>

        <div className="bg-white flex h-full">
            <div className="sidebar">

                {renderList('Favorites', Object.values(locations))}   
                
                {renderList('My Apps', locations.work.children)}
                
            </div>
           
            <ul className="content">
                {activeLocation?.children.map((val) => (
                    <li key={val.id} className={val.position} onClick={() => openItem(val)}>
                        <img src={val.icon} alt={val.name} />
                        <p>{val.name}</p>
                    </li>
                ))}
            </ul>
        </div>

    </>
  )
}

const FinderWindow = WindowWrapper(Finder, "finder")

export default FinderWindow