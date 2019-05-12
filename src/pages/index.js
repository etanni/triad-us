import React, { useState } from 'react';
import { graphql } from 'gatsby';

import {
  ProductCardList,
  Section,
  Seo,
  SectionTitle,
  Hero,
  ImageGridTwoLargeFourSmall,
  LargeChild,
  SmallChild,
  Button,
  PageLayout,
} from 'gatsby-theme-shopify-poulo';

import ImageGridContent from '../components/ImageGridContent';
import WhiteLogo from '../images/white-logo-circle.png';
import ScrollLogo from '../images/scroll-logo.png';
import LargeBG1 from '../images/large-bg-1.png';
import LargeBG2 from '../images/large-bg-2.png';
import SmallBG1 from '../images/small-bg-1.png';
import SmallBG2 from '../images/small-bg-2.png';
import SmallBG3 from '../images/small-bg-3.png';
import SmallBG4 from '../images/small-bg-4.png';
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
      <Section>
        <ProductCardList
          products={products}
          handles={['100-nike', '101-nike', '102-wpn', '103-wpn']}
        />
      </Section>
      <Section fullWidth>
        <SectionTitle noDescription>
          With breathable Seamless construction, our Swiftly collection
          minimizes chafing, maximizes comfort.
        </SectionTitle>
        <ImageGridTwoLargeFourSmall fullWidth>
          <LargeChild
            background={`url(${LargeBG1}) center bottom/cover no-repeat`}
            hoverColor="#aaaaaa22"
            hasHover
          >
            <ImageGridContent
              title="TOPS"
              description="soft & cozy"
              button={<Button>Shop Tops</Button>}
            />
          </LargeChild>
          <LargeChild
            background={`url(${LargeBG2}) center bottom/cover no-repeat`}
            hoverColor="#aaaaaa22"
            hasHover
          >
            <ImageGridContent
              title="BOTTOMS"
              description="light & breezy"
              button={<Button>Shop Bottoms</Button>}
            />
          </LargeChild>
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
        <ProductCardList
          products={products}
          handles={['100-nike', '101-nike', '102-wpn', '103-wpn']}
        />
      </Section>
      <Section>
        <Hero
          background={
            <Promotion fluidImage={promotionBG.childImageSharp.fluid} />
          }
          contentPosition="bottom-center"
          height="440px"
        >
          <Button type="button">Read Our Story</Button>
        </Hero>
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
