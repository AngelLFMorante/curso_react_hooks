import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner' //es un dolor porque hay que cambiar en todos los sitios, pero hay buenos a parte de sonner

// import { HookApp } from './HookApp'


import './index.css'
import { ClientInformation } from './08-use-suspense/ClientInformation'
import { getUserAction } from './08-use-suspense/api/get-user.action'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { TasksApp } from './05-useReduce/TaskApp'
// import { ScrambleWords } from './05-useReduce/ScrambleWords'
// import { MemoHook } from './06-memoHook/MemoHook'
// import { MemoCounter } from './06-memoHook/MemoCounter'
// import { InstagromApp } from './07-useOptimistic/InstagramApp'
// import { FocusScreen } from './04-useRef/FocusScreen'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <HookApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    <Suspense fallback={
      <div className="bg-gradient flex flex-col">
        <h1 className="text-2xl">Cargando...</h1>
      </div>
    }>
      <ClientInformation getUser={getUserAction(100)} />
    </Suspense>
  </StrictMode>,
)
