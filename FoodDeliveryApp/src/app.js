import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Error from "./components/Error.js";
import Footer from "./components/Footer.js";
import AboutUs from "./components/AboutUs.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import ContactUs from "./components/ContactUs.js";
import Error from "./components/Error.js";
// import ResMenu from "./components/ResMenu.js";
import Loading from "./components/Loading.js";
import UserContext from "./utils/userContext.js";
// import Grocery from "./components/Grocery.js";
const Grocery = lazy(() => import("./components/Grocery.js"))
const ResMenu = lazy(() => import("./components/ResMenu.js"))
const Cart = lazy(() => import("./components/Cart.js"))

import { Provider } from 'react-redux';
import appStore from './redux/appStore.js';

const AppLayout = () => {
  const [username, setUsername] = useState('')

  // useEffect(() => {
  //   const data = {
  //     name: 'Manuj Harit'
  //   }
  //   setUsername(data.name)
  // })
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: username, setUsername: setUsername }}>
        <div className="app">
          <Header />
          <Outlet />
          {/* <Footer /> */}
        </div>
      </UserContext.Provider>
    </Provider>
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
        element: <Suspense fallback={<Loading />}><ResMenu /></Suspense>
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<Loading />}><Grocery /></Suspense>,
      },
      {
        path:'/cart',
        element: <Suspense fallback={<Loading />}><Cart /></Suspense>,
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
