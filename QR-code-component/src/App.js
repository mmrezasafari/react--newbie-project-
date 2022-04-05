import React from "react";
import "./App.css";
import QrComponent from "./components/QrComponent";
import logo from "./assets/images/image-qr-code.png";

function App() {
  return <QrComponent src={logo} />;
}

export default App;
