import React, {useEffect, useState} from "react";
import styled from "styled-components";
import zzim from "../img/icon/heart.svg";
import emptyZzim from "../img/icon/emptyHeart.svg";
import axios from "axios";

const ZzimButton = styled.div`
    width:28px;
    height:28px;
    display:flex;
    align-items:center;
    margin-left:8px;

    form{
        all:unset;
        width:100%;
        height:100%;
    }

    button{
        all:unset;
        width:100%;
        height:100%;
        cursor:pointer;
    }

    img{
        width:100%;
        height:100%;
 
    }
`

const IsZzim = ({value, guest}) => {

    const [yesZzim, setYesZzim] = useState(false);
    const [userCheck, setUserCheck] = useState(false);


    useEffect(()=>{
        const fetchData = async() => {
            setUserCheck(true)
            const result = await axios(`/api/checkZzim/${value}`)
            setYesZzim(result.data.isZzim || '')
        }
        fetchData()
    }, [userCheck])

    const onClickZzimFalse = () => {
        setUserCheck(false||'')
        alert("찜해요~♥")
    }

    const onClickZzimTrue = () => {
        setUserCheck(false||'')
        alert("찜취소..")
    }

    return(
        <ZzimButton>
            <form action="/function/zzim" method="POST">
                <input type="hidden" name="index" value={value}/>
                {guest ?
                    <button onClick={()=>alert("로그인 후 이용해주세요")}>
                        <img src={emptyZzim} alt="찜" />
                    </button>

                    :
                    <>
                    {!yesZzim ?
                        <button type="submit" onClick={onClickZzimFalse}>        
                            <img src={emptyZzim} alt="찜"/>
                        </button>
                            :
                        <button type="submit" onClick={onClickZzimTrue}>
                            <img src={zzim} alt="찜"/>
                        </button>
                        }
                    </>
                }

                
            </form>
        </ZzimButton>
    );
};

export default IsZzim;