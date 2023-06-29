import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Start from './components/Start'
import Elevator from './components/Elevator'

import Scenes from './components/Scenes'


import Complete from './components/Complete'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

      <Route index element={<Main />} />
      <Route path="/example" element={<Example />}></Route>
      <Route path="/scenes" element={<Scenes />}></Route>
      <Route index element={<Start />} />
      <Route path="/game/:userId/elevator" element={<Elevator />}></Route>
      <Route path="/:userId/complete" element={<Complete />}></Route>
      {/* <Route path="path/:params" element={<Component />}></Route> */}
    </Route>
  )
)

export default router
