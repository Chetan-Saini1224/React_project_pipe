import React,{useState,useEffect} from 'react'
import {FaBars} from "react-icons/fa" 
import {
     NavbarContainer,
     Nav,
     NavLogo,
     MobileIcon,
     NavMenu,
     NavItem,
     NavLinks,
     NavBtn,
     NavBtnLink
     } from './NavbarElemnts';
import { animateScroll as scroll } from 'react-scroll';


const Navbar = ({toogle}) => {
     
    const [scrollNav,setScrollNav]  = useState(false);
    
    const changeNav = () =>
    {
        if(window.scrollY >= 80)
        {
            setScrollNav(false)
        }
        else{
            setScrollNav(false);
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll',changeNav);
    }, []);
     

     const toogleHome = ( )=>
     {
         scroll.scrollToTop();
     }



    return (
        <>
          <Nav scroll={scrollNav}>
              <NavbarContainer>
                  <NavLogo to="/" scroll={scrollNav} onClick={toogleHome}>HO</NavLogo>
                  
                  <MobileIcon onClick={toogle} scroll={scrollNav}>
                      <FaBars />
                  </MobileIcon>

                  <NavMenu>

                        <NavItem>
                            <NavLinks to="about"
                            smooth={true} duration={500} spy={true} >About</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="product"
                             smooth={true} duration={500} spy={true} >Product</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="contact"
                             smooth={true} duration={500} spy={true} >Contact</NavLinks>
                        </NavItem>
                        
                        <NavItem>
                            <NavLinks to="signup"
                             smooth={true} duration={500} spy={true} >Sign Up</NavLinks>
                        </NavItem>
                        
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to="signin">Sign In</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>          
        </>
    );
}

export default Navbar;