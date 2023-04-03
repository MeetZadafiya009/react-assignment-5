import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartComponent from "../../Components/CartComponent";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const cartData = useSelector((state) => state.cart.cartData);
    return (
        <>
            {
                cartData.length!=0 ?
                <section>
                    <div className="container-fluid pt-5">
                        <div className="row">
                            <div className="col-9 px-5 py-2">
                                <Table className="cart-table pt-5" style={{ boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0" }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>No</TableCell>
                                            <TableCell>PRODUCT</TableCell>
                                            <TableCell>NAME</TableCell>
                                            <TableCell>PRICE</TableCell>
                                            <TableCell>QUANTITY</TableCell>
                                            <TableCell>TOTAL</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <CartComponent />
                                    </TableBody>
                                </Table>
                            </div>
                            
                            <div className="col-3 py-2 position-relative">
                                <div className="checkout px-3 py-4">
                                    <div className="row">
                                        <div className="col-6">Quantity</div>
                                        <div style={{ textAlign: "right" }} className="col-6">{cart.quantity} N</div>
                                    </div>
                                    <div className="row pt-3">
                                        <div className="col-6">Subtotal</div>
                                        <div style={{ textAlign: "right" }} className="col-6">₹ {cart.total}</div>
                                    </div>
                                    <div className="row pt-4 pb-2 align-items-center">
                                        <div className="col-6">
                                            <h6>Shipping Fees</h6>
                                            <p>Deliver to Gandhinagar</p>
                                        </div>
                                        <div style={{ textAlign: "right" }} className="col-6">₹ 150</div>
                                    </div>
                                    <div className="row py-2 mx-1 mb-4 bg-white align-items-center">
                                        <div className="col-6">
                                            <h6>Total</h6>
                                            <p>incl. VAT</p>
                                        </div>
                                        <div style={{ textAlign: "right" }} className="col-6">
                                            ₹ {cart.total+150}
                                        </div>
                                    </div>
                                    <div className="row pt-3 pb-3 justify-content-center">
                                        <div className="col-10">
                                            <Button variant="dark w-100">Proceed to checkout</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>:
                            <></>


                        </div>
                    </div>
                </section>:
                <>
                    <section>
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="text-center">Your cart is empty</h3>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    )
}
export default Cart;