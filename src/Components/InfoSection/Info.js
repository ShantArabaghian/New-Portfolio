import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import { Column2, InfoContainer,Column1,Heading,Img,ImgWrap,InfoRow,InfoWrapper,Subtitle,TextWrapper } from './Infocss'
import { Zoom,Roll } from 'react-reveal';



const Info = ({lightBg,id,imgStart,headline,lightText,darkText,img,description,alt}) => {
  

  return (
    <>
      <InfoContainer  lightBg={lightBg} id={id}>
        <InfoWrapper>
          
        <InfoRow  imgStart={imgStart}>
                <Column1>
                <TextWrapper name="about" >
                <Zoom top><Heading  lightText={lightText}>{headline}</Heading></Zoom>
                    <Zoom left><Subtitle   darkText={darkText}>{description}</Subtitle></Zoom>
                </TextWrapper>
                </Column1>
                <Column2>
                <Roll right>   <ImgWrap><Img src={img} alt={alt}/>
                </ImgWrap></Roll></Column2>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Info
