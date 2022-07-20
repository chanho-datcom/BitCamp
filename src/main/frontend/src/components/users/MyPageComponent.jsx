import React, {useEffect, useState} from 'react';
import UserService from "../../service/UserService";
import {useNavigate} from "react-router-dom";


const MyPageComponent = () => {
    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState(false);
    const [inputPassword, setInputPassword]= useState("");
    const [inputNickname, setInputNickname] = useState("");
    const [inputGrade, setInputGrade] = useState("");
    const [oldPassword, setOldPassword] = useState("");

    useEffect(()=>{
        if(JSON.parse(sessionStorage.getItem("logIn")) ===null){
            navigate("/");
        }
    }, [])

    const ChangeOldPassword = (event) =>{
        setOldPassword(event.target.value);
    }
    const ChangeInputPassword = (event) => {
        console.log(inputPassword)
        setInputPassword(event.target.value);
    };
    const ChangeInputNickname = (event) => {
        console.log(inputNickname);
        setInputNickname(event.target.value);
    };
    const ChangeInputGrade = (event) => {
        console.log(inputGrade);
        setInputGrade(event.target.value);
    };
    const confirm = (event) => {
        event.preventDefault();
        console.log("id " + sessionStorage.getItem("id"))
        const user = {
            id : sessionStorage.getItem("id"),
            password: oldPassword
        };
        UserService.confirm(user).then((response) => {
            console.log(response.data);
            if(response.data === undefined){
                return "비밀번호가 틀립니다.";
            }else{
                setConfirmPassword(true);
                setInputNickname(response.data.nickname);
            }
        });
    }
    const updateInfo = (event) =>{
        event.preventDefault();
        const user = {
            id : sessionStorage.getItem("id"),
            password: inputPassword,
            nickname: inputNickname,
            grade: inputGrade
        };
        UserService.update(user).then((response)=>{
            if(response.data !== 0 ){
                sessionStorage.removeItem("id");
                navigate("/");
            }
        })
    }
    const deleteInfo = (event) => {
        event.preventDefault();
        const user = {
            id : sessionStorage.getItem("id"),
        };
        UserService.delete(user).then((response)=>{
            console.log(response.data);
            if(response.data){
                sessionStorage.removeItem("id");
                navigate("/");
            }
        })
    }

    return (
        <div className="container">
            <div className="input-form-backgroud row">

                {confirmPassword ? <div className="input-form col-md-12 mx-auto">
                    <h4 className="mb-3">{inputNickname}의 회원정보</h4>

                    <div className="mb-3">
                        <label htmlFor="password">New Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="password"
                            value={inputPassword}
                            onChange={ChangeInputPassword}
                        />
                        <div className="invalid-feedback">새로운 비밀번호를 입력해주세요.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="nickname">New Nickname</label>
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
                    <button className="btn btn-primary btn-lg btn-block" onClick={updateInfo}>
                        수정 완료
                    </button>
                        <button className="btn btn-primary btn-lg btn-block" onClick={deleteInfo}>
                            삭제 완료
                        </button>
                </div> :
                    <div className="mb-3">
                        <label htmlFor="password"><h4>회원정보 수정 또는 탈퇴를 원하시면 기존 비밀번호를 입력하시오.</h4></label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="password"
                        value={oldPassword}
                        onChange={ChangeOldPassword}
                    />
                    <div className="invalid-feedback">새로운 비밀번호를 입력해주세요.</div>
                        <button className="btn btn-primary btn-lg btn-block" onClick={confirm}>
                            기존 비밀번호 확인
                        </button>
                    </div>
                   }
            </div>
        </div>
    );
};

export default MyPageComponent;