import Dock from "#components/Dock"
import Navbar from "#components/Navbar"
import Welcome from "#components/Welcome"
import Contact from "#windows/COntact"
import Finder from "#windows/Finder"
import ImageWindow from "#windows/Image"
import ResumeWindow from "#windows/Resume"
import Safari from "#windows/Safari"
import Terminal from "#windows/terminal"
import TextWindow from "#windows/Text"

import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <ResumeWindow />
      <Finder />
      <TextWindow />
      <ImageWindow />
      <Contact />
    </main>
  )
}

export default App