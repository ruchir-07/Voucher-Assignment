import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TopAlert from "../components/_topalert.jsx";
import NavBar from "../components/_nav.jsx";
import Footer from "../components/_footer.jsx";

const styles = {
  cardStyle: {
    marginLeft: "1%",
    marginRight: "1%",
    boxShadow: "none",
    cursor: "pointer"
  },
  imgBox: {
    backgroundColor: "#D5D9E7",
    width: 260,
    height: 350,
    position: "relative"
  },
  discountText: {
    backgroundColor: "#5AC7D2",
    color: "#001246",
    fontWeight: 700,
    padding: "10px",
    width: "15%",
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: "0px 5px 0px 0px"
  },
  productName: {
    color: "#001246",
    fontWeight: 700
  },
  flashSale: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "18%",
    backgroundColor: "#FFBC0F",
    padding: "3px 1%",
    marginTop: 2,
    marginBottom: 2,
  }
}

export const Sales = () => {
  const [products, setProducts] = useState([{}]);
  useEffect(() => {
    axios.get("https://voucherify-rest-api.vercel.app/api/readProducts")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);


  const displayCards = (cardData) => {
    return (
      <Card sx={styles.cardStyle}>
        <CardContent>
          <Box sx={styles.imgBox}>
            <Typography variant="body2" sx={styles.discountText}>-50%</Typography>
          </Box> {/* Image Box */}
          <Typography variant="h5" sx={styles.productName}>{cardData.name}</Typography>
          <Box
            display="flex"
            alignItems="center"
          >
            <Typography variant="body1" sx={{ color: "#3C8A3C" }} fontWeight={700}>${cardData.new_price}</Typography>
            <Typography variant="body1" sx={{ color: "#8B94B2", textDecoration: "line-through" }} marginLeft={1} fontWeight={700}>${cardData.old_price}</Typography>

          </Box>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <TopAlert />
      <NavBar />
      <Box paddingLeft={4} paddingRight={4}>
        <Typography variant="h4" component="div" align="center" fontWeight={700}>Sales</Typography>
        <Box sx={styles.flashSale}>
          <ArrowForwardIosIcon />
          <Typography component="span" align="center" fontWeight={700}>FLASH SALES |</Typography>
          <Typography component="span">End in 01 h 08 m 59 s</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          {products.map(displayCards)}
        </Box>
      </Box>
      <Footer />
    </>
  )
}
