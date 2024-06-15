import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Tickets from "../pages/Tickets";
import PrivateRoutes from "./PrivateRoutes";
import TicketCreate from "../pages/TicketCreate";
import TicketView from "../pages/TicketView";
import TicketEdit from "../pages/TicketEdit";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      />
      <Route
        path="/about"
        element={
          <PrivateRoutes>
            <About />
          </PrivateRoutes>
        }
      />
      <Route
        path="/contact"
        element={
          <PrivateRoutes>
            <Contact />
          </PrivateRoutes>
        }
      />
      <Route
        path="/tickets"
        element={
          <PrivateRoutes>
            <Tickets />
          </PrivateRoutes>
        }
      />
      <Route
        path="/ticket/create"
        element={
          <PrivateRoutes>
            <TicketCreate/>
          </PrivateRoutes>
        }
      />
      <Route
        path="/ticket/view/:id"
        element={
          <PrivateRoutes>
            <TicketView />
          </PrivateRoutes>
        }
      />
      <Route
        path="/ticket/edit/:id"
        element={
          <PrivateRoutes>
            <TicketEdit />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}
