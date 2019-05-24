import React, { useState } from 'react';
import { graphql } from 'gatsby';

import {
  ProductCardList,
  Section,
  Seo,
  SectionTitle,
  SectionSubTitle,
  Hero,
  Button,
  PageLayout,
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
        <Button type="button">Shop All Men</Button>
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
          <SectionTitle noMargin>SHOP ACTIVE</SectionTitle>
          <SectionSubTitle noMargin>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </SectionSubTitle>
        </Hero>
        <ProductCardList
          products={products}
          handles={['100-nike', '101-nike', '102-wpn', '103-wpn']}
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
          <SectionTitle noMargin>SHOP LIFE</SectionTitle>
          <SectionSubTitle noMargin>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </SectionSubTitle>
        </Hero>
        <ProductCardList
          products={products}
          handles={['100-nike', '101-nike', '102-wpn', '103-wpn']}
        />
      </Section>
    </PageLayout>
  );
};

export const query = graphql`
  query {
    promotionBG: file(relativePath: { eq: "large-bg-1.png" }) {
      childImageSharp {
        fluid(sizes: "75vh") {
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
