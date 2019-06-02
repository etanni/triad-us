import styled from '@emotion/styled';
import Img from 'gatsby-image';

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Card = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  background-color: #00000066;
  @media (min-width: 768px) {
    width: calc(100% / 3);
  }
  @media (min-width: 1024px) {
    width: calc(100% / 17 * ${({ large }) => (large ? 7 : 5)});
    ${({ large }) => (large ? 'height: 60vh' : null)};
  }
`;
export const CardImage = styled(Img)`
  mix-blend-mode: multiply;
  filter: grayscale(10%);
  height: 100%;
  width: 100%;
`;
export const CardContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  top: 0;
  padding: 24px;
`;
