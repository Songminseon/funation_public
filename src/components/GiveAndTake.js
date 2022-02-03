import React, { useEffect, useState } from "react";
import Header from "./Navigation/Header";
import styled from "styled-components";
import ItemForm from "./GiveAndTake/ItemForm";
import axios from "axios";
import options from "./GiveAndTake/setting/options";
import DonationIntro from "./GiveAndTake/modal/DonationIntro";
import {useCookies} from "react-cookie";
import moment from "moment";
import vectorDown from "../components/img/icon/vectorDown.svg";
import vectorTop from "../components/img/icon/vectorTopGrey.svg";

const TopBar = styled.div`
    width:100%;
    height:59px;
    display:flex;
    background:white;
    position:relative;
`

const Background = styled.div`
    width:100%;
    height:calc(100vh - 118px);
    background:white;
`;
const TitleWrapper = styled.div`
    width:181px;
    margin-left:16px;
    margin-top:23px;
    height:15px;
    display:flex;
    align-items:center;
    h1{
        color:#101010;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1rem;
        letter-spacing: -0.015rem;
        text-align: left;
    }
`;

const CategoryWrapper = styled.div`
    position:relative;
    width:93px;
    height:30px;
    display:flex;
    align-items:center;
    margin-top:16px;
    cursor: pointer;
    margin-left:calc(100% - 308px);
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
        width:42px;
        height:15px;
        margin-left:10px;
        display:flex;
        align-items:center;
        text-align:center;
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
        margin:0 auto;
    }
`;




const CategoryChoice = styled.div`
    width:93px;
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
        width:42px;
        height:15px;
        margin-left:10px;
        display:flex;
        align-items:center;
        text-align:center;
    }

    h5{
        color:#595959;
        font-size: 0.6875rem;
        font-weight: 500;
        line-height: 0.9375rem;
        letter-spacing: -0.015rem;
        margin:0 auto;
    }
`;

const CategoryChoiceWrapper = styled.div`
    width:93px;
    height:90px;
    display:flex;
    flex-wrap:wrap;
    overflow:hidden;
    border-radius:0px 0px 3px 3px;
    border: 1px solid #E5E5E5;
    position:absolute;
    top:47px;
    left:289px;
    z-index:5;

    @media screen and (max-width:400px){
        left:calc(100vw - 111px);
    }
`;

const GiveAndTake = () => {    
    const [donationData, setDonationData] = useState([]);
    const [category, setCategory] = useState('all');
    const [openCategory, setOpenCategory] = useState(false);
    const [label, setLabel] = useState("전체 보기");

    const onClickCategory = () => {
        !openCategory ?
            setOpenCategory(true):
            setOpenCategory(false)
    }

    const handleCategory = (value) => {
        setCategory(value.value)
        setOpenCategory(false)
        setLabel(value.label)
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`/api/searchPossibleThing/${category}`);
            setDonationData(result.data.product)

        };
        fetchData();

        return () => {
            setDonationData([])
        }
    }, [category])

    const [cookies, setCookie] = useCookies(['showToday']);

    const settingCookies = () => {
        const expires = moment().add(24, 'hours').toDate();
        setCookie('showToday', "never-show", { path: '/', expires});
        
    }

    
    return (
        <>
        {cookies.showToday !=="never-show" &&
            <DonationIntro
                settingCookies={settingCookies}
            />
        }
            <Header />
            <TopBar>
                <TitleWrapper>
                    <h1>
                        기부앤테이크
                    </h1>
                  
                </TitleWrapper>            
                <CategoryWrapper>
                        <button onClick={onClickCategory}>
                            <div>
                                <h5>
                                    {label}
                                </h5>
                            </div>
                            <div style={{width:"24px", height:"24px", marginLeft:"13px"}}>
                                {openCategory ?
                                <img src={vectorTop} alt="드롭업"/>
                                    : 
                                <img src={vectorDown} alt="드랍다운"/>
                                }
                            </div>
                        </button>
                </CategoryWrapper>

                    {openCategory &&
                        
                        <CategoryChoiceWrapper>
                            {options.map((item)=>(
                                    <CategoryChoice>
                                        <button onClick={()=>handleCategory(item)}>
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
           
            </TopBar>

            <Background>
            {donationData.map((item, index) => (
                <ItemForm
                    key={index}
                    id={item.thing_index}
                    item={item}
                />
            ))}
        </Background>
    </>
        
    )
}

export default GiveAndTake;