import { Alert, Snackbar } from "@mui/material";
import { Stack } from "@mui/system";
import { createContext, useMemo, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalContextProvider = ({ children }) => {
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [alertData, setAlertData] = useState({
    message: "",
    type: "",
  });

  const showAlert = ({ type, message }) => {
    setIsShowAlert(true);
    setAlertData({ type, message });
  };

  const handleAlertClose = () => {
    setIsShowAlert(false);
  };

  const contextValue = useMemo(() => ({ showAlert }), []);
  return (
    <GlobalContext.Provider value={contextValue}>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          style={{ zIndex: 3000 }}
          open={isShowAlert}
          autoHideDuration={6000}
          onClose={handleAlertClose}
        >
          <Alert
            onClose={handleAlertClose}
            severity={alertData.type}
            sx={{ width: "100%" }}
          >
            {alertData.message}
          </Alert>
        </Snackbar>
      </Stack>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
