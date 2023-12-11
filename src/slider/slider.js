import {Box} from "@mui/material";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import sliderImg from "../asset/appBanner.png"
const FoodSlider = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            slides: {
                perView: 1.5,
                spacing: 15,
            },
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 5000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return(
        <Box display={"flex"} boxShadow={"sm"} height={"150px"}
             alignItems={"center"}
             sx={{bgcolor:"white" , paddingX:"15px" ,   borderBottomRightRadius:"25px" , borderBottomLeftRadius:"25px"}}>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide">
                    <img src={sliderImg} style={{width:"261px" , height:"80px"}} alt={"food-app-slider"}/>
                </div>
                <div className="keen-slider__slide">
                    <img src={sliderImg} style={{width:"261px" , height:"80px"}} alt={"food-app-slider"}/>
                </div>
                <div className="keen-slider__slide">
                    <img src={sliderImg} style={{width:"261px" , height:"80px"}} alt={"food-app-slider"}/>
                </div>
                <div className="keen-slider__slide">
                    <img src={sliderImg} style={{width:"261px" , height:"80px"}} alt={"food-app-slider"}/>
                </div>
            </div>
        </Box>
    )
}

export default FoodSlider;