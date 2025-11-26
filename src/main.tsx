import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


// import { HookApp } from './HookApp'


import './index.css'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
import { PokemonPage } from './03-examples/PokemonPage'
import { TasksApp } from './05-useReduce/TaskApp'
import { ScrambleWords } from './05-useReduce/ScrambleWords'
// import { FocusScreen } from './04-useRef/FocusScreen'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HookApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    <ScrambleWords />
  </StrictMode>,
)
