import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import useEditState from "../../hooks/state/useEditState";
import CustomModal from "../UI/CustomModal";
import StateForm from "./StateForm";

const EditState = ({ state, setUpdateStates }) => {
  const { isOpenModal, openModal, closeModal, onSubmit } = useEditState({
    state,
    setUpdateStates,
  });
  return (
    <>
      <IconButton size="small" onClick={openModal}>
        <EditIcon />
      </IconButton>
      <CustomModal
        isOpen={isOpenModal}
        handlerClose={closeModal}
        title={state.name}
      >
        <StateForm
          state={state}
          onCancel={closeModal}
          onSubmit={onSubmit}
          setUpdateStates={setUpdateStates}
        />
      </CustomModal>
    </>
  );
};

export default EditState;
