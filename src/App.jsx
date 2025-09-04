import React from 'react'
import Header from './components/GameProgram/GameHero'
import Section2 from './components/GameProgram/VirtualRealityHero'
import MultimediaHero from './components/MultiProgram/MultimediaHero'
import HighlightedCourses from './components/MultiProgram/HighlightedCourses'
import OurCollection from './components/MultiProgram/Collection'

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <Section2 />
      <MultimediaHero />
      <HighlightedCourses />
      <OurCollection />
    </div>
  )
}

export default App
