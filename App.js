import React from "react";
import Header from "./components/header"
import Hard from "./components/hard"
import Button from "./components/button"
import { Routes,Route,Link } from "react-router-dom";


function App() {
  return (

   <><div> <Routes>
      <Route exact path="/menuchoose" element={[          
          <Header />,
          <Hard />,
          <Button />]} />
      <Route exact path="/barogume" element={[<bagrogume />]} />
      </Routes>
      </div></>
  );
}

export default App;
