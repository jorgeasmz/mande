import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import LogIn from "./components/pages/LogIn";
import Role from "./components/pages/Role";
import Working from "./components/pages/Working";
import WorkerMenu from "./components/pages/WorkerMenu";
import WorkerSelected from "./components/pages/WorkerSelected";
import PaymentHistory from "./components/pages/PaymentHistory";
import FinishWork from "./components/pages/FinishWork";

export default function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="*" element={<Home />}/>
          <Route path="/sign-up/role" element={<Role />} />
          <Route path="/sign-up/working" element={<Working />} />
          <Route path="/worker_menu" element={<WorkerMenu />} />
          <Route path="/worker_selected" element={<WorkerSelected />} />
          <Route path="/payment_history" element={<PaymentHistory />} />
          <Route path="/finish_work" element={<FinishWork />} />
        </Routes>
      </BrowserRouter>
  );
}