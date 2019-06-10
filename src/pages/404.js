import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { SectionDescription, ProductCardList } from 'page-kit';
import { ErrorPage } from 'gatsby-theme-shopify-poulo';
import { ColoredSection } from '../styles';

export default ({ data: { allShopifyProduct } }) => {
  const [products] = useState(allShopifyProduct.edges);

  return (
    <ErrorPage
      seoTitle="Did you get lost?"
      seoDescription="This page does not exist."
      title="Did you get lost?"
    >
      <ColoredSection>
        <SectionDescription>
          Or maybe these products might interest you:
        </SectionDescription>
        <ProductCardList
          products={products}
          handles={[
            'rise-crew',
            'posie-crew',
            'hanra-shirt',
            'henning-ss-crew',
          ]}
        />
      </ColoredSection>
    </ErrorPage>
  );
};

export const query = graphql`
  query {
    allShopifyProduct {
      edges {
        node {
          id
          shopifyId
          handle
          title
          description
          tags
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images {
            localFile {
              childImageSharp {
                fixed(width: 500) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
