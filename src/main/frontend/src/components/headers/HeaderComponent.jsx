import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UnLogInHeader from "./UnLogInHeader";
import {useNavigate} from "react-router-dom";
import LogInedHeader from "./LogInedHeader";
const HeaderComponent = () => {
    const navigate = useNavigate();

  return (
        <div>
            { JSON.parse(sessionStorage.getItem("logIn")) === null ? <UnLogInHeader/>: <LogInedHeader />}
        </div>
        
    
  );
};

export default HeaderComponent;
