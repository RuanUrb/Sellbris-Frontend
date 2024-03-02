import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import './App.css'
import Header from "@/layout/Header";
import Footer from "@/layout/Footer/index";
import styled from 'styled-components';
import ProductInfo from "@/components/ProductInfo";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Sell from "./pages/Sell";
import Products from './pages/Products'
import Wishlist from "@/pages/Cart";
import SignOut from "./pages/Signout";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`

const Content = styled.div`
  flex: 1;
`
function App() {
  return (
    <>
      <MainContainer>
        <Header />
          <Content>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="products/:id" element={<ProductInfo />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signout" element={<SignOut/>} />
                <Route path="/sell" element={<Sell/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/wishlist" element={<Wishlist/>} />
            </Routes>
          </Content>
        <Footer />
      </MainContainer>
    </>
  );
}

export default App;
