import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import { Column2, InfoContainer,Column1,Heading,Img,ImgWrap,InfoRow,InfoWrapper,Subtitle,TextWrapper } from './Infocss'



const Info = ({lightBg,id,imgStart,headline,lightText,darkText,img,description,alt}) => {
  
useEffect(() => {
  AOS.init({duration: 1000});
}, []);
  return (
    <>
      <InfoContainer  lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow data-aos="fade-left" imgStart={imgStart}>
                <Column1>
                <TextWrapper >
                    <Heading data-aos="fade-left" lightText={lightText}>{headline}</Heading>
                    <Subtitle data-aos="fade-right"  darkText={darkText}>{description}</Subtitle>
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap><Img src={img} alt={alt}/>
                </ImgWrap></Column2>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Info
