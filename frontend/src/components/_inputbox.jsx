import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Input, Box } from '@mui/material';

const InputBox = ({ text }) => {
    return (
        <>
            <Box display="flex">
                <Input placeholder={ text } sx={{
                    width: "93%",
                    height: 50,
                    border: "1px solid #8B94B2",
                    paddingLeft: 1
                }} />
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontWeight={600}
                    sx={{
                        width: "7%",
                        height: 50,
                        backgroundColor: "#8B94B2",
                        color: "#FFF"

                    }}><ArrowForwardIcon /></Box>
            </Box>
        </>
    )
}

export default InputBox;