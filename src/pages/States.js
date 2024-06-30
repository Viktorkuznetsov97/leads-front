import { Box, Typography } from "@mui/material";

// hooks
import useStatesLogic from "../hooks/state/useStateLogic";

// components
import ProgressTracker from "../components/UI/ProgressTracker";
import CreateState from "../components/state/CreateState";
import StateCard from "../components/state/StateCard";

const States = () => {
  const { stateList, setUpdateStates, deleteState, leadData } =
    useStatesLogic();

  if (!stateList) return null;

  return (
    <Box>
      <Box bgcolor="#fff" padding="15px" borderRadius="10px">
        <Typography variant="h5" marginBottom="10px" fontWeight="700">
          Create state
        </Typography>
        <Box display="grid" gridTemplateColumns="1fr 1fr" marginTop="10px">
          <CreateState
            selectedIsoCodes={stateList.map(({ isoCode }) => isoCode)}
            setUpdateStates={setUpdateStates}
          />
          <Box display="flex" whiteSpace="nowrap" textAlign="center" gap="10px">
            <Box>
              <Typography>Total leads</Typography>
              <Typography>
                {leadData.leadsCount}/{leadData.plan}
              </Typography>
            </Box>
            <ProgressTracker
              leads={leadData.leadsCount}
              target={leadData.plan}
            />
          </Box>
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr"
        gap="20px"
        marginTop="20px"
      >
        {stateList.map((state) => (
          <StateCard
            key={state._id}
            state={state}
            deleteState={deleteState}
            setUpdateStates={setUpdateStates}
          />
        ))}
      </Box>
    </Box>
  );
};

export default States;
