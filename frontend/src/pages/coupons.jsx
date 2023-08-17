import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useEffect, useState, useContext, useNavigate } from "react";
import axios from "axios";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NavBar from "../components/_nav";
import TopAlert from "../components/_topalert";
import AlertBox from "../components/_alert";
import Footer from "../components/_footer";
import { CouponContext } from "../contexts/couponcontext";

const styles = {
  cardBody: {
    marginLeft: "7px",
    marginRight: "7px",
    marginTop: "12px",
    boxShadow: "none",
    borderRadius: "10px",
    border: "1px solid #8B94B2",
    padding: 1,
    width: "25%",
    height: "35vh",
    overflowY: "auto"
  }
}

export const Coupons = () => {
  const [coupons, setCards] = useState([{}]);
  const [showAlert, setAlert] = useState(false);
  const [valid, setValid] = useState(false);
  const { code, setCode } = useContext(CouponContext);
  // const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://voucherify-rest-api.vercel.app/api/readCoupon")
      .then(response => {
        setCards(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  const deleteCoupon = (couponcode) => {
    axios.get(`https://voucherify-rest-api.vercel.app/api/deleteCoupon?_id=${couponcode._id}`)
    .then(response=> window.location.reload())
    .catch(error=> window.location.reload())

  }

  const copyToClipboard = (couponcode) => {
    navigator.clipboard.writeText(couponcode)
  }
  const applyCoupon = (couponcode) => {
    setAlert(true);
    const expiry_date = new Date(couponcode.expiry).getTime();
    if (expiry_date < Date.now()) {
      setValid(false)
      setCode({});
    }
    else {
      if (couponcode.condition > 93.87) {
        setValid(false)``
        setCode({});
      }
      else {
        setValid(true);
        setCode(couponcode);
      }

    }

    const showTimeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(showTimeout);
    };

  }

  const displayCards = (cardData) => {
    return (
      <Card sx={styles.cardBody}>
        <CardContent>
          <Typography variant="h6"
            sx={{
              color: "#001246",
              fontWeight: "700"
            }}
          >
            {cardData.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#001246",
              fontWeight: "600",
              fontSize: "14px"
            }}
          >
            {cardData.condition === 0 ? "FOR WHOLE ORDER" : `FOR ORDERS ABOVE $${cardData.condition}`}
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginTop={4}
            marginBottom={4}
          >
            <Typography
              variant="body2"
              component="span"
              sx={{ color: "#163ED4" }}
            >Code: {cardData.code}
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="32%">
              <Box
                display="flex"
                alignItems="center"
                sx={{ cursor: "pointer" }}
                onClick={() => copyToClipboard(cardData.code)}>
                <ContentCopyIcon />
                <Typography variant="body2">Copy</Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                sx={{ cursor: "pointer" }}
                onClick={() => applyCoupon(cardData)}
              >
                <ArrowForwardIcon />
                <Typography variant="body2">Apply</Typography>
              </Box>
            </Box>
          </Box>

          <Typography variant="body2">Expiring on:
            {(() => {
              const exp = cardData.expiry;
              return new Date(exp).toLocaleString();
            })()}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#8B94B2",
              fontSize: "12px"
            }}
          >

            {cardData.criteria && cardData.criteria.length > 0 ? (
              <>
                {cardData.criteria.map((criteriaData) => (
                  <li><Typography component="span">{criteriaData}</Typography></li>
                ))}
              </>
            ) : (
              <p>No criteria available.</p>
            )}

          </Typography>

          <Box marginTop={1}>
            <Button variant="contained" onClick={() => deleteCoupon(cardData)}><DeleteOutlineIcon /></Button>
          </Box>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <TopAlert />
      <NavBar />
      {showAlert ? (
        valid ? <AlertBox code={code} success="1" /> : <AlertBox code={code} success="0" />
      ) : null}
      <Typography variant="h4" component="div" align="center" fontWeight={700}>My discounts</Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        marginTop={4}
        width="100%"
      >
        {coupons.map(displayCards)}
      </Box>
      <Footer />
    </>
  )
}
