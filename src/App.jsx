import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Drops from "./components/Drops/Drops";
import Stats from "./components/Stats/Stats";
import Modal from "./components/modal/Modal";
import { ModalProvider } from "./context/modalContext";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
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
          element: <Drops />,
        },
        {
          path: "/stats",
          element: <Stats />,
        },
      ],
    },
  ]);

  return (
    <ModalProvider value={{ openModal, setOpenModal }}>
      <div className="App">
        <RouterProvider router={router} />
        <Modal open={openModal} closeModal={() => setOpenModal(false)} />
      </div>
    </ModalProvider>
  );
};

export default App;
