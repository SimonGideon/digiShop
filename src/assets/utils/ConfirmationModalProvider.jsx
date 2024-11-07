import { useState, createContext } from "react";
import PropTypes from "prop-types";
import { ConfirmationModal } from "../../components";

export const ConfirmationModalContext = createContext();

const ConfirmationModalProvider = ({ children }) => {
  const [modalData, setModalData] = useState(null);

  const confirm = (title, message, onConfirm) => {
    setModalData({ title, message, onConfirm });
  };

  const closeModal = () => setModalData(null);

  return (
    <ConfirmationModalContext.Provider value={confirm}>
      {children}
      {modalData && (
        <ConfirmationModal
          isOpen={Boolean(modalData)}
          onClose={closeModal}
          onConfirm={() => {
            modalData.onConfirm();
            closeModal();
          }}
          title={modalData.title}
          message={modalData.message}
        />
      )}
    </ConfirmationModalContext.Provider>
  );
};

ConfirmationModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ConfirmationModalProvider;
