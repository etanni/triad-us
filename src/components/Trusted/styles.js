import styled from '@emotion/styled';

export const Wrapper = styled.section`
  width: 100%;
  padding: 56px 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TrustedIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  color: black;
  width: calc(100% / 2);
  @media (min-width: 520px) {
    width: calc(100% / 3);
  }
  @media (min-width: 768px) {
    width: calc(100% / 4);
  }
  @media (min-width: 860px) {
    width: calc(100% / 4);
  }
  @media (min-width: 1024px) {
    width: calc(100% / 6);
  }
`;
