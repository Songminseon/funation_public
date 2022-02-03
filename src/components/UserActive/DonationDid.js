import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ChoiceDid from "./ChoiceDid";
import Header from "../Navigation/Header";
import axios from "axios";
import DidForm from "./DidForm";
import options from "./options";
import subOptions from "./subOptions";
import vectorDown from "../img/icon/vectorDown.svg";
import vectorTop from "../img/icon/vectorTopGrey.svg";

const BackgroundWrapper = styled.div`
    width:100%;
    height:100vh;
    background:white;
`;

const CategorySelcet = styled.div`
    width:100%;
    height:30px;
    margin-bottom:16px;
    display:flex;
    align-items:center;
    position:relative;
`;


const CategoryWrapper = styled.div`
    position:relative;
    width:138px;
    height:30px;
    display:flex;
    align-items:center;
    cursor: pointer;
    margin-left:16px;
    border: 1px solid #E5E5E5;
    border-radius:3px 3px 0px 0px;
    overflow:hidden;

    button{
        all:unset;
        width:100%;
        height:100%;
        cursor: pointer;
        display:flex;
        align-items:center;
    }

    div{
        width:calc(100% - 12px);
        height:15px;
        margin-left:12px;
        display:flex;
        align-items:center;
        text-align:left;
    }

    img{
        width:12px;
        height:6px;
        margin:0 auto;
    }


    h5{
        color:#595959;
        font-size: 0.6875rem;
        font-weight: 500;
        line-height: 0.9375rem;
        letter-spacing: -0.015rem;
    }
`;

const CategoryChoice = styled.div`
    width:138px;
    height:30px;
    display:flex;
    align-items:center;
    background:white;

    button{
        all:unset;
        width:100%;
        height:100%;
        cursor: pointer;
    }


    div{
        width:calc(100% - 12px);
        height:15px;
        display:flex;
        align-items:center;
        text-align:left;
        margin-left:12px;
    }

    h5{
        color:#595959;
        font-size: 0.6875rem;
        font-weight: 500;
        line-height: 0.9375rem;
        letter-spacing: -0.015rem;
        
    }
`;

const CategoryChoiceWrapper = styled.div`
    width:138px;
    height:90px;
    display:flex;
    flex-wrap:wrap;
    overflow:hidden;
    border-radius:0px 0px 3px 3px;
    border: 1px solid #E5E5E5;
    position:absolute;
    top:30px;
    left:16px;
    z-index:5;    
`;

const DonationDid = () => {

    const [donationDid, setDonationDid] = useState([]);
    const [category, setCategory] = useState('all');
    const [subCategory, setSubCategory] = useState("all");
    const [openCategory, setOpenCategory] = useState(false);
    const [openSubCategory, setOpenSubCategory] = useState(false);

    const [label, setLabel] = useState("전체 서비스");
    const [subLabel, setSubLabel] = useState("모든 목록");

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`/api/searchMyDonationDid/${category}/${subCategory}`)
            setDonationDid(result.data.product)
        };
        fetchData();
    }, [category, subCategory])


    const onClickCategory = () => {
        !openCategory ?
            setOpenCategory(true) :
            setOpenCategory(false)
    }

    const handleCategory = (value) => {
        setCategory(value.value)
        setOpenCategory(false)
        setLabel(value.label)
    }

    const onClickSubCategory = () => {
        !openSubCategory ?
        setOpenSubCategory(true) :
        setOpenSubCategory(false)
    }

    const handleSubCategory = (value) => {
        setSubCategory(value.value)
        setOpenSubCategory(false)
        setSubLabel(value.label)
    }


    return (
        <BackgroundWrapper>
            <Header />
            <ChoiceDid />
            <CategorySelcet>
                <CategoryWrapper>
                    <button onClick={onClickCategory}>
                        <div>
                            <h5>
                                {label}
                            </h5>
                        </div>
                        <div style={{ width: "24px", height: "24px", marginLeft: "15px" }}>
                            {openCategory ?
                                <img src={vectorTop} alt="드롭업" />
                                :
                                <img src={vectorDown} alt="드랍다운" />
                            }
                        </div>
                    </button>

                </CategoryWrapper>

                {openCategory &&

                    <CategoryChoiceWrapper>
                        {options.map((item) => (
                            <CategoryChoice>
                                <button onClick={() => handleCategory(item)}>
                                    <div>
                                        <h5>
                                            {item.label}
                                        </h5>
                                    </div>
                                </button>
                            </CategoryChoice>
                        ))}
                    </CategoryChoiceWrapper>
                }



                <CategoryWrapper style={{marginLeft:"12px"}}>
                    <button onClick={onClickSubCategory}>
                        <div>
                            <h5>
                                {subLabel}
                            </h5>
                        </div>
                        <div style={{ width: "24px", height: "24px", marginLeft: "15px" }}>
                            {openSubCategory ?
                                <img src={vectorTop} alt="드롭업" />
                                :
                                <img src={vectorDown} alt="드랍다운" />
                            }
                        </div>
                    </button>

                </CategoryWrapper>

                {openSubCategory &&

                    <CategoryChoiceWrapper style={{left:"168px"}}>
                        {subOptions.map((item) => (
                            <CategoryChoice>
                                <button onClick={() => handleSubCategory(item)}>
                                    <div>
                                        <h5>
                                            {item.label}
                                        </h5>
                                    </div>
                                </button>
                            </CategoryChoice>
                        ))}
                    </CategoryChoiceWrapper>
                }
            </CategorySelcet>




            {donationDid.map((item, index) => (
                <DidForm
                    key={index}
                    item={item}
                />
            ))}

        </BackgroundWrapper>
    );
};

export default DonationDid;