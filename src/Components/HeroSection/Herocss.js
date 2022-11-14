import styled from 'styled-components'



export const HeroContainer = styled.div`
overflow-x: hidden;
width: 100vw;
background: #FBFBFB;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
background-color: #232a24;
height: 800px;
position: relative;
z-index: 1;
@media screen and (max-width: 768px){
    height: 650px;
}
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`
export const VideoBg= styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a24;

`

