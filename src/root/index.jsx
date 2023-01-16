import React, { useEffect, useState } from "react";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import NotFound from "../components/404";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import { navigationData } from "../utils/navigationData";
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
        {navigationData.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Root;
