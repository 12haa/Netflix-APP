import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login  from './pages/Login'
import Signup  from './pages/Signup'
import Account from './pages/Account'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectetRoute from "./components/ProtectetRoute";

function App() {
 
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={ <ProtectetRoute ><Account /> </ProtectetRoute>} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
