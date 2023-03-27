import { Link } from "react-router-dom";

const ProductComponent = (props) => {
    return (
        <>
            {
                props.data.map((product,index) => {
                    return (
                        <div key={index} className="col-lg-4 col-md-6 mb-5">
                            <div className="card">
                                <Link to={`/product/${product.id}`}><img src={product.thumbnail} style={{height:"300px"}} className="img-fluid card-img-top"  /></Link>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <button className="btn btn-dark me-4">₹ {product.price-Math.floor(((product.price*product.discountPercentage)/100))}</button>
                                    <button className="btn btn-primary">ADD TO CART</button>
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