import React, { useState } from 'react';
import { graphql } from 'gatsby';

import {
  ProductCardList,
  Section,
  Seo,
  Hero,
  PageLayout,
  PrimaryTitle,
  SubTitle,
} from 'gatsby-theme-shopify-poulo';

import { Trusted } from '../components/Trusted';
import WhiteLogo from '../images/white-logo-circle.png';
import ScrollLogo from '../images/scroll-logo.png';
import { Promotion } from '../hero-bgs/Promotion';

export default ({ data: { promotionBG, allShopifyProduct } }) => {
  const [products] = useState(allShopifyProduct.edges);

  return (
    <PageLayout
      transparentHeader={true}
      transparentLogo={WhiteLogo}
      scrollingLogo={ScrollLogo}
      cartCountColor="#C10D28"
    >
      <Seo title="Home" />
      <Hero
        fullWidth
        background={
          <Promotion fluidImage={promotionBG.childImageSharp.fluid} />
        }
        contentPosition="bottom-center"
      >
        <PrimaryTitle as="h1" style={{ maxWidth: 500 }}>
          WORK, TRAIN AND LIVE CONFIDENT.
        </PrimaryTitle>
      </Hero>
      <Trusted />
      <Section>
        <Hero
          fullWidth
          background={
            <Promotion fluidImage={promotionBG.childImageSharp.fluid} />
          }
          contentPosition="center-center"
          height="200px"
          hasMargin
        >
          <PrimaryTitle as="h2">SHOP ACTIVE</PrimaryTitle>
          <SubTitle as="h3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </SubTitle>
        </Hero>
        <ProductCardList
          products={products}
          handles={['thrive-tshirt', '101-nike', '102-wpn', '103-wpn']}
        />
      </Section>
      <Section>
        <Hero
          fullWidth
          background={
            <Promotion fluidImage={promotionBG.childImageSharp.fluid} />
          }
          contentPosition="center-center"
          height="200px"
          hasMargin
        >
          <PrimaryTitle as="h2">SHOP LIVE</PrimaryTitle>
          <SubTitle as="h3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </SubTitle>
        </Hero>
        <ProductCardList
          products={products}
          handles={['thrive-tshirt', '101-nike', '102-wpn', '103-wpn']}
        />
      </Section>
    </PageLayout>
  );
};

export const query = graphql`
  query {
    promotionBG: file(relativePath: { eq: "large-bg-1.png" }) {
      childImageSharp {
        fluid(sizes: "75vh", quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
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
                fixed(width: 500, quality: 100) {
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
