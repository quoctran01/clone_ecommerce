import "../../style/dialog-mask.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";

const DialogMask = ({ productId, onClose }) => {
  const dispatch = useDispatch();
  const handleRemoveProductCart = () => {
    dispatch(cartActions.deleteItem(productId));
    onClose();
    toast.success("Delete product cart successfully");
  };
  if (!Array.isArray(productId)) {
    productId = Array.of(productId);
  }
  return (
    <>
      <div className='dialog-mask'>
        <div className='dialog-shoppingcart'>
          <div className='Dialog-body'>
            <p>Are you sure you want to delete item(s)?</p>
          </div>
          <footer>
            <button className='Dialog-cancel' type='cancel' onClick={onClose}>
              Cancel
            </button>
            <button
              type='confirm'
              className=' button'
              onClick={handleRemoveProductCart}>
              OK
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};
export default DialogMask;
