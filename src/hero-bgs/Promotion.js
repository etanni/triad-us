import React from 'react';
import styled from '@emotion/styled';

// @ts-ignore
import PromotionBG from '../images/large-bg-1.png';

const PromotionWrapper = styled.div`
  background-color: #1f494000;
  height: 100%;
  width: 100%;
`;
const PromotionImage = styled.img`
  mix-blend-mode: multiply;
  filter: grayscale(100%);
  margin: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Promotion = () => {
  return (
    <PromotionWrapper>
      <PromotionImage src={PromotionBG} alt="promotion image" />
    </PromotionWrapper>
  );
};
