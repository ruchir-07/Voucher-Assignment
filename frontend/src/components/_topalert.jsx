import { Box, Typography } from "@mui/material"

const TopAlert = () => {
  return (
    <>
        <Box
        width="100%"
        height="5vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="#FFBC0F"
        >
            <Typography fontSize="0.9rem" component="span" marginRight={2} fontWeight={700}>Hurry up to get 30% off everything</Typography>
            <Typography fontSize="0.9rem" component="span" marginLeft={2}>ONLY 01 h 08 m 59 s LEFT</Typography>
        </Box>
    </>
  )
}

export default TopAlert;