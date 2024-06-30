import { useContext, useMemo, useState } from "react";
import { State } from "country-state-city";
// context
import { GlobalContext } from "../../contexts/GlobalContext";
// api
import { postStateAPI } from "../../api/state";

const useCreateState = ({ setUpdateStates, selectedIsoCodes }) => {
  const [selectedState, setSelectedState] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { showAlert } = useContext(GlobalContext);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  const handlerStateChange = (event, newValue) => {
    setSelectedState(newValue);
  };

  const onSubmit = async (newState) => {
    try {
      await postStateAPI(newState);
      closeModal();
      setSelectedState(null);
      setUpdateStates(Date.now());
      showAlert({ message: "State has been added", type: "success" });
    } catch (err) {
      const message = err.message || "Something went wrong";
      showAlert({ message, type: "error" });
    }
  };

  const states = useMemo(() => {
    const stateList = State.getStatesOfCountry("US").map(
      ({ isoCode, name }) => ({
        isoCode,
        name,
      })
    );

    return stateList.filter(
      (state) => !selectedIsoCodes.includes(state.isoCode)
    );
  }, [selectedIsoCodes]);

  return {
    states,
    selectedState,
    handlerStateChange,
    openModal,
    selectedState,
    isOpenModal,
    closeModal,
    onSubmit,
  };
};

export default useCreateState;
