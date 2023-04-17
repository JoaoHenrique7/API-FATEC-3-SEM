import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "../pages/Dashboard/Dashboard";
import Logon from "../pages/Logon/LogonPage"

class AppRoutes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Logon />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRoutes;