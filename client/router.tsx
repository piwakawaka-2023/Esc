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
import Welcome from './components/Welcome'
import Game from './components/Game'
import Basement from './components/Basement'
import Balcony from './components/Balcony'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Start />} />
      <Route path="welcome" element={<Welcome />}></Route>
      <Route path="game" element={<Game />}>
        <Route path=":userId/scene/:id" element={<Scenes />}></Route>
        <Route path=":userId/scene/:id/level/1" element={<Elevator />}></Route>
        <Route path=":userId/scene/:id/level/2" element={<Basement />}></Route>
        <Route path=":userId/scene/:id/level/4" element={<Balcony />}></Route>
      </Route>

      <Route path="/complete" element={<Complete />}></Route>
      {/* <Route path="path/:params" element={<Component />}></Route> */}
    </Route>
  )
)

export default router
