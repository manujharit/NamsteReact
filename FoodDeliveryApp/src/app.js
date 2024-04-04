import React from "react";
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
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
