import { NavLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BoltIcon from '@mui/icons-material/Bolt';
import Image1 from "../assets/image1.png";

const styles = {
  mainBox: {
    backgroundColor: "radial-gradient(50% 50% at 0.04% 49.53%, rgba(35, 221, 237, 0.16) 0%, rgba(35, 221, 237, 0.00) 100%)",
    padding: "5%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  welcome: {
    width: "80%"
  },  
  clothHeading: {
    marginBottom: 1,
    fontWeight: 700,
    color: "#001246"
  },
  flash_sale: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFBC0F",
    padding: "1% 1%",
    margin: "10% auto"
  }
}


export const Home = () => {
  return (
    <>
      <Box sx={styles.mainBox}>
        <Box sx={styles.welcome}>

          {/* Top box */}
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            height="70vh">
            <Box width="35%" height="55vh">
              <Box marginBottom={5}>
                <svg width="426" height="70" viewBox="0 0 426 70" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <rect width="425.052" height="70" fill="url(#pattern0)" />
                  <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0_424_10493" transform="matrix(0.000999001 0 0 0.0060661 0 -0.0034862)" />
                    </pattern>
                    <image id="image0_424_10493" width="1001" height="166" xlinkHref="data:image/png;base64,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" />
                  </defs>
                </svg>
              </Box>
              <Box>
                <Typography variant="h4">
                  Ecommerce
                </Typography>
                <Typography variant="h3" fontWeight={700}>
                  Coupons & Promotions <Typography variant="h3" component="span" fontWeight={700} sx={{ color: "#163ED4" }}>UI Kit</Typography>
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              width="50%"
            >
              <Box>
                <img src={Image1} alt="Image1" width={375} height={500}/>
              </Box>
              <Box>
                <Typography variant="h6" sx={styles.clothHeading}>
                  Winter Sweater green
                </Typography>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="h4"
                    marginTop={1}
                    fontWeight={700}
                    sx={{ color: "#3C8A3C" }}>
                    $44.00
                  </Typography>
                  <Box backgroundColor="primary.light" align="center">
                    <Typography
                      variant="h5"
                      marginTop={2}
                      fontWeight={700}
                      component="span"
                      sx={{ color: "#001246" }}>
                      -12%
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  marginTop={2}
                  fontWeight={700} component="span"
                  sx={{ color: "#8B94B2", textDecoration: "line-through" }}>
                  $50.00
                </Typography>

                <Box sx={styles.flash_sale}>
                  <BoltIcon />
                  <Typography>Flash sale Ends in 01 h 08 m 59 s</Typography>
                </Box>
                <NavLink to="/coupons" style={{ textDecoration: "none" }}>
                  <Button variant="contained" sx={{
                    backgroundColor: "#173ED4",
                    color: "#FFF"
                  }}>
                    Explore coupons
                  </Button>
                </NavLink>
              </Box>
            </Box>
          </Box>

          {/* Bottom box */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width={400}
            >
              <CheckBoxIcon fontSize="large" sx={{ color: "#163ED4" }} />
              <Typography fontSize={24} marginLeft={4} width={250} component="span" sx={{ color: "#323232" }}>Over 40 customizable screens</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width={400}
            >
              <CheckBoxIcon fontSize="large" sx={{ color: "#163ED4" }} />
              <Typography fontSize={24} marginLeft={4} width={250} component="span" sx={{ color: "#323232" }}>Complete promotion flows</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width={400}
            >
              <CheckBoxIcon fontSize="large" sx={{ color: "#163ED4" }} />
              <Typography fontSize={24} marginLeft={4} width={250} component="span" sx={{ color: "#323232" }}>Extensive components library</Typography>
            </Box>

          </Box>
        </Box>
      </Box>
    </>
  )
}
