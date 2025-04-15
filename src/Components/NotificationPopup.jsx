import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const NotificationPopup = ({ show, title, message, onCancel }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-md shadow-lg max-w-lg w-full">
        <div className="flex justify-between items-center mb-5 border-b border-gray-300 pb-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onCancel} className="text-gray-500 hover:text-gray-700">
            <FontAwesomeIcon icon={faClose} size="lg" />
          </button>
        </div>
        <div className="mb-4">
          <p className="text-gray-700">{message}</p>
        </div>
        <div className="flex justify-end gap-4">

          <button
            onClick={onCancel}
            className="text-sm bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
