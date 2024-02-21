import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Drops from "./components/Drops/Drops";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/drops",
          element: <Drops />
        }
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
