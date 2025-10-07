// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import PetForm from "./pages/pet-form/PetForm";
import PetDetail from "./pages/pet-detail/PetDetail";
import Contact from "./pages/contact/Contact";
import EditPet from "./pages/edit-pet/EditPet";
import Footer from "./components/Footer/Footer";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<PetDetail/>} />
          <Route path="/add" element={<PetForm />} />
          <Route path="/edit/:id" element={<EditPet />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </UserProvider>
  );
}

export default App;