import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListBoardComponent from './components/products/ListBoardComponent';
import HeaderComponent from './components/headers/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateBoardComponent from "./components/products/CreateBoardComponent";
import LoginComponent from "./components/users/LoginComponent";
import SignUpComponent from "./components/users/SignUpComponent";
import MyPageComponent from "./components/users/MyPageComponent";
import ProductDetailComponent from "./components/products/ProductDetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import ProductManage from "./components/products/ProductManage";
function App() {
    return (
        <div className="App">
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Routes>
                        <Route path = "/board" element={<ListBoardComponent  />} ></Route>
                        <Route path = "/SignUp" element={<SignUpComponent/>}></Route>
                        <Route path= "/Login" element={<LoginComponent/>}></Route>
                        <Route path = "/create-board" element={<CreateBoardComponent/>} ></Route>
                        <Route path = "/MyPage" element={<MyPageComponent />}></Route>
                        <Route path="/ProductManage" element={<ProductManage/>}></Route>
                        <Route path = "/ProductDetail:id" element={<ProductDetailComponent />}></Route>
                        <Route path = "/" element={<ListBoardComponent/>} ></Route>
                    </Routes>
                </div>
                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;
