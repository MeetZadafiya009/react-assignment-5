import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "../../Components/ProductComponent";
import { setProduct } from "../../redux/actions/productAction";
import { Pagination } from "@mui/material";
import './../../style/bootstrap.css';
import  './../../style/style.css'
const Products = () => {
    const dispatch = useDispatch();
    const total=Math.ceil(100/8);
    const products = useSelector((state) => state.products.product);
    const [tmp,setTmp]=useState(true);
    useEffect(() => {
        fetchProducts(0);
    }, [])
    const fetchProducts = async (skip = 0) => {
        setTmp(false);
        let result = await fetch(`https://dummyjson.com/products?skip=${skip}&limit=8`);
        let data = await result.json();
        setTmp(true);
        dispatch(setProduct(data.products));
    }
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">

                    </div>
                    <div className="row pt-5">
                        {products.length != 0 && tmp? <ProductComponent data={products} /> : <div className="loader"><img src="./../images/loader.gif" alt='loader'/></div>}
                        <div className="col-12 py-5 d-flex justify-content-center">
                            <Pagination count={total} size='large' color="primary" onChange={(event,value)=>fetchProducts((value-1)*8)} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Products;