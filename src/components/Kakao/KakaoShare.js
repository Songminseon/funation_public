import React, {useEffect} from "react";
import styled from "styled-components";
import share from "../img/icon/share.svg";


const ShareWrapper = styled.div`
    width:28px;
    height:28px;
  
    #kakao-link-btn{
        all:unset;
        width:100%;
        height:100%;
        background:none;
        cursor:pointer;
        display:flex;
        align-items:center;
        margin-left:3px;
        
        
    }
    #kakao-link-btn img{
        width:22px;
        height:22px;
    }
`;

const KakaoShare = () => {
    useEffect(()=>{
        createKakaoButton()
    },[])

    const createKakaoButton = () => {
        if (window.Kakao) {
          const kakao = window.Kakao
          if (!kakao.isInitialized()) {
            kakao.init(`${process.env.REACT_APP_KAKAO_KEY}`)
          }
          kakao.Link.createDefaultButton({
            container: '#kakao-link-btn',
            objectType: 'feed',
            content: {
              title: '기부니가좋다',
              description: '기부를 쉽고 재미있게 만드는 퍼네이션',
              imageUrl: 'https://oopy.lazyrockets.com/api/notion/image?src=https%253A%252F%252Fs3.us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F8894c154-ba5d-4ac1-bebb-ef35d4cfc440%252F__rgb.png%253FX-Amz-Algorithm%253DAWS4-HMAC-SHA256%2526X-Amz-Credential%253DAKIAT73L2G45O3KS52Y5%25252F20210103%25252Fus-west-2%25252Fs3%25252Faws4_request%2526X-Amz-Date%253D20210103T052329Z%2526X-Amz-Expires%253D86400%2526X-Amz-Signature%253D63de8e501f384ec547658e2e917f8ddd3d672ba2d1cfd27790e9d5d9dd9548a2%2526X-Amz-SignedHeaders%253Dhost%2526response-content-disposition%253Dfilename%252520%25253D%252522__rgb.png%252522&blockId=9c277c94-1126-4661-920e-09482ba60d7f',
              link: {
                mobileWebUrl: window.location.href,
                webUrl: window.location.href,
              },
            },
            buttons: [
              {
                title: '기부하러가기',
                link: {
                  mobileWebUrl: window.location.href,
                  webUrl: window.location.href,
                },
              },
              {
                title : '기부니가좋다',
                link : {
                  webUrl : 'https://www.funation.io',
                }
              }

            ],
          })
        }
      }
    return(
        <>
            <ShareWrapper>
                <button id="kakao-link-btn">
                 <img src={share} alt="공유버튼"/>
                </button>
            </ShareWrapper>
        </>
    );
};

export default KakaoShare;