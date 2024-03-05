import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import { ChakraProvider } from "@chakra-ui/react";
import { UserAuthContextProvider } from "./contexts/AuthContext";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./utils/ProtectedRoute";
import { CreateRestaurant, DashboardCustomer, DashboardRestaurant } from "./pages";

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
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/create-restaurant"
                element={
                  <ProtectedRoute>
                    <CreateRestaurant />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/manage-restaurant"
                element={
                  <ProtectedRoute>
                    <DashboardRestaurant />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/restaurant/:id"
                element={
                  <ProtectedRoute>
                    <DashboardCustomer />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/restaurant/:id/edit"
                element={
                  <ProtectedRoute>
                    <CreateRestaurant />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/restaurant"
                element={
                  <ProtectedRoute>
                    <CreateRestaurant />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/restaurants"
                element={
                  <ProtectedRoute>
                    <DashboardCustomer />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </UserAuthContextProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
