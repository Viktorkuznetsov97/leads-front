import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import GlobalContextProvider from "./contexts/GlobalContext";

const App = () => {
  const content = useRoutes(routes);

  return <GlobalContextProvider>{content}</GlobalContextProvider>;
};

export default App;
