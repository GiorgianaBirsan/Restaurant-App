import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import { ChakraProvider } from "@chakra-ui/react";
import { UserAuthContextProvider } from "./contexts/AuthContext";
import Dashboard from "./pages/dashboard/Dashboard";


function App() {
 
  return (
    <>
      <ChakraProvider
        toastOptions={{
          defaultOptions: { position: "top", duration: 5000, isClosable: true },
        }}
      >
        <UserAuthContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </UserAuthContextProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
