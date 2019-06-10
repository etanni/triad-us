import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { SecondaryTitle, Paragraph } from 'page-kit';

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
export const Title = styled(SecondaryTitle)`
  max-width: initial;
  margin-left: 12px;
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
export const ProductTitle = styled(Paragraph)`
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
