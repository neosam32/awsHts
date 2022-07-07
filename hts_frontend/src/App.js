import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import EstWritePage from "./pages/est/EstWritePage";
import EstListPage from "./pages/est/EstListPage";
import TestWritePage from "./pages/TestWritePage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";

/*

*/

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' exact={true} element={<HomePage />} />
        <Route path='/login' exact={true} element={<LoginPage />} />
        <Route path='/join' exact={true} element={<JoinPage />} />
        <Route path='/est/write' exact={true} element={<EstWritePage />} />
        <Route path='/est/search' exact={true} element={<EstListPage />} />
        <Route path='/testWrite' exact={true} element={<TestWritePage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
