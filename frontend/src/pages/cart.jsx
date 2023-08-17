import { useContext, useEffect, useState } from 'react'
import { Box, Typography, Button, Input, Divider } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CouponContext } from '../contexts/couponcontext.js'
import NavBar from '../components/_nav.jsx';
import InputBox from '../components/_inputbox.jsx';

const styles = {
    checkoutBtn:{
        backgroundColor: "#001246",
        fontWeight: 600,
        color: "#FFF",
        width: "100%",
        padding: "20px 32px"
    },
    subheading: {
        color: "#001246",
        fontSize: 18,
        marginBottom:4
    },
    imgBox: {
        width: 80,
        height: 80,
        backgroundColor: "#D5D9E7"
    },
    couponCode:{
        display: "flex",
        alignItems: "center",
        fontWeight:600,
        fontSize:12,
        backgroundColor: "#D5D9E7",
        color: "#001246",
        border: "1px solid #213473",
        borderRadius: "5px",
        padding: "1% 1%"
    },
    orderSummary: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "space-between",
        flexDirection: "column",
        marginBottom: 4,
        border: 1,
        borderColor: "#B1B8D0",
        padding: 3
    }
}


export const Cart = () => {
    const [discount, setDiscount] = useState(0);
    const { code } = useContext(CouponContext);
    
    useEffect(()=>{
        code.amount<1 ? setDiscount((93.87*code.amount).toFixed(2)) : setDiscount(code.amount)
    }, [])

    return (
        <>
            <NavBar />
            <Typography variant="h4" component="div" align="center" fontWeight={700}>Your cart</Typography>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
                padding={5}
            >
                <Box width="45%" height="60vh" marginLeft={5} marginRight={5} >
                    <Typography sx={styles.subheading} component="div">Item summary (3)</Typography>

                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ borderTop: 1, borderBottom: 1, borderColor: "#B1B8D0", paddingTop: 3, paddingBottom: 3 }}>
                        <Box sx={styles.imgBox}></Box> {/* Item image */}
                        <Typography fontWeight={700} component="div" width="30%">Johan & Nystrom Caravan <Typography fontWeight={500}>20 oz bag</Typography></Typography>
                        <Box sx={{ border: 1, borderColor: "#D5D9E7", paddingLeft: 5, paddingRight: 5, paddingTop: 1, paddingBottom: 1 }}>1</Box>
                        <Typography fontWeight={600} component="div" width="10%">$26.99</Typography>
                        <Typography component="div" display="flex" fontWeight={600}><DeleteOutlineIcon />Remove</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ borderTop: 1, borderBottom: 1, borderColor: "#B1B8D0", paddingTop: 3, paddingBottom: 3 }}>
                        <Box sx={styles.imgBox}></Box> {/* Item image */}
                        <Typography fontWeight={700} component="div" width="30%">Illy Arabica <Typography fontWeight={500}>Bestseller 18 oz bag</Typography></Typography>
                        <Box sx={{ border: 1, borderColor: "#D5D9E7", paddingLeft: 5, paddingRight: 5, paddingTop: 1, paddingBottom: 1 }}>1</Box>
                        <Typography fontWeight={600} component="div" width="10%">$21.02</Typography>
                        <Typography component="div" display="flex" fontWeight={600}><DeleteOutlineIcon />Remove</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ borderTop: 1, borderBottom: 1, borderColor: "#B1B8D0", paddingTop: 3, paddingBottom: 3 }}>
                        <Box sx={styles.imgBox}></Box> {/* Item image */}
                        <Typography fontWeight={700} component="div" width="30%">Hard Beans Etiopia <Typography fontWeight={500}>6 oz bag</Typography></Typography>
                        <Box sx={{ border: 1, borderColor: "#D5D9E7", paddingLeft: 5, paddingRight: 5, paddingTop: 1, paddingBottom: 1 }}>1</Box>
                        <Typography fontWeight={600} component="div" width="10%">$3.88</Typography>
                        <Typography component="div" display="flex" fontWeight={600}><DeleteOutlineIcon />Remove</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ borderTop: 1, borderBottom: 1, borderColor: "#B1B8D0", paddingTop: 3, paddingBottom: 3 }}>
                        <Box sx={styles.imgBox}></Box> {/* Item image */}
                        <Typography fontWeight={700} component="div" width="30%">Johan & Nystrom Bourbon <Typography fontWeight={500}>6 oz bag</Typography></Typography>
                        <Box sx={{ border: 1, borderColor: "#D5D9E7", paddingLeft: 5, paddingRight: 5, paddingTop: 1, paddingBottom: 1 }}>2</Box>
                        <Typography fontWeight={600} component="div" width="10%">$41.98</Typography>
                        <Typography component="div" display="flex" fontWeight={600}><DeleteOutlineIcon />Remove</Typography>
                    </Box>

                </Box>

                <Box width="45%" height="60vh" marginLeft={5} marginRight={5}>
                    <Typography sx={styles.subheading} component="div">Order summary</Typography>
                    <Box height="57vh" sx={styles.orderSummary}>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography fontWeight={600}>Subtotal:</Typography>
                            <Typography fontWeight={600}>$93.87</Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography fontWeight={600}>Shipping:</Typography>
                            <Typography>Calculated at next step</Typography>
                        </Box>
                        <Typography fontWeight={600}>Coupon Codes:</Typography>
                        <InputBox text="Enter your coupon" />
                        <Typography fontWeight={600}>Promotions:</Typography>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography component="div" sx={styles.couponCode}>
                                <ShoppingCartIcon fontSize="small" />{code.code}
                                </Typography>
                            <Typography fontWeight={600} sx={{ color:"#3C8A3C" }}>-${discount}</Typography>
                        </Box>
                        <Divider />
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography component="div" fontWeight={600}>
                                All Your Discounts:
                                </Typography>
                            <Typography fontWeight={600} sx={{ color:"#3C8A3C" }}>-${discount}</Typography>
                        </Box>

                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography component="div" fontWeight={600}>
                                Grand Total:
                                </Typography>
                            <Typography fontWeight={600}>${(93.87-discount).toFixed(2)}</Typography>
                        </Box>

                        

                    </Box>
                    <Button variant="contained" sx={styles.checkoutBtn}>Checkout</Button>
                </Box>
            </Box>
        </>
    )
}
