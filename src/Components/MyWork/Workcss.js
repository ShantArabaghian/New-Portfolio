import styled from "styled-components";
export const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
border-radius:4%;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
transition: all 0.5s ease;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`;
export const ProjectsContainer = styled.div`
overflow-x: hidden;

height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;

@media screen and (max-width: 768px) {
height: 2000px;
}

@media screen and (max-width: 480px) {
height: 2000px;
}
`
export const ProjectsWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px) {
grid-template-columns: 1fr lfr;
}

@media screen and (max-width: 768px) {
grid-template-columns: 1fr;
padding: 0 20px;
}
`
export const ProjectsCard = styled.div`
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
    }
&:hover ${Info}{
      opacity: 1;
      box-shadow: 5px 5px 50px #01bf71;


    }
`
export const Icon = styled.div`
   opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    border-radius:15%;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
    `
export const ProjectsIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`
export const Span = styled.h1`
font-size: 2.5rem;
color: #01bf71;
display: inline;
margin-bottom: 64px;
`
export const ProjectsH1 = styled.h1`

font-size: 2.5rem;
color: #000;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
font-size: 2rem;
}
`
export const ProjectsH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`
export const ProjectsP = styled.p`
font-size: 1rem;
text-align: center;

`
export const InfoH1 = styled.a`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
display: inline;
padding: 5px+20px;
margin: 3px;
color: #010606;
font-size: 21px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover{
transition: all 0.2s ease-in-out;
background: #fff;
color: #010606;
}
`