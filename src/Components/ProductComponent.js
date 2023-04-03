import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions/cartAction";

const ProductComponent = (props) => {
    const dispatch=useDispatch();
    return (
        <>
            {
                props.data.map((product, index) => {
                    return (
                        <div key={index} className="product col-xl-3 col-md-6 mb-5">
                            <div className="card">
                                <Link className="link" to={`/product/${product.id}`}><img src={product.thumbnail} style={{ height: "300px" }} className="img-fluid card-img-top" /></Link>
                                <div className="card-body">
                                    <h6 className="card-title">{product.title}</h6>
                                    <div className="py-3  d-flex justify-content-between">
                                        <button className="btn btn-dark">₹ {product.price - Math.floor(((product.price * product.discountPercentage) / 100))}</button>
                                        <button onClick={()=>dispatch(addToCart(product))} className="btn btn-primary">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
export default ProductComponent;