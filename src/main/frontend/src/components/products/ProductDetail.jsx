import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import ProductService from "../../service/ProductService";

const ProductDetail = () => {
    const {id} = useParams();
    console.log({id});

    useEffect(()=>{
        const product = {
            id : {id}
        }
        ProductService.getProductOne(product).then((response) => {

        })
    })

    return (
        <div>

        </div>
    );
};

export default ProductDetail;