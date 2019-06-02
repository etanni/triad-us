import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

// @ts-ignore
// import PromotionBG from '../images/large-bg-1.png';

const PromotionWrapper = styled.div`
  background-color: #00000066;
  height: 100%;
  width: 100%;
`;
const PromotionImage = styled(Img)`
  mix-blend-mode: multiply;
  filter: grayscale(100%);
  height: 100%;
  width: 100%;
  /* object-fit: cover;
  object-position: bottom center; */
`;

export const HeroImage = ({ fluidImage }) => {
  return (
    <PromotionWrapper>
      <PromotionImage
        fluid={fluidImage}
        alt="promotion image"
        imgStyle={{ objectFit: 'cover', objectPosition: 'center center' }}
      />
      {/* <PromotionImage src={PromotionBG} /> */}
    </PromotionWrapper>
  );
};
