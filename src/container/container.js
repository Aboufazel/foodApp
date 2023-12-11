import {Box} from "@mui/material";

const Container = ({children}) => {

    return(
        <Box display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{bgcolor:"#FAF6F0" , overflowX:"hidden" ,height:"100vh" , paddingX:"auto"}}>
            <Box
                sx={{bgcolor:"#F2F5FC" ,
                    height:"100%" ,
                    minWidth:"420px" ,
                    maxWidth:"400px"}}>
                {children}
            </Box>
        </Box>
    )
}

export default Container