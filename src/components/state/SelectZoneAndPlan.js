import { Autocomplete, Box, IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { handleInvalidKeyDown } from "../../utils/helpers";

const SelectZoneAndPlan = ({
  zones,
  id,
  plan,
  handlePlanChange,
  deleteZoneAndPlan,
  zoneValue,
}) => (
  <Box
    marginTop="10px"
    display="grid"
    gridTemplateColumns="1fr 0.45fr 0.2fr"
    gap="10px"
  >
    <Autocomplete
      disablePortal
      size="small"
      options={zones}
      value={zoneValue}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.name}
      getOptionKey={(option) => option.isoCode}
      onChange={(event, newValue) => {
        console.log("newValue", newValue);
        handlePlanChange(id, "name", newValue?.name || "");
      }}
      renderInput={(params) => <TextField {...params} label="Zone" />}
    />
    <TextField
      type="number"
      value={plan}
      size="small"
      label="Plan"
      onChange={(event) => handlePlanChange(id, "plan", event.target.value)}
      onKeyDown={handleInvalidKeyDown}
    />

    <IconButton size="small" onClick={() => deleteZoneAndPlan(id)}>
      <DeleteIcon />
    </IconButton>
  </Box>
);

export default SelectZoneAndPlan;
