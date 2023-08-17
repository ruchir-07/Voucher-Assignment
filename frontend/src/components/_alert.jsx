import { Box, Alert, Typography } from "@mui/material";

const AlertBox = (props) => {
  return (
    <>
      {props.success === "1" ?
        (
          <Box display="flex" justifyContent="center">
            <Alert
              severity="success"
              variant="filled"
              width="50%"
            >
              <Typography component="div" display="flex" justifyContent="center">You successfully applied Code:&nbsp;<Typography component="span" fontWeight={700}>{props.code.code}</Typography>&nbsp;to your cart!</Typography></Alert>
          </Box>
        )
        :
        (
          <Box display="flex" justifyContent="center">
            <Alert
              severity="error"
              variant="filled"
              width="50%"
            >
              <Typography component="div" display="flex" justifyContent="center">Code could not be applied!</Typography></Alert>
          </Box>
        )
      }
    </>
  )
}

export default AlertBox