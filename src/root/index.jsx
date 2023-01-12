import React, { useEffect, useState } from "react";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import { RequireAuth } from "react-auth-kit";
import NotFound from "../components/404";
import Flow from "../components/FlowByParams";
import FlowSection from "../components/FlowSections";
const Root = () => {
  const [currentLocation, setCurrentLocation] = useState("");
  const isAuthed = Boolean(localStorage.getItem(`isAuthed`));
  const location = useLocation();

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location.pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth loginPath="/login">
            <Navbar />
          </RequireAuth>
        }>
        <Route index element={<Home />} />
        <Route path={"/flow/:flowID"} element={<Flow />} />
        <Route
          path={"/flow/:flowID/:flowSection/:flowDate"}
          element={<FlowSection />}
        />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Root;
