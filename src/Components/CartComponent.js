import { Box, IconButton, TableCell, TableRow } from "@mui/material";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart, removeToCart } from "../redux/actions/cartAction";
import CancelIcon from '@mui/icons-material/Cancel';
const CartComponent = () => {
    const cartData = useSelector((state) => state.cart.cartData);
    const dispatch = useDispatch();
    return (
        <>
            {
                cartData.length == 0 ?
                    <>
                    </>
                    :
                    cartData.map((product, index) => {
                        return (
                            <TableRow>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>
                                    <img style={{ height: "100px", width: "150px" }} className="cart-img img-fluid" src={product.thumbnail} />
                                </TableCell>
                                <TableCell>{product.title}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell >
                                    <Box className="align-items-center d-flex">
                                        <Button onClick={() => dispatch(removeToCart(product))} variant="danger">-</Button>
                                        <span className="ms-3 me-3">{product.quantity}</span>
                                        <Button onClick={() => dispatch(addToCart(product))} variant="success">+</Button>
                                    </Box>
                                </TableCell>
                                <TableCell>{product.price * product.quantity}</TableCell>
                                <TableCell>
                                    <IconButton>
                                        <CancelIcon onClick={() => dispatch(deleteFromCart(product))} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )
                    })
            }
        </>
    )
}
export default CartComponent;