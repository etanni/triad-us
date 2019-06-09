import React from 'react';
import styled from '@emotion/styled';
// import { SecondaryTitle, Paragraph } from 'gatsby-theme-shopify-poulo';
import { Link } from 'gatsby';

export const Wrapper = styled.div`
  width: 100%;
  max-width: calc(100vw - 96px);
  padding: 32px 48px;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    text-decoration: none;
  }
`;
export const CategoryWrapper = styled.div`
  /* margin-right: 16px; */
`;
export const BottomCategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Title = styled.span`
  display: block;
  width: 100%;
  font-size: 20px;
  line-height: 32px;
  font-weight: bold;
  margin-bottom: ${({ marginMultiplier }) =>
    marginMultiplier ? 8 * marginMultiplier : 0}px;
  color: black;
  margin-left: 12px;
  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 48px;
  }
`;

export const ProductWrapper = styled(Link)`
  text-align: center;
  width: 159px;
  margin: 0 12px 16px;
`;
export const ProductImage = styled.img`
  height: 150px;
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
