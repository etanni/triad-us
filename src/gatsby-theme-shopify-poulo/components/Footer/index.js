import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

import {
  Wrapper,
  TopFooter,
  BottomFooter,
  FooterLink,
  SocialIcons,
  SocialIcon,
} from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <TopFooter>
        <SocialIcons>
          <SocialIcon
            href="https://facebook.com/weartriad"
            target="_blank"
            rel="noopener,noreferrer"
            title="Follow us on Facebook"
          >
            <FaFacebookF size={16} />
          </SocialIcon>
          <SocialIcon
            href="https://instagram.com/weartriad"
            target="_blank"
            rel="noopener,noreferrer"
            title="Follow us on Instagram"
          >
            <FaInstagram size={20} />
          </SocialIcon>
          <SocialIcon
            href="https://twitter.com/weartriad"
            target="_blank"
            rel="noopener,noreferrer"
            title="Follow us on Twitter"
          >
            <FaTwitter size={16} />
          </SocialIcon>
        </SocialIcons>
      </TopFooter>
      <BottomFooter>
        <FooterLink to="/faq">FAQ</FooterLink>
        <FooterLink to="/about">ABOUT</FooterLink>
        <FooterLink to="/blog">BLOG</FooterLink>
        <FooterLink to="/terms-and-privacy">TERMS & PRIVACY</FooterLink>
      </BottomFooter>
    </Wrapper>
  );
};

export default Footer;
