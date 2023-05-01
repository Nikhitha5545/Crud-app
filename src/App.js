import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Detail from './components/detail';
// import Create from "./components/create";
// import List from "./components/list";
// import Edit from './components/edit';

function App() {
  
  return (
   <Router>
<Routes>
    {/* <Route exact path= "/"element={<List/>}></Route>
    <Route exact path="/create" element={<Create/>}></Route>
    <Route exact path="/edit/:car1Id" element={<Edit/>}></Route> */}
    <Route exact path="/" element={<Home />}></Route>
    <Route exact path="/detail/:dataId" element={<Detail />}></Route>
</Routes>
   </Router>
  );
}

export default App;