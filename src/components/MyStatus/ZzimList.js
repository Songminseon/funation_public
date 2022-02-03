import React from 'react';
import Header from "../Navigation/Header";
import styled from "styled-components";
import ItemForm from "./ItemForm";
import {Link} from "react-router-dom";

const ChoiceWrapper = styled.div`
    height:9%;
`;

const ItemWrapper = styled.div`
    width:100%;
`;

const ZzimList = () => {
    return(
        <>
            <Header />
            <ChoiceWrapper>
                <Link to="/zzim">곧기부할</Link>
                <Link to="/donationList">이미기부한</Link>
            </ChoiceWrapper>
            <ItemWrapper>
                아니 이거 필요없느 ㄴ페이지네
                <ItemForm />
                <ItemForm />
            </ItemWrapper>
        </>
    );
};

export default ZzimList;