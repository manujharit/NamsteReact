import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Error from "./components/Error.js";
import Footer from "./components/Footer.js";
import AboutUs from "./components/AboutUs.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import ContactUs from "./components/ContactUs.js";
import Error from "./components/Error.js";
import ResMenu from "./components/ResMenu.js";
import Loading from "./components/Loading.js";
// import Grocery from "./components/Grocery.js";
const Grocery = lazy(() => import("./components/Grocery.js"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/contact',
        element: <ContactUs />
      },
      {
        path: '/restaurants/:resId',
        element: <ResMenu />
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<Loading />}><Grocery /></Suspense>,
      }
    ]
  }
])  


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
