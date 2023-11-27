import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes";
import DarkModeContextProvider from "@root/context/DarkModeContext";

import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <DarkModeContextProvider>
        <AppRouter />
      </DarkModeContextProvider>
    </BrowserRouter>
  );
};

export default App;
