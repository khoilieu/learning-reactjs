import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../Components/ui/dialog";

const Notification = ({ isOpen, onClose, message }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thông báo</DialogTitle>
          <DialogDescription className="mt-4">{message}</DialogDescription>
        </DialogHeader>
        <button
          onClick={onClose}
          className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
        >
          Đóng
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default Notification;
