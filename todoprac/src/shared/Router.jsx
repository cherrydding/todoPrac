import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Detail from "../redux/pages/Detail";


const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/:id" element={<Detail/>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;
  