import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import UserService from "../../service/UserService";
import HeaderComponent from "../headers/HeaderComponent";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setPassword] = useState("");

  const auth = (event) => {
    event.preventDefault();
    const user = {
      username: inputUsername,
      password: inputPassword,
    };
    UserService.logIn(user).then((response) => {
      console.log(response.data);
      if(response.data === ""){
        alert("아이디와 비밀번호를 입력하시오.");
      }else{
        sessionStorage.setItem("logIn",JSON.stringify(response.data));
        navigate("/");
      }
    
    });
  };

  const ChangeInputUsername = (event) => {
    setInputUsername(event.target.value);
  };
  const ChangeInputPassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="id"
        name="username"
        value={inputUsername}
        onChange={ChangeInputUsername}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={inputPassword}
        onChange={ChangeInputPassword}
      />
      <button className="btn btn-outline-success" onClick={auth}>
        SignIn
      </button>
    </div>
  );
};

export default LoginComponent;
