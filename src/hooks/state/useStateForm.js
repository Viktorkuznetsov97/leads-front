import { useContext, useMemo, useState } from "react";
import { City } from "country-state-city";

// context
import { GlobalContext } from "../../contexts/GlobalContext";

// helpers
import { checkAllFieldsAreFilledIn } from "../../utils/helpers";

const useStateForm = ({ state, onSubmit }) => {
  const [zonesAndPlans, setZonesAndPlans] = useState(state.zones || []);
  const [statePlan, setStatePlan] = useState(state.plan || "");

  const { showAlert } = useContext(GlobalContext);

  const zoneList = useMemo(() => {
    const zones = City.getCitiesOfState("US", state.isoCode);
    return zones;
  }, []);

  const availableZones = zoneList.filter(
    ({ name }) => !zonesAndPlans.some((plan) => plan.name === name)
  );

  const addNewPlan = () => {
    console.log(zonesAndPlans);
    if (!checkAllFieldsAreFilledIn(zonesAndPlans)) {
      showAlert({
        message: "All fields must be filled before adding a new zone.",
        type: "error",
      });
      return;
    }

    setZonesAndPlans((prev) => [
      ...prev,
      { _id: Date.now(), name: "", plan: "" },
    ]);
  };

  const handlePlanChange = (id, key, value) => {
    const zonesAndPlansCopy = [...zonesAndPlans];
    const index = zonesAndPlansCopy.findIndex((plan) => plan._id === id);
    zonesAndPlansCopy[index][key] = value;
    setZonesAndPlans(zonesAndPlansCopy);
  };

  const deleteZoneAndPlan = (id) => {
    setZonesAndPlans((prev) => prev.filter((plan) => plan._id !== id));
  };

  const handlerSave = () => {
    if (!statePlan) {
      showAlert({
        message: "State plan required field",
        type: "error",
      });
      return;
    }

    if (!checkAllFieldsAreFilledIn(zonesAndPlans)) {
      showAlert({
        message: "All fields must be filled before adding a new zone.",
        type: "error",
      });
      return;
    }

    const newState = {
      ...state,
      plan: +statePlan,
      zones: zonesAndPlans.map(({ name, plan }) => ({ name, plan: +plan })),
    };

    onSubmit(newState);
  };

  return {
    statePlan,
    setStatePlan,
    zonesAndPlans,
    availableZones,
    handlePlanChange,
    deleteZoneAndPlan,
    availableZones,
    addNewPlan,
    handlerSave,
  };
};

export default useStateForm;
