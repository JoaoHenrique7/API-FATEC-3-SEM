import React from "react";
import AppRoutes from "./routes/App.routes";
import "./App.css";

class App extends React.Component {
  render() {
    return (
        <div>
          <AppRoutes />
        </div>
    );
  }
}

export default App;