import {useState} from "react";
import UserService from "../../service/UserService";
import {useNavigate} from "react-router-dom";

const SignUpComponent = () => {
  const navigate = useNavigate();
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputNickname, setInputNickname] = useState("");
  const [inputGrade, setInputGrade] = useState("");
  const ChangeInputUsername = (event) => {
    setInputUsername(event.target.value);
  };
  const ChangeInputPassword = (event) => {
    setInputPassword(event.target.value);
  };
  const ChangeInputNickname = (event) => {
    setInputNickname(event.target.value);
  };
  const ChangeInputGrade = (event) => {
    console.log(inputGrade);
    setInputGrade(event.target.value);
  };

  const register = (event) => {
    event.preventDefault();
    const user = {
      username: inputUsername,
      password: inputPassword,
      nickname: inputNickname,
      grade: inputGrade,
    };
    UserService.register(user).then((response) => {
      console.log(response.data);
      const state = {"id" : response.data};
      if(response.data!=0){
        navigate('/', state)
      }
    });
  };

  return (
    <div className="container">
      <div className="input-form-backgroud row">
        <div className="input-form col-md-12 mx-auto">
          <h4 className="mb-3">회원가입</h4>

          <div className="mb-3">
            <label htmlFor="username">UserName</label>
            <input
              type="email"
              className="form-control"
              name="username"
              placeholder="username"
              value={inputUsername}
              onChange={ChangeInputUsername}
            />
            <div className="invalid-feedback">아이디를 입력해주세요.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="password"
              value={inputPassword}
              onChange={ChangeInputPassword}
            />
            <div className="invalid-feedback">비밀번호를 입력해주세요.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="nickname">Nickname</label>
            <input
              type="text"
              className="form-control"
              name="nickname"
              placeholder="nickname"
              value={inputNickname}
              onChange={ChangeInputNickname}
            />
            <div className="invalid-feedback">별명을 입력해주세요.</div>
          </div>
          <fieldset>
            <legend>Choose your classification. </legend>
            <div>
            <label htmlFor="grade"><input type="radio"  name="grade" value="1" onChange={ChangeInputGrade} checked={inputGrade === "1"} />
              customer</label>
            </div>

            <div>
            <label htmlFor="grade"><input type="radio" name="grade" value="2" onChange={ChangeInputGrade}  checked={inputGrade === "2"}/>
              seller</label>
            </div>

          </fieldset>

          <hr className="mb-4" />

          <div className="mb-4"></div>
          <button className="btn btn-primary btn-lg btn-block" onClick={register}>
            가입 완료
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignUpComponent;
