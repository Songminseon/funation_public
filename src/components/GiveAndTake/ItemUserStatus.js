import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ProductModal from "./modal/ProductModal";
import GoodsModal from "./modal/GoodsModal";
import DonationModal from "./modal/DonationModal";

const DonationWrapper = styled.button`
    all:unset;
    cursor: pointer;
    width:368px;
    margin-left:16px;
    height:42px;
    background: #FFC02B;
    display:flex;
    align-items:center;
    text-align:center;
    border-radius:4px;
    position:fixed;
    bottom:16px;

    h3{
        margin:0 auto;
        color:#101010;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
    }

    @media screen and (max-width:400px){
        width:calc(100vw - 32px);
    }
`;

const UnableWrapper = styled.button`

    all:unset;
    cursor: pointer;
    width:368px;
    margin-left:16px;
    height:42px;
    background: #979797;
    display:flex;
    align-items:center;
    text-align:center;
    border-radius:4px;
    position:fixed;
    bottom:16px;
    
    h3{
        margin:0 auto;
        color:white;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
    }

    @media screen and (max-width:400px){
        width:calc(100vw - 32px);
    }
`;

const ResultCheckWrapper = styled.button`
    all:unset;
    cursor: pointer;
    width:368px;
    margin-left:16px;
    height:42px;
    background: #333333;
    display:flex;
    align-items:center;
    text-align:center;
    border-radius:4px;
    position:fixed;
    bottom:16px;
    
    h3{
        margin:0 auto;
        color:#FFC02B;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.3125rem;
        letter-spacing: -0.015rem;
    }

    @media screen and (max-width:400px){
        width:calc(100vw - 32px);
    }
`;


const ItemUserStatus = ({ openModal, item, maxCoin, guest}) => {

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`/api/amILucky/${item.thing_index}`)
            setStatus(result.data.status)
        }
        fetchData();
    })

    const [status, setStatus] = useState("product");
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);
    const [modalIsOpen3, setModalIsOpen3] = useState(false);

    const openModal1 = () => {
        setModalIsOpen1(true);
    }

    const closeModal1 = () => {
        setModalIsOpen1(false);
    }

    const openModal2 = () => {
        setModalIsOpen2(true);
    }

    const closeModal2 = () => {
        setModalIsOpen2(false);
    }

    const openModal3 = () => {
        setModalIsOpen3(true);
    }

    const closeModal3 = () => {
        setModalIsOpen3(false);
    }

    return (
        <>

          
                <>
                    {item.thing_crowd_money === item.thing_target_money ?



                        <>
                            {!status ?
                                <ResultCheckWrapper>
                                    <h3>
                                     참여하지 않은 기부
                                    </h3>
                                    </ResultCheckWrapper>
                                :
                                <>
                                    {status === "product" ?
                                        <ResultCheckWrapper onClick={openModal1}>
                                            <h3>
                                            결과 확인
                                            </h3>
                                        </ResultCheckWrapper>
                                        :
                                        <>

                                            {status === "goods" ? 
                                                <ResultCheckWrapper onClick={openModal2}>
                                                    <h3>
                                                        결과 확인
                                                    </h3>
                                                </ResultCheckWrapper>
                                                :
                                                <ResultCheckWrapper onClick={openModal3}>
                                                    <h3>
                                                        결과 확인
                                                    </h3>
                                                </ResultCheckWrapper>
                                            }
                                        </>
                                    }
                                </>
                            }
                        </>

                        :
                        <>
                            {maxCoin === 0 ?
                                <UnableWrapper>
                                    <h3>
                                        최대 기브 참여 완료
                                    </h3>
                                </UnableWrapper>

                                :

                                <>
                                {guest ?
                                    <DonationWrapper>
                                        <h3>
                                            로그인 후 이용해주세요
                                        </h3>
                                    </DonationWrapper>

                                :
                                    <DonationWrapper onClick={openModal}>
                                        
                                            <h3>
                                                기부하기
                                            </h3>
                                       
                                    </DonationWrapper>
                                }
                                </>
                            }
                        </>
                    }

                </>
      


            <ProductModal
                modalIsOpen={modalIsOpen1}
                closeModal={closeModal1}
                product={item.thing_name}
                option={status}
            />
            <GoodsModal
                modalIsOpen={modalIsOpen2}
                closeModal={closeModal2}
                product={item.thing_name}
                option={status}
            />
            <DonationModal
                modalIsOpen={modalIsOpen3}
                closeModal={closeModal3}
                product={item.thing_name}
                option={status}
            />
        </>
    );
};

export default ItemUserStatus;