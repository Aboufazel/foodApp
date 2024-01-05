import {Box} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import * as React from "react";
import Typography from "@mui/material/Typography";

const BottomAppBar = ()=>{

    return(
        <Box sx={{ flexGrow: 1}}>
            <AppBar
                sx={{
                bgcolor:"white",
                boxShadow:"none" ,
                    height:"45px",
                borderTopRightRadius:"25px" ,
                borderTopLeftRadius:"25px", top:'auto' ,
                bottom:"0px"}} position="fixed">
                {/*<Toolbar*/}
                {/*>*/}
                {/*    <IconButton*/}
                {/*        size="large"*/}
                {/*        edge="start"*/}
                {/*        color="inherit"*/}
                {/*        aria-label="menu"*/}
                {/*    >*/}
                {/*        <Chat fontSize="large" sx={{color:"#2ED12E"}}/>*/}
                {/*    </IconButton>*/}
                {/*</Toolbar>*/}
                <Typography variant="h6" fontSize={'14px'} marginTop={'15px'} textAlign={"center"} component="div" sx={{ flexGrow: 1 , fontWeight:"bold" ,color:"#333333" }}>
                    Yummy App
                </Typography>
            </AppBar>
        </Box>
    )
}

export default BottomAppBar