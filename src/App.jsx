import {RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter
} from "react-router-dom";
import Ragistration from "./pages/Ragistration";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home"
// import SectionBtn from "./components/SectionBtn"

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Ragistration/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    </Route>
  )
);



function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
