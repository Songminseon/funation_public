import React, {useEffect ,useState} from "react";
import styled from "styled-components";
import Header from "../Navigation/Header";
import ChoiceZzim from "./ChoiceZzim";
import axios from "axios";
import ZzimForm from "./ZzimForm";

const BackgroundWrapper = styled.div`
    width:100%;
    height:100vh;
    background:white; 
`

const ZzimWrapper = styled.div`
    width:calc(100% - 32px);
    height:auto;
    margin-left:16px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between; 
`;

const Zzim = () => {

    useEffect(()=>{
        const fetchData = async() => {
            const result = await axios("/api/searchZzimThing")
            setZzimData(result.data.product)
        };
        fetchData();
    },[])


   
    const [zzimData, setZzimData] = useState([]);

    return(
        <>
        <BackgroundWrapper>
            <Header />
            <ChoiceZzim />
            
                <ZzimWrapper>
                    {zzimData.map((item, index)=>(
                        <ZzimForm
                            key={index}
                            item={item}
                        />
                    ))}
                </ZzimWrapper>
            </BackgroundWrapper>
        </>
    );
};

export default Zzim