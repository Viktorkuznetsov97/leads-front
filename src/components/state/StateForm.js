import { Box, Button, TextField } from "@mui/material";

import useStateForm from "../../hooks/state/useStateForm";
import { handleInvalidKeyDown } from "../../utils/helpers";
import SelectZoneAndPlan from "./SelectZoneAndPlan";

const StateForm = ({ state, onCancel, onSubmit }) => {
  const {
    statePlan,
    setStatePlan,
    zonesAndPlans,
    availableZones,
    handlePlanChange,
    deleteZoneAndPlan,
    addNewPlan,
    handlerSave,
  } = useStateForm({ state, onSubmit });

  return (
    <Box>
      <TextField
        type="number"
        value={statePlan}
        size="small"
        fullWidth
        label="State plan"
        onChange={(event) => setStatePlan(event.target.value)}
        onKeyDown={handleInvalidKeyDown}
      />
      {zonesAndPlans.map((item) => (
        <SelectZoneAndPlan
          key={item._id}
          plan={item.plan}
          id={item._id}
          zones={availableZones}
          handlePlanChange={handlePlanChange}
          deleteZoneAndPlan={deleteZoneAndPlan}
          zoneValue={{ name: item.name }}
        />
      ))}

      {availableZones.length > 0 && (
        <Button
          size="small"
          onClick={addNewPlan}
          variant="contained"
          color="inherit"
          style={{ marginTop: "10px" }}
        >
          Add zone
        </Button>
      )}
      <Box display="flex" gap="10px" justifyContent="end" marginTop="30px">
        <Button variant="contained" color="inherit" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handlerSave}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default StateForm;
