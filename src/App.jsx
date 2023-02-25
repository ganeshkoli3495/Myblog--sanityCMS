import React from 'react'
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import SinglePost from './Component/SinglePost'
import Blog from './Pages/Blog'
const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <App />, // show component for particular path
    // errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/BlogPage",
        element: <Blog />
      },

      {
        path: "/SinglePost/:slug",
        element: <SinglePost />,
      },
    ],
  },
]);

export default router;