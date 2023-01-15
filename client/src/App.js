import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Navbar>
      </Container>
    </BrowserRouter>
  );
}
