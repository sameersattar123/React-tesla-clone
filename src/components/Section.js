import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Section = ({title , description , leftbtnButton , RightbtnButton , BackgroundImage}) => {
  return (
      <Wrap bgImage = {BackgroundImage}>
      <Fade bottom>
      <ItemText>
     <h1>{title}</h1>
      <p>{description}</p>
      </ItemText>
      </Fade>
      <Button>
      <Fade bottom>
      <ButtonGroup>
        <LeftButton>
            {leftbtnButton}
        </LeftButton>
        { RightbtnButton && 
        <RightButton>
            {RightbtnButton}
        </RightButton>
        }
      </ButtonGroup>
      <DownArrow src="/Images/down-arrow.svg"/>
      </Fade>
      </Button>
     </Wrap> 
  )
}

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
background-image: url("/Images/model-s.jpg");
display: flex;
flex-direction: column;
justify-content: space-between ;
align-items: center;
background-image: ${props => `url("/Images/${props.bgImage}")`};
`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
`

const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px;
@media(max-width:750px){
    flex-direction: column;
}
`

const LeftButton = styled.div`
background-color: rgba(23 , 26 , 32 , 0.8);
height: 40px;
width: 256px;
display : flex;
justify-content: center;
align-items: center;
color : white;
border-radius: 100px;
opacity: 0.9;
text-transform: uppercase;
font-size: 18px;
cursor: pointer;
margin: 8px;
`

const RightButton= styled(LeftButton)`
background-color: white;
color: black;
opacity: 0.9;
`

const DownArrow = styled.img`
height: 40px;
animation: animationDown infinite 1.5s ;

`

const Button = styled.div`

`
export default Section
