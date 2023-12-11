import {Box} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const BottomAppBar = ()=>{

    return(
        <Box sx={{ flexGrow: 1 , marginTop:"70px" }}>
            <AppBar sx={{bgcolor:"white", boxShadow:"none" , top:'auto' , bottom:"-30px"}} position="sticky">
                <Toolbar>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default BottomAppBar