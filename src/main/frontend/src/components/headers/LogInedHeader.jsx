import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const LogInedHeader = () => {
  const [garde, setGrade] = useState("");
  const navigate = useNavigate();

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
          <a className="navbar-brand" onClick={()=>{
              navigate('/');
          }}>
              Navbar
          </a>
          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="frontend/src/components/headers/LogInedHeader#">
                          Home
                      </a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="frontend/src/components/headers/LogInedHeader#">
                          Link
                      </a>
                  </li>
                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="frontend/src/components/headers/LogInedHeader#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a className="dropdown-item" href="frontend/src/components/headers/LogInedHeader#">Action</a></li>
                          <li><a className="dropdown-item" href="frontend/src/components/headers/LogInedHeader#">Another action</a></li>
                          <li><hr className="dropdown-divider" /></li>
                          <li><a className="dropdown-item" href="frontend/src/components/headers/LogInedHeader#">Something else here</a></li>
                      </ul>
                  </li>
                <li className="nav-item">
                      <a className="nav-link active" aria-current="page" onClick={()=>{navigate("/MyPage")}}>
                          MyPage
                      </a>
                </li>
                  {JSON.parse(sessionStorage.getItem("logIn")).grade == 2 ? <li className="nav-item">
                      <a className="nav-link active" aria-current="page" onClick={()=>{navigate("/ProductManage")}}>
                          ProductManage
                      </a>
                  </li>
                      : <li className="nav-item">
                  </li>}
              </ul>
              <div className="d-flex">
                  <a className="nav-link active"  aria-label="Search">{ JSON.parse(sessionStorage.getItem("logIn")).nickname} 님 환영합니다.</a>
                  <button className="btn btn-outline-success" onClick={()=>{
                      sessionStorage.removeItem("logIn");
                      navigate("/");
                  }}>
                              LogOut
                  </button>
              </div>
          </div>
      </div>
  </nav>
  <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
              <a href="http://localhost:3000" className="navbar-brand">
                  {" "}
                  Board-FullStack-App
              </a>
          </div>
          <h1>Hearder</h1>
      </nav>
  </header>
</div>
  );
};

export default LogInedHeader;