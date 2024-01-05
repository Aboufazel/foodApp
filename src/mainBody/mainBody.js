import {Box, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

const MainBody = () => {

    return(
        <Box paddingY={"20px"} paddingX={"28px"}>
            <Typography color={"#333333"}
                        fontSize={"20px"}
                        fontWeight={"bold"}
                        textAlign={"start"}>
                Daily Food Offer
            </Typography>

            <Grid container marginTop={"5px"} spacing={2}>
                <Grid item sm={6}>
                    <Box sx={{background:"linear-gradient(90deg, #50CE3B 0%, #53D290 155.17%)" , borderRadius:"8px", width:"100%" , height:"170px"}}>
                    </Box>
                </Grid>
                <Grid item sm={6}>
                    <Box sx={{background:"linear-gradient(90deg, #9E6F54 0%, rgba(158, 111, 84, 0.70) 271.48%)" , borderRadius:"8px", width:"100%" , height:"170px"}}>
                    </Box>
                </Grid>
                <Grid item sm={6}>
                    <Box sx={{background:"linear-gradient(90deg, #9E6F54 0%, rgba(158, 111, 84, 0.70) 271.48%)" , borderRadius:"8px", width:"100%" , height:"170px"}}>
                    </Box>
                </Grid>
                <Grid item sm={6}>
                    <Box sx={{background:"linear-gradient(90deg, #50CE3B 0%, #53D290 155.17%)" , borderRadius:"8px", width:"100%" , height:"170px"}}>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MainBody