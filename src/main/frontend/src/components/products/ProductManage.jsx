import React, {useEffect, useState} from 'react';

import ProductService from "../../service/ProductService";
import UserService from "../../service/UserService";


const ProductManage = () => {
    const [products, setProducts] = useState([]);
    const [sellerNickname, setSellerNickname] = useState("");
    useEffect(() => {
        console.log(JSON.parse(sessionStorage.getItem("logIn")).id)
        const product = {
            sellerid : JSON.parse(sessionStorage.getItem("logIn")).id
        }

        ProductService.getSellerProducts(product).then((res) => {
            console.log(res.data)
            setProducts(res.data);
            const user = {
                id : res.data[0].sellerid
            }
            UserService.selectOne(user).then((res)=>{
                setSellerNickname(res.data.nickname);
            })
        })
    }, []);

    return (
        <div>
            <h2 className="text-center">Products Manage</h2>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>상품 번호</th>
                        <th>상품명 </th>
                        <th>작성자 </th>
                        <th>작성일 </th>
                        <th>갱신일 </th>
                        <th>좋아요수</th>
                        <th>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td> {product.id} </td>
                            <td> {product.productname} </td>
                            <td> {sellerNickname} </td>
                            <td> {product.registerDate} </td>
                            <td> {product.updatedDate} </td>
                            <td> {product.likes} </td>
                            <td> {product.counts} </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductManage;