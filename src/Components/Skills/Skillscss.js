import styled from "styled-components";


export const SkillsContainer = styled.div`
width: 100vw;
overflow-x: hidden;
height: 700px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #FBFBFB;

@media screen and (max-width: 1000px) {
width: 100vw;
height: 1500px;
display: grid;
}
@media screen and (max-width: 480px) {
width: 100vw;
height: 1000px;
display: grid;
}
`
export const SkillsWrapper = styled.div`
max-width: 100vw;

display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
grid-gap: 16px;
padding: 0 20px;

@media screen and (max-width: 1000px) {
grid-template-columns: 1fr 1fr 1fr;
display: grid;
}

@media screen and (max-width: 768px) {
grid-template-columns: 1fr 1fr;

display: grid;
}
`
export const SkillsCard = styled.div`
background: #fff;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
&:hover{
    transform: scale(1.02);
    transition:all 0.2 ease-in-out ;
    cursor: pointer;
    
    box-shadow: 5px 5px 50px #01bf71;
    }
`
export const SkillsIcon = styled.img`
height: 130px;
width: 130px;
margin-bottom: 10px;
@media screen and (max-width: 480px) {
    height: 60px;
width: 60px;
}
`

export const SkillsH1 = styled.h1`
font-size: 2.5rem;
text-align: center;
color: #000;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
font-size: 2rem;
margin-bottom: 0px;
}
@media screen and (max-width: 821px) {
    font-size: 2rem;

}
`
export const SkillsH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`
