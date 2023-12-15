import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "../src/pages/Home/Home"
import About from "../src/pages/AboutUs/About"
import Contact from "../src/pages/ContactUs/ContactUs"
import Layout from "./layouts/Layout"
import Service from "./pages/Services/Service"

const routes = [
  {path: "/", element: <Layout />, children:[
    {
      path: "",
      element: <Home />
    },
    {
      path: "about",
      element: <About />
    },
    {
      path: "contact",
      element: <Contact />
    },
    {
      path: "service",
      element: <Service />
    }
  ]}
]

const appRouter = createBrowserRouter(routes)
function App() {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App