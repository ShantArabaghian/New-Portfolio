import styled from "styled-components";

export const FooterContainer = styled.div`
overflow-x: hidden;

height: 150px;
@media screen and (max-width: 1000px) {
    height: 130px;
    }
    
    @media screen and (max-width: 768px) {
        height: 210px;
    
    }
`

export const FooterLinkIcons = styled.a`
border-radius: 50px;
background: none;
white-space: nowrap;
padding: 5px+22px;
color: #000;
text-align: center;
font-size: 18px;
outline: none;
border: 1px solid #01bf71 ;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin: 10px;
&:hover{
    background: #01bf71;
    color: #fff;
    border: 1px solid  #01bf71;
}
`
export const FooterWraper2 = styled.div`
margin: 10px;
padding: 10px;
width: 100%;
display: flex;
justify-content: center;

@media screen and (max-width: 1000px) {
    

align-items: center;
display: grid;
justify-content: center;
grid-template-columns: 1fr 1fr 1fr ;
align-items: center;
grid-gap: 16px;
text-align: center;
margin: 5px;
padding-right: 20px;
}

@media screen and (max-width: 768px) {
    margin: 5px;
padding-right: 20px;

align-items: center;
display: grid;
justify-content: center;
grid-template-columns: 1fr 1fr 1fr ;
align-items: center;
grid-gap: 6px;
text-align: center;
}
`
export const FooterWraper = styled.div`
width: 100%;
display: flex;
margin-top: 10px;
padding-left: 10px;
margin-left: 10px;
justify-content: center;

@media screen and (max-width: 1000px) {
    max-width: 150vw;
margin-bottom: 10px;
display: grid;
justify-content: center;
grid-template-columns: 1fr 1fr ;
align-items: center;
grid-gap: 16px;
text-align: center;
margin-top: 0;
padding-left: 0;
margin-left: 0;
}

@media screen and (max-width: 768px) {
    max-width: 150vw;
    margin-top: 10px;
    padding-top: 10px;
margin-left: 0;
margin-bottom: 10px;
display: grid;
justify-content: center;
grid-template-columns: 1fr ;
align-items: center;
grid-gap: 16px;
text-align: center;
}
`
export const FooterLinks =styled.a`
border-radius: 510px;
background: #01bf71;
white-space: nowrap;
margin: 10px;
padding: 10px;
color: #fff;
font-size: 16px;
outline: none;
border: 1px solid #01bf71;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover{
    background: white;
    color: #000;
    border: 1px solid #01bf71;
    filter: drop-shadow(0px 0px 3px #000)
      
      drop-shadow(0px 0px 5px #01bf71)
      drop-shadow(0px 0px 5px #01bf71)
}
@media screen and (max-width: 1000px) {
    margin: 0px;
    padding: 10px+22px;
}

@media screen and (max-width: 768px) {
    margin: 0px;
    padding: 10px+22px;
} 
     `