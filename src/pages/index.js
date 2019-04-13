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
import LargeBG1 from '../images/large-bg-1.png';
import LargeBG2 from '../images/large-bg-2.png';
import SmallBG1 from '../images/small-bg-1.png';
import SmallBG2 from '../images/small-bg-2.png';
import SmallBG3 from '../images/small-bg-3.png';
import SmallBG4 from '../images/small-bg-4.png';
import { Promotion } from '../hero-bgs/Promotion';

export default ({ data: { allShopifyProduct } }) => {
  const [products] = useState(allShopifyProduct.edges);

  return (
    <PageLayout transparentHeader={true}>
      <Seo title="Welcome" />
      <Hero
        fullWidth
        background={<Promotion />}
        contentPosition="bottom-center"
      >
        <Button type="button">Shop All Men</Button>
      </Hero>
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
            hoverColor="#ff000055"
            hasHover
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
    </PageLayout>
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
