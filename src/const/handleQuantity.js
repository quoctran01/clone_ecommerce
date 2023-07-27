import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { cartActions } from "../redux/slices/cartSlice";

export default function useHandleQuantity(product, setOpenModal = null) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleDecrease = () => {
    setQuantity(quantity + 1);
  };
  const handleIncrease = () => {
    if (quantity <= 1) {
      return;
    }
    setQuantity(quantity - 1);
  };
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        ...product,
        quantity: quantity,
      })
    );
    if (setOpenModal) {
      setOpenModal(false);
    }
    toast.success("Product added successfully");
  };
  return {
    quantity,
    handleDecrease,
    handleIncrease,
    addToCart,
  };
}
