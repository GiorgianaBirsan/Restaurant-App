
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <>
     <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
                  
        </Routes>
      </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App
