import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Slider from 'react-slick';
import "../../../slick.css";



const ImgWrapper = styled.div`
    width:100%;
    height:34.714vh;

    img{
        width:100%;
        height:34.714vh;
    }
`

const ImgSlider = ({index}) => {

    useEffect(()=>{
        fetch(`/api/searchSliderImg/${index}`)
            .then((res)=>res.json())
            .then((data)=>{
                setSlideImg(data.img_res)})

                return () => setSlideImg([])
            },[index])
        
    const [slideImg, setSlideImg] = useState([]);
    const settings = {
        className: "slider-img",
        dots: false,
        sliderToShow: 1,
        infinite: false,
        arrows: true
    };
    
    

    return(
        <>
            <Slider {...settings} >
                {slideImg.map((item, index)=>(
                    <ImgWrapper key={index}>
                        <img src={process.env.PUBLIC_URL+item.img_url} alt="product" />
                    </ImgWrapper>
                ))}
            </Slider>
        </>
    );
};

export default ImgSlider;