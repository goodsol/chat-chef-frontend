import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Info from "./pages/Info";

function App() {
  // logic
  const [ingredientList, setIngredientList] = useState([])

  // view
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Info.jsx(자식)으로부터 sendIngredientList 함수 통해 data(ingredientList )받음 */}
      <Route path="/info" element={<Info sendIngredientList={(data) => setIngredientList(data)} />} /> 
      {/* Chat.jsx(자식)으로 Props ingredientList 넘김 */}
      <Route path="/chat" element={<Chat ingredientList={ingredientList}/>} />
    </Routes>
  );
}

export default App;
