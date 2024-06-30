import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { patchStateAPI } from "../../api/state";

const useEditState = ({ state, setUpdateStates }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { showAlert } = useContext(GlobalContext);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  const onSubmit = async (newState) => {
    try {
      await patchStateAPI(state._id, newState);
      closeModal();
      setUpdateStates(Date.now());
      showAlert({ message: "State has been changed", type: "success" });
    } catch (err) {
      const message = err.message || "Something went wrong";
      showAlert({ message, type: "error" });
    }
  };

  return {
    isOpenModal,
    openModal,
    closeModal,
    onSubmit,
  };
};

export default useEditState;
