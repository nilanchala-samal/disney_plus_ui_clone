import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Login from "./components/Login"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Login/>}/>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router}>
        
        <Login/>
      </RouterProvider>
    </>
  )
}

export default App


