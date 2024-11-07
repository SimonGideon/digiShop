import PropTypes from "prop-types";

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  submessage,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <hr className="mb-6 " />
        <div className="mb-3">
          <p className="text-gray-700 font-bold">{message}</p>
          <span className="text-sm text-gray-500">
            {submessage && submessage}
          </span>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            className="px-3 py-1 text-gray-600 border border-gray-300 rounded-[15px] hover:bg-gray-100"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-3 py-1 text-white bg-red-600 rounded-[15px] hover:bg-red-700"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  submessage: PropTypes.string,
};

export default ConfirmationModal;
