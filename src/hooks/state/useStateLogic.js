import { useContext, useEffect, useState } from "react";
import { deleteStateAPI, getStateAPI } from "../../api/state";
import { GlobalContext } from "../../contexts/GlobalContext";
import { getCountLeadsAPI } from "../../api/lead";

const useStatesLogic = () => {
  const [stateList, setStateList] = useState(null);
  const [updateStates, setUpdateStates] = useState(null);
  const [leadData, setLeadData] = useState({ leadsCount: 0, plan: 2000 });

  const { showAlert } = useContext(GlobalContext);

  const deleteState = async (id) => {
    try {
      await deleteStateAPI(id);
      showAlert({ message: "State has been deleted", typeOfAlert: "success" });
    } catch (err) {
      const message = err.message || "Something went wrong";
      showAlert({ message, type: "error" });
    }
    setUpdateStates(id);
  };

  useEffect(() => {
    const getStateList = async () => {
      try {
        const { data } = await getStateAPI();
        const leads = await getCountLeadsAPI();
        setLeadData({ leadsCount: leads.data.count, plan: 5000 });
        setStateList(data);
      } catch (err) {
        const message = err.message || "Something went wrong";
        showAlert({ message, type: "error" });
      }
    };

    getStateList();
  }, [updateStates]);

  return {
    stateList,
    setUpdateStates,
    deleteState,
    leadData,
  };
};

export default useStatesLogic;
