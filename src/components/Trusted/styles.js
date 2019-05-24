import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  padding: 80px 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TrustedTitle = styled.div`
  display: block;
  font-size: 30px;
  line-height: 40px;
  margin-bottom: 16px;
  text-align: center;
  font-weight: bold;
`;

export const TrustedIcons = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Icon = styled.div`
  color: black;
  width: calc(100% / 3);
  @media (min-width: 768px) {
    width: calc(100% / 4);
  }
  @media (min-width: 1024px) {
    width: calc(100% / 6);
  }
`;
