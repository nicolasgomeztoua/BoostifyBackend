import React from "react";
import { Insta, Face } from "./FooterElements";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinksTitles,
  FooterLink,
  FooterLinkSocial,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
} from "./FooterElements";
import ssl from "../Pages/Images/ssls.png";
import payment from "../Pages/Images/payment-methods.png";
const Footer = ({ footerColor }) => {
  console.log(footerColor);
  return (
    <>
      <FooterContainer footercolor={footerColor}>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinksTitles>Services</FooterLinksTitles>
                <FooterLink to="/kills-boosting">Kills Boost</FooterLink>
                <FooterLink to="/rank-boosting">Rank Boost</FooterLink>
                <FooterLink to="/acheivement-badges">
                  Acheivment Badges
                </FooterLink>
                <FooterLink to="/wins-boosting">Wins Boost</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinksTitles>Explore</FooterLinksTitles>
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/register">Sign Up</FooterLink>
                <FooterLink to="/login">Log-in</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinksTitles>Contact Us</FooterLinksTitles>
                <FooterLink to="/contact-us">USA</FooterLink>
                <FooterLink to="/contact-us">EU</FooterLink>
                <FooterLink to="/contact-us">Asia</FooterLink>
                <FooterLink to="/contact-us">World-Wide</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinksTitles>Socials</FooterLinksTitles>
                <a
                  href="https://www.instagram.com/boostifyofficial/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FooterLinkSocial style={{ marginLeft: "22px" }}>
                    <Insta />
                  </FooterLinkSocial>
                </a>

                <a
                  href="https://www.facebook.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FooterLinkSocial style={{ marginLeft: "21px" }}>
                    <Face />
                  </FooterLinkSocial>
                </a>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <img src={ssl} alt="ssl secured" style={{ width: "75px" }}></img>
          <p>SSL SECURED</p>
          <img src={payment} alt="ssl secured" style={{ width: "300px" }}></img>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo>
                <i class="fab fa-firstdraft" />
              </SocialLogo>
              <WebsiteRights>
                Boostify © {new Date().getFullYear()}. All rights reserved.
              </WebsiteRights>{" "}
            </SocialMediaWrap>{" "}
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
