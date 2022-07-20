import React, {Component, useEffect, useState} from 'react';
import BoardService from '../../service/ProductService';
import { useNavigate } from "react-router-dom";

const CreateBoardComponent =() =>{
    const navigate = useNavigate();
    const [inputType, setInputType] = useState('');
    const [inputTitle, setInputTitle] = useState('');
    const [inputContent, setInputContent] = useState('');
    const [inputMemberId, setInputMeberId] = useState('');
    if(JSON.parse(sessionStorage.getItem("logIn"))===null){
        return "로그인 후 이용가능합니다";
    }


    // 2.

    //3.
    const changeTypeHandler = (event) => {
        setInputType(event.target.value);
    }
// 3.
    const changeTitleHandler = (event) => {
        setInputTitle(event.target.value);
    }
//3.
    const changeContentsHandler = (event) => {
        setInputContent( event.target.value);
    }
// 3.
    const changeMemberIdHandler = (event) => {
        setInputMeberId(event.target.value);
    }

// 4.
    const createBoard = (event) => {
        event.preventDefault();
        const board = {
            type: inputType,
            title: inputTitle,
            content: inputContent,
            memberId: inputMemberId
        }
        console.log("board => "+ JSON.stringify(board));
        BoardService.createBoard(board).then(res => {
            navigate('/board')
        });
    }

// 5.




    return (

        <div>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">새글을 작성해주세요</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> Type </label>
                                    <select placeholder="type" name="type" className="form-control"
                                            value={inputType} onChange={changeTypeHandler}>
                                        <option value="1">자유게시판</option>
                                        <option value="2">질문과 답변</option>
                                    </select>
                                </div>
                                <div className = "form-group">
                                    <label> Title </label>
                                    <input type="text" placeholder="title" name="title" className="form-control"
                                           value={inputTitle} onChange={changeTitleHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Contents  </label>
                                    <textarea placeholder="contents" name="content" className="form-control"
                                              value={inputContent} onChange={changeContentsHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> MemberNo  </label>
                                    <input placeholder="memberNo" name="memberId" className="form-control"
                                           value={inputMemberId} onChange={changeMemberIdHandler}/>
                                </div>
                                <button className="btn btn-success" onClick={createBoard}>Save</button>
                                <button className="btn btn-danger" onClick={() => navigate("/")} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default CreateBoardComponent;