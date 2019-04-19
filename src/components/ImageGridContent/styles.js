import styled from '@emotion/styled';
import { layout } from 'gatsby-theme-shopify-poulo';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Title = styled.span`
  display: block;
  margin-bottom: ${layout.spacing * 1.5}px;
  color: #fff;
  font-weight: 700;
  font-size: 40px;
`;
export const SubTitle = styled.span`
  display: block;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;

export const AbsoluteButton = styled.div`
  position: absolute;
  bottom: ${layout.spacing * 6}px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
