import { BrowserRouter } from "react-router-dom";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@utils/api.service";

import { AppRouter } from "./routes";

import DarkModeContextProvider from "@root/context/DarkModeContext";

import "./index.scss";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <DarkModeContextProvider>
          <AppRouter />
        </DarkModeContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
