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
import { HeroImage } from '../hero-bgs/HeroImage';
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
        contentPosition="bottom-center"
      >
        <PrimaryTitle as="h1" style={{ maxWidth: 500 }}>
          LIVE CONFIDENT.
        </PrimaryTitle>
      </Hero>
      <Section>
        <SecondaryTitle as="h2">Go ahead, get dirty.</SecondaryTitle>
        <Paragraph as="p">
          Take the stairs. Skip laundry day. Chug that IPA. Life is meant to be
          enjoyed -- don't let clothes get in your way. Live confident.
        </Paragraph>
      </Section>
      <ThreeSFormula />
      <Trusted />
      <Section>
        <Hero
          fullWidth
          background={
            <HeroImage fluidImage={promotionBG.childImageSharp.fluid} />
          }
          contentPosition="center-center"
          height="200px"
          hasMargin
        >
          <PrimaryTitle as="h2">GET ACTIVE</PrimaryTitle>
          <SubTitle as="h3">
            Expertly engineered with lightweight design, the perfect fit, and
            all-week performance so you can win a 5k -- or just hit 20 push-ups.
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
            <HeroImage fluidImage={promotionBG.childImageSharp.fluid} />
          }
          contentPosition="center-center"
          height="200px"
          hasMargin
        >
          <PrimaryTitle as="h2">GO LIVE</PrimaryTitle>
          <SubTitle as="h3">
            Your everyday, damn-I-look-good style designed for maximum comfort
            and ready-for-anything performance.
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
    promotionBG: file(relativePath: { eq: "police-sample.jpg" }) {
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
