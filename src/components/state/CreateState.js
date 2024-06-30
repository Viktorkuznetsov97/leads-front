import { Autocomplete, TextField, Button, Box } from "@mui/material";
// hooks
import useCreateState from "../../hooks/state/useCreateState";

import StateForm from "./StateForm";
import CustomModal from "../UI/CustomModal";

const CreateState = ({ selectedIsoCodes, setUpdateStates }) => {
  const {
    states,
    selectedState,
    handlerStateChange,
    openModal,
    isOpenModal,
    closeModal,
    onSubmit,
  } = useCreateState({ selectedIsoCodes, setUpdateStates });

  return (
    <Box display="flex" flexDirection="column" gap="10px" width="350px">
      <Box
        display="grid"
        gridTemplateColumns="1fr 0.4fr"
        className="state-block"
        gap="10px"
      >
        <Autocomplete
          disablePortal
          size="small"
          options={states}
          value={{ name: selectedState?.name || "" }}
          fullWidth
          getOptionLabel={(option) => option.name}
          isOptionEqualToValue={(option, value) =>
            option.isoCode === value.isoCode
          }
          onChange={handlerStateChange}
          renderInput={(params) => (
            <TextField {...params} label="Select State" />
          )}
        />
        <Button
          onClick={openModal}
          variant="contained"
          color="success"
          style={{ whiteSpace: "nowrap" }}
          disabled={!!!selectedState}
        >
          Add state
        </Button>
      </Box>

      {selectedState && (
        <CustomModal
          isOpen={isOpenModal}
          handlerClose={closeModal}
          title={selectedState.name}
        >
          <StateForm
            state={selectedState}
            onCancel={closeModal}
            onSubmit={onSubmit}
          />
        </CustomModal>
      )}
    </Box>
  );
};

export default CreateState;
