import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "../pages/dashboard/Dashboard";

class AppRoutes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRoutes;