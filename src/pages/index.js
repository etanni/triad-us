import React, { useState } from 'react';
import { graphql } from 'gatsby';

import {
  ProductCardList,
  Section,
  Seo,
  Hero,
  PageLayout,
  Paragraph,
  PrimaryTitle,
  SubTitle,
  SecondaryTitle,
} from 'gatsby-theme-shopify-poulo';

import { Trusted } from '../components/Trusted';
import WhiteLogo from '../images/white-logo-circle.png';
import ScrollLogo from '../images/scroll-logo.png';
import { Promotion } from '../hero-bgs/Promotion';
import ThreeSFormula from '../components/ThreeSFormula';

export default ({ data: { promotionBG, allShopifyProduct } }) => {
  const [products] = useState(allShopifyProduct.edges);

  return (
    <PageLayout
      transparentHeader={true}
      transparentLogo={WhiteLogo}
      scrollingLogo={ScrollLogo}
      cartCountColor="#C10D28"
    >
      <Seo />
      <Hero
        fullWidth
        background={
          <Promotion fluidImage={promotionBG.childImageSharp.fluid} />
        }
        contentPosition="center-center"
      >
        <PrimaryTitle as="h1" style={{ maxWidth: 500 }}>
          WORK, TRAIN AND LIVE CONFIDENT.
        </PrimaryTitle>
      </Hero>
      <Section>
        <SecondaryTitle>Go ahead, get dirty.</SecondaryTitle>
        <Paragraph as="h1">
        Eat a California burrito. Enjoy that Cabernet. 
        Take a run during your lunch break. 
        Life is meant to be enjoyed. Don't let your clothes hold you back. 
        Live confident.
        </Paragraph>
      </Section>
      <Trusted />
      <ThreeSFormula />
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
            Expertly engineered with lightweight design, tailored fit, and
            all-week performance to push you through every workout.
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
            Your everyday look designed for maximum comfort and
            ready-for-anything performance.
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
