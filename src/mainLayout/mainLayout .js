import {Outlet} from "react-router-dom";
import {CssBaseline} from "@mui/material";
import MenuAppBar from "../appHeader/menuAppBar";
import BottomAppBar from "../appHeader/bottomAppBar";
import React from "react";


const MainLayout = () => {

    return(
        <React.Fragment>
            <CssBaseline/>
                <MenuAppBar/>
                <Outlet/>
                <BottomAppBar/>
        </React.Fragment>
    )
}

export default MainLayout;