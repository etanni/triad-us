import React from 'react';
import styled from '@emotion/styled';
// import { Paragraph, PrimaryTitle } from 'gatsby-theme-shopify-poulo';
import { Link } from 'gatsby';

export const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    text-decoration: none;
  }
`;
export const CategoryWrapper = styled.div`
  /* margin-right: 16px; */
  width: 100%;
`;
export const BottomCategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    width: 50%;
    @media (min-width: 484px) {
      width: calc(100% / 3);
    }
  }
`;
export const Title = styled.span`
  width: 100%;
  display: block;
  font-size: 30px;
  line-height: 48px;
  font-weight: 900;
  text-align: left;
  margin-bottom: ${({ marginMultiplier }) =>
    marginMultiplier ? 8 * marginMultiplier : 0}px;
  color: black;
  margin-left: 12px;
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const ProductWrapper = styled(Link)`
  text-align: center;
  padding: 0 12px 16px;
`;
export const ProductImage = styled.img`
  width: 100%;
  height: 160px;
  margin: 0;
  object-fit: cover;
`;
export const ProductTitle = styled.span`
  display: block;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font-size: 15px;
  line-height: 24px;
  margin-bottom: ${({ marginMultiplier }) =>
    marginMultiplier ? 8 * marginMultiplier : 0}px;
  color: black;
  font-weight: 600;
`;

export const MegaMenuProduct = ({ image, title, handle }) => {
  return (
    <ProductWrapper to={`/product/${handle}`}>
      <ProductImage src={image} alt={title} />
      <ProductTitle>{title}</ProductTitle>
    </ProductWrapper>
  );
};
