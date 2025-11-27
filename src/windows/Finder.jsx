import WindowControls from "#components/WindowControls"
import { locations } from "#constants"
import WindowWrapper from "#hoc/WindowWrapper"
import useLocationStore from "#store/location"
import clsx from "clsx"
import { Search } from "lucide-react"

const Finder = () => {

    const {activeLocation, setActiveLocation} = useLocationStore()

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
                
                {renderList('Work', locations.work.children)}
                
            </div>
        </div>
    </>
  )
}

const FinderWindow = WindowWrapper(Finder, "finder")

export default FinderWindow