import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeSelectedProduct, selectProduct } from "../redux/actions/productAction";
import ProductSlider from "../Components/ProductSlider";
const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.single);
    useEffect(() => {
        fetchSingleProduct();
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [id]);
    const fetchSingleProduct = async () => {
        let result = await fetch(`https://dummyjson.com/products/${id}`);
        let data = await result.json();
        dispatch(selectProduct(data));
    }
    return (
        <>

            <section>
                <div className="container py-5">
                    <div className="row">

                    </div>
                    {
                        Object.keys(product).length != 0 ?
                            <div className="row py-5">
                                <div className="col-md-6">
                                    <ProductSlider data={product.images} />
                                </div>
                                <div className="col-md-6 pt-5">
                                    <h3 className="text-center">{product.title}</h3>
                                    <p className="text-center">{product.description}</p>
                                    <p className="text-center">brand :{product.brand}</p>
                                    <p className="text-center h2">₹ {product.price - Math.floor(((product.price * product.discountPercentage) / 100))}</p>
                                    <div className="d-flex py-3 justify-content-center align-items-center">
                                        <button className="btn btn-dark">ADD TO CART</button>
                                        <span className="text-success ms-3">{product.stock>0 ? "IN STOCK":<span className="text-danger">OUT OF STOCK</span>}</span>
                                    </div>
                                </div>
                            </div> :
                            <>Loading</>
                    }
                </div>
            </section>
        </>
    )
}

export default Product;