import React from "react";
import Container from "./container/container";
import {CssBaseline} from "@mui/material";
import MenuAppBar from "./appHeader/menuAppBar";
import FoodSlider from "./slider/slider";
import MainBody from "./mainBody/mainBody";
import BottomAppBar from "./appHeader/bottomAppBar";

function App() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container>
                <MenuAppBar/>
                <FoodSlider/>
                <MainBody/>
                <BottomAppBar/>
            </Container>
        </React.Fragment>
    );
}

export default App;
