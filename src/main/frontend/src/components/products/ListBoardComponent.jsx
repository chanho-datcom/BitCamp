import React, {useState, useEffect} from "react";
import BoardService from "../../service/ProductService";
import {useNavigate} from "react-router-dom";
import ProductService from "../../service/ProductService";
import UserService from "../../service/UserService";

const ListBoardComponent = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [sellerNickname, setSellerNickname] = useState("");
  let nickname = [];
  //2. 리액트의 생명주기 메소드인 'componentDidMount'에서
  //'BoardService'의 메소드를 호출해서 데이터를 가져온다.
  //this.state에 선언한 변수의 값을 변경하기 위해선 setState사용한다.
  useEffect(() => {
    ProductService.getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);


  //(2) 글 작성 버튼을 클릭시 글 작성 페이지로 이동하게 해주는 함수를 정
  //

  //3.render()함수의 내용이 실제 웹페이지에 표시
  //maps()함수를 사용해서 boards 데이터 출력

  return (
    <div>
      <h2 className="text-center">Products List</h2>

      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>상품 번호</th>
              <th>상품명 </th>
              <th>작성자 </th>
              <th>최근등록일 </th>
              <th>좋아요수</th>
              <th>조회수</th>
              <th>가격 </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr onClick={()=>{ navigate("/ProductDetail" + product.id)}} key={product.id}>
                <td> {product.id} </td>
                <td> {product.productname} </td>
                <td> {product.nickname}</td>
                <td> {product.updatedDate} </td>
                <td> {product.likes} </td>
                <td> {product.counts} </td>
                <td> {product.price} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBoardComponent;
