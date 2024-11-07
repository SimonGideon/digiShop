import { useContext } from "react";
import { ConfirmationModalContext } from "./";

const useConfirmationModal = () => {
  return useContext(ConfirmationModalContext);
};

export default useConfirmationModal;
