import styled from '@emotion/styled';
import { SectionTitle } from 'gatsby-theme-shopify-poulo';

export const Wrapper = styled.section`
  width: 100%;
  padding: 56px 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled(SectionTitle)`
  margin-bottom: 48px;
`;

export const TrustedIcons = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Icon = styled.div`
  color: black;
  width: calc(100% / 2);
  padding: 8px 48px;
  @media (min-width: 520px) {
    width: calc(100% / 3);
    padding: 8px 56px;
  }
  @media (min-width: 768px) {
    width: calc(100% / 4);
    padding: 8px 64px;
  }
  @media (min-width: 860px) {
    width: calc(100% / 4);
    padding: 8px 80px;
  }
  @media (min-width: 1024px) {
    width: calc(100% / 6);
    padding: 8px 64px;
  }
`;
