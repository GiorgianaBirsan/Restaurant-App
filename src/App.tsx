import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import { ChakraProvider } from "@chakra-ui/react";
import { UserAuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <ChakraProvider>
        <UserAuthContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </BrowserRouter>
        </UserAuthContextProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
