import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const Wrapper = styled.footer`
  display: block;
`;

export const TopFooter = styled.div`
  display: block;
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
`;

export const SocialIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #000;
  border-radius: 50%;
  margin: 0 12px;
  width: 30px;
  height: 30px;
`;

export const BottomFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #000000;
  padding: 8px;
  @supports (-webkit-overflow-scrolling: touch) {
    padding-bottom: 136px;
  }
`;

export const FooterLink = styled(Link)`
  font-size: 15px;
  letter-spacing: 0.5px;
  line-height: 16px;
  padding: 8px 12px;
  color: white;
  text-decoration: none;
  appearance: none;
`;
