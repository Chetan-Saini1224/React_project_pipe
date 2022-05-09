import React from 'react'
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter} from 'react-icons/fa' 
import { FooterContainer,
        FooterWrap,
        FooterLinkWrapper,
        FooterLinksContainer,
        FooterLinkItems,
        FooterLinkTitle,
        FooterLink ,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIconLink,SocialIcons } from './FooterElements';
        import { animateScroll as scroll } from 'react-scroll';


const Footer = () => {
    const toogleHome = ( )=>
    {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us  </FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">test</FooterLink>
                                <FooterLink to="/signin">Carrrers</FooterLink>
                                <FooterLink to="/signin">INverster</FooterLink>
                                <FooterLink to="/signin">Term Of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us  </FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">test</FooterLink>
                                <FooterLink to="/signin">Carrrers</FooterLink>
                                <FooterLink to="/signin">INverster</FooterLink>
                                <FooterLink to="/signin">Term Of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us  </FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">test</FooterLink>
                                <FooterLink to="/signin">Carrrers</FooterLink>
                                <FooterLink to="/signin">INverster</FooterLink>
                                <FooterLink to="/signin">Term Of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us  </FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">test</FooterLink>
                                <FooterLink to="/signin">Carrrers</FooterLink>
                                <FooterLink to="/signin">INverster</FooterLink>
                                <FooterLink to="/signin">Term Of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinksContainer>
             <SocialMedia>
                 <SocialMediaWrap>
                     <SocialLogo onClick={toogleHome}>
                         Factory Logo
                     </SocialLogo>
                     <WebsiteRights>
                         Factory {new Date().getFullYear()}
                         All rights reserved.
                     </WebsiteRights>
                     <SocialIcons>
                         <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                          <FaFacebook />
                         </SocialIconLink>
                         <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                          <FaInstagram />
                         </SocialIconLink>
                         <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                          <FaYoutube />
                         </SocialIconLink>
                         <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                          <FaTwitter />
                         </SocialIconLink>
                     </SocialIcons>
                 </SocialMediaWrap>
             </SocialMedia>      

            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
