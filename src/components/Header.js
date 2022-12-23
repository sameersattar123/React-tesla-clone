import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

  const [BurgerStatus , setburgerStatus] = useState(false)


  return (
    <Wrapper>
      <div className="logo">
        <img src="/Images/logo (1).svg" alt="" />
      </div>
      <div className="midMenu">
        <a href="">Model S</a>
        <a href="">Model 3</a>
        <a href="">Model X</a>
        <a href="">Model Y</a>
      </div>
      <div className="rightMenu">
        <a href="">Shop</a>
        <a href="">Amount</a>
        <a href="">Menu</a>
      </div>
      <CustomMenu onClick={()=> setburgerStatus(true)}/>
      <BurgerNav show = {BurgerStatus}>
      <CloseWrapper>
      <CloseIcon className="close" onClick={()=> setburgerStatus(false)}/>
      </CloseWrapper>
        <li><a href="">Existing Invertory</a></li>
        <li><a href="">Used Invertory</a></li>
        <li><a href="">Trade-in</a></li>
        <li><a href=""></a>Test Drive</li>
        <li><a href=""></a>Insurance</li>
        <li><a href="">Cybertruck</a></li>
        <li><a href="">Roadster</a></li>
        <li><a href="">Semi</a></li>
        <li><a href="">Charging</a></li>
        <li><a href=""></a>Powerwall</li>
        <li><a href=""></a>Commercial Energy</li>
        <li><a href=""></a>Utilities</li>
        <li><a href=""></a>Find us</li>
        <li><a href=""></a>Support</li>
      </BurgerNav>
     </Wrapper>
  )
}

const Wrapper = styled.div`
 min-height : 60px;
 position: fixed;
 display: flex;
 padding: 0px 20px;
 align-items: center;
 justify-content: space-between;
 top:0;
 right:0;
 left:0;


.midMenu{
    display : flex;
    align-items : center;
    justify-content: center;
    flex:1;
    top:0;
    right:0;
    left:0;
    z-index:10;
    @media(max-width:750px){
    display: none;
}
}
.midMenu a{
    font-weight: 699;
    text-decoration: uppercase;
    font-size: 22px;
    flex-wrap : nowrap;
    text-align: center;
    padding: 0 10px;
 }
.rightMenu a{
    font-weight: 699;
    text-decoration: uppercase;
    font-size: 22px;
    flex-wrap : nowrap;
    text-align: center;
    margin-right: 10px;
 }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top:0;
  bottom:0;
  right:0;
  background:white;
  width: 300px;
  z-index:16 ;
  list-style:none;
  padding: 20px;
  text-align: start;

  transform: ${props =>props.show? 'translateX(0)' : 'translateX(100%)'} ;
  transition: transform 0.5s;
  li{
      padding: 20px 0;
      border-bottom: 1px solid rgba(0,0,0,1) ;
  }
  a{
    font-weight: 900;
  }
`

const CloseWrapper = styled.div`

display : flex;
justify-content: flex-end;

.close{
  cursor: pointer;
}
`

export default Header
