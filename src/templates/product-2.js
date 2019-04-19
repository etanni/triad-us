import React, { useState } from 'react';
import { graphql } from 'gatsby';

import {
  ProductCardList,
  Section,
  ProductPage,
  SectionTitle,
  Hero,
  ImageGridTwoLargeFourSmall,
  LargeChild,
  SmallChild,
  Button,
} from 'gatsby-theme-shopify-poulo';
import LargeBG1 from '../images/large-bg-1.png';
import LargeBG2 from '../images/large-bg-2.png';
import SmallBG1 from '../images/small-bg-1.png';
import SmallBG2 from '../images/small-bg-2.png';
import SmallBG3 from '../images/small-bg-3.png';
import SmallBG4 from '../images/small-bg-4.png';
import { Promotion } from '../hero-bgs/Promotion';

const Product = ({ data }) => {
  const [products] = useState(data.allShopifyProduct.edges);

  return (
    <ProductPage data={data}>
      <Section>
        <ProductCardList
          products={products}
          handles={[
            'rise-crew',
            'posie-crew',
            'hanra-shirt',
            'henning-ss-crew',
          ]}
        />
      </Section>
      <Section>
        <SectionTitle noDescription>
          With breathable Seamless construction, our Swiftly collection
          minimizes chafing, maximizes comfort.
        </SectionTitle>
        <ImageGridTwoLargeFourSmall>
          <LargeChild
            background={`url(${LargeBG1}) center bottom/cover no-repeat`}
          />
          <LargeChild
            background={`url(${LargeBG2}) center bottom/cover no-repeat`}
          />
          <SmallChild
            background={`url(${SmallBG1}) center bottom/cover no-repeat`}
          />
          <SmallChild
            background={`url(${SmallBG2}) center bottom/cover no-repeat`}
          />
          <SmallChild
            background={`url(${SmallBG3}) center bottom/cover no-repeat`}
          />
          <SmallChild
            background={`url(${SmallBG4}) center bottom/cover no-repeat`}
          />
        </ImageGridTwoLargeFourSmall>
      </Section>
      <Section>
        <Hero
          background={<Promotion />}
          contentPosition="bottom-center"
          height="440px"
        >
          <Button type="button">Read Our Story</Button>
        </Hero>
      </Section>
    </ProductPage>
  );
};

export const query = graphql`
  query($handle: String!) {
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
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
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
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        compareAtPrice
        selectedOptions {
          name
          value
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default Product;
