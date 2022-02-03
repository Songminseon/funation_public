import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DonguLogo from "../..//img/logo/goDonguProduct.svg";
import VectorRight from "../../img/icon/vectorRight.svg";
import "../../../modal.css";
import Modal from "react-modal";
import axios from "axios";


const GoDongu = styled.button`
    all:unset;
    cursor:pointer;
    width:calc(100% - 32px);
    height:52px;
    margin-left:16px;
    display:flex;
    align-items:center;
`;

const DonguImgWrapper = styled.div`
    width:28px;
    height:28px;

    img{
        width:100%;
        height:100%;
    }
`;

const DonguTitleWrapper = styled.div`
    width:calc(100% - 44px);
    margin-left:10px;
    height:14px;
    display:flex;
    align-items:center;

    h2{
        color:#333333;
        font-size: 0.9375rem;
        line-height: 1rem;
        letter-spacing: -0.015rem;
    }
`;

const VectorWrapper = styled.div`
    width:6px;
    height:12px;
    display:flex;
    align-items:center;
    
    img{
        width:100%;
        height:100%;
    }
`;


const ModalPackage = styled.div`
    width:calc(100% - 32px);
    margin-left:16px;
    border-radius:5px;
    overflow:hidden;
`;

const ItemWrapper = styled.div`
    width:100%;
    height:53px;
    background:white;
    display:flex;
    align-items:center;
`;

const ImgWrapper = styled.div`
    width:53px;
    height:53px;

    img{
        width:100%;
        height:100%;
    }
`;

const Product = styled.div`
    width:calc(100% - 53px);
    height:53px;
    display:flex;
    align-items:center;


    h1{
        margin-left:12px;
        color:#232323;
        font-size: 0.8125rem;
        line-height: 1.125rem;
        letter-spacing: -0.015rem
    }
`;

const PackageWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
`;



const customStyles = {
    overlay: {
        backgroundColor: 'rgba(52,45,37,0.64)',
        zIndex:5,
    }
}

const SetItemModal = ({ index, openDonguModal, closeDonguModal, isOpen }) => {

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`/api/searchSetPackage/${index}`);
            setResource(result.data.resource)
        }
        fetchData();

        return () => setResource([])
    }, [index])

    const [resource, setResource] = useState([]);
    



    return (
        <>
            <GoDongu onClick={openDonguModal}>
                <DonguImgWrapper>
                    <img src={DonguLogo} alt="동구밭로고" />
                </DonguImgWrapper>
                <DonguTitleWrapper>
                    <h2>
                        동구밭 제품 보러가기
                        </h2>
                </DonguTitleWrapper>
                <VectorWrapper>
                    <img src={VectorRight} alt="동구밭 보러가기" />
                </VectorWrapper>
            </GoDongu>

            <Modal
                isOpen={isOpen}
                onRequestClose={closeDonguModal}
                style={customStyles}
                contentLabel="package-item"
                className="package"
                ariaHideApp={false}
            >
                <PackageWrapper>
                    <ModalPackage>
                        {resource.map((item, index) => (
                        <a href={item.hyper} style={{all:"unset", cursor:"pointer"}} key={index}>
                            <ItemWrapper>
                                <ImgWrapper key={index}>
                            
                                    <img src={"/myAssets" + item.img_url} alt="product_img" />
                                </ImgWrapper>
                                <Product key={index}>
                                    <h1>
                                        {item.thing_name}
                                    </h1>
                                </Product>
                                <VectorWrapper style={{marginRight:"16px"}}>
                                    <img src={VectorRight} alt="동구밭가기" />
                                </VectorWrapper>
                            </ItemWrapper>
                            </a>
                        ))}
                    </ModalPackage>
                </PackageWrapper>
            </Modal>

        </>
    );
};

export default SetItemModal;