import {useQuery} from "@tanstack/react-query";
import {getAllFood} from "./api/foodApi";
import Root from "./routes/root";
import {Box, CssBaseline} from "@mui/material";
import React, {useEffect, useState} from "react";
import useWindowSize from "./useWindowSize";
import Typography from "@mui/material/Typography";

function App() {
    const {isTabletOrMobile} =useWindowSize();
    const [isMobile,setIsMobile]=useState(false);
    useEffect(()=>{
        setIsMobile(isTabletOrMobile);
    },[isTabletOrMobile])

    const {data, isLoading, isError} = useQuery({
        queryKey: ['getRandomFoodFromApi'],
        queryFn: getAllFood
    })

    console.log(data, 'random food')

    if (isMobile){
        return (
            <>
                <CssBaseline/>
                <Root/>
            </>

        );
    }
    else {
        return (
          <Box display={"flex"} justifyContent={"center"} height={"90vh"} alignItems={"center"}>
              <Typography variant="h6" textAlign={"center"} component="div" sx={{ flexGrow: 1 , fontWeight:"bold" ,color:"#333333" }}>
                  no access with pc or laptop
              </Typography>
          </Box>

        )
    }

}

export default App;
