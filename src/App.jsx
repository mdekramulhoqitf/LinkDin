import {RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter
} from "react-router-dom";
import Ragistration from "./pages/Ragistration";

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<Ragistration/>}></Route>
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
