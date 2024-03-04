import { createContext, useContext } from "react";

export const ModalContext = createContext({
  openModal: false,
  setOpenModal: () => {},
});

export const ModalProvider = ModalContext.Provider;

export default function useModalOpen() {
  return useContext(ModalContext);
}
