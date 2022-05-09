import styled from 'styled-components'
import {Link as LinkR} from "react-router-dom"
import {Link as LinkS} from "react-scroll"


export const Nav  = styled.nav`
 background: ${ ({scroll}) => (scroll ?  "#FF970D" : "#fff" ) };
 display:flex;
 justify-content: center;
 align-items:center;
 font-size:1rem;
 position:sticky;
 top:0;
 z-index:10;
margin-top: -80px;
transition: 0.3s;

@media screen and (max-width:960px)
{
    transition:0.8s all ease;
}

`
export const NavbarContainer = styled.div`
display: flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
padding:0 24px;
max-width:1100px;
`

export const NavLogo =styled(LinkR)`
 color: ${ ({scroll}) => (scroll ?  "#fff" : "#FF970D" ) };
display:flex;
cursor:pointer;
font-size:1.5rem;
align-items:center;
margin-left:24px;
text-decoration:none;
font-weight:bold;
transition: 0.3s;
`

export const MobileIcon =styled.div`
display:none;
@media screen and (max-width:768px)
{
    display:block;
    position:absolute;
    top: 30%;
    right: 5%;
    font-size:1.8rem;
    cursor:pointer; 
    color: ${ ({scroll}) => (scroll ?  "#fff" : "#FF970D" ) };
    transition: 0.3s;
}
`

export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;
margin-right:-22px;

@media screen and (max-width: 768px)
{
    display:none;
}

`

export const NavLinks=styled(LinkS)`
color:black;
display:flex;
align-items:center;
text-decoration:none;
padding:0 1.5rem;
height:100%;
cursor:pointer;

&:hover
{
    border-bottom:3px solid purple;
}

`

export const NavItem=styled.li`
height:80px;
`

export const NavBtn=styled.nav`
display:flex;
align-items:center;

@media screen and (max-width:768px)
{
    display:none;
}

` 

export const NavBtnLink=styled(LinkR)`
border-radius:50px;
background:#FF970D;
text-align:center;
white-space:nonwrap;
padding:10px 22px;
color:white;
font-size:16px;
outline:none;
border:none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;

&:hover
{
 transition:all 0.2s ease-in-out;
 background:#fff;
 color:#FF970D;
 border:1px solid #FF970D;
}

`

