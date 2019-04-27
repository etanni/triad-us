import React, { useState } from 'react';
import { graphql } from 'gatsby';
import {
  ProductCardList,
  Section,
  ProductPage,
  Hero,
  Button,
  EqualColumns,
  EqualColumn,
  ImageGridTwoHalfOneFullwidth,
  OneHalfChild,
  FullwidthChild,
} from 'gatsby-theme-shopify-poulo';

import ImageGridContent from '../components/ImageGridContent';
import LargeBG1 from '../images/large-bg-1.png';
import SmallBG1 from '../images/small-bg-1.png';
import SmallBG2 from '../images/small-bg-2.png';
import { Promotion } from '../hero-bgs/Promotion';

const Product = ({ data }) => {
  const [products] = useState(data.allShopifyProduct.edges);

  return (
    <ProductPage data={data}>
      <Section>
        <EqualColumns background="#f2f2f2">
          <EqualColumn buttonText="More Infos">
            FREE SHIPPING & FREE RETURNS
            <br />
            45 DAY RETURNS
          </EqualColumn>
          <EqualColumn buttonText="More Infos">
            FREE SHIPPING & FREE RETURNS
            <br />
            45 DAY RETURNS
          </EqualColumn>
          <EqualColumn buttonText="More Infos">
            FREE SHIPPING & FREE RETURNS
            <br />
            45 DAY RETURNS
          </EqualColumn>
        </EqualColumns>
      </Section>
      <Section fullWidth>
        <ImageGridTwoHalfOneFullwidth rowHeight={400} fullWidth>
          <OneHalfChild
            background={`url(${SmallBG1}) center bottom/cover no-repeat`}
          >
            <ImageGridContent
              title="Lorem Ipsum Dolor Sit"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            />
          </OneHalfChild>
          <OneHalfChild
            background={`url(${SmallBG2}) center bottom/cover no-repeat`}
          />
          <FullwidthChild
            background={`url(${LargeBG1}) center bottom/cover no-repeat`}
          >
            <ImageGridContent subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
          </FullwidthChild>
        </ImageGridTwoHalfOneFullwidth>
      </Section>
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
