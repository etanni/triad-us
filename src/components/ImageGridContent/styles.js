import styled from '@emotion/styled';
import { layout } from 'gatsby-theme-shopify-poulo';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 880px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: ${layout.spacing * 5}px;
  @media (min-width: 768px) {
    padding: ${layout.spacing * 8}px;
  }
`;

export const Title = styled.span`
  display: block;
  margin-bottom: ${layout.spacing * 3}px;
  font-weight: 700;
  font-size: 40px;
  line-height: 1;
`;
export const SubTitle = styled.span`
  display: block;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 48px;
  }
`;
export const Description = styled.span`
  display: block;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const AbsoluteButton = styled.div`
  position: absolute;
  bottom: ${layout.spacing * 6}px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
