import React, { useEffect, useState } from "react";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import { redirectPath } from "../utils/redirectPath";
const Root = () => {
  const [currentLocation, setCurrentLocation] = useState("");
  const isAuthed = Boolean(localStorage.getItem(`isAuthed`));
  const location = useLocation();

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location.pathname]);

  return (
    <Routes>
      {isAuthed ? (
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      ) : (
        <>
          {redirectPath.includes(currentLocation) ? (
            <Route path={currentLocation} element={<Navigate to="/login" />} />
          ) : (
            ""
          )}
        </>
      )}
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default Root;
