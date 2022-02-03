import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from 'react-slick';
import "../../slick.css";
import axios from "axios";

const ImgWrapper = styled.div`
    width:400px;
    height:400px;
    display:center;
    align-items:center;
    @media screen and (max-width:400px){
        width:100vw;
        height:100vw;
    }    

    img{
        width:100%;
        height:100%;
    }
`;


const ImgSlider = ({ index }) => {

    const settings = {
        className: "slider-img",
        useCSS:true,
        dots: false,
        sliderToShow: 1,
        infinite: false,
        arrows: true
    };

    const [slideImg, setSlideImg] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`/api/searchSliderImg/${index}`);
            setSlideImg(result.data.img_resource)
        }
        fetchData();

       return () => setSlideImg([])
    }, [index])

    return (
        <>
            <Slider {...settings} >
                {slideImg.map((item ,index) => (
                    <ImgWrapper key={index}>
                        <img src={"/myAssets" + item.img_url} alt="product" />
                    </ImgWrapper>
                ))}
            </Slider>
        </>
    );
};

export default ImgSlider;