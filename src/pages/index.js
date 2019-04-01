import React, { useState } from 'react';
import { graphql } from 'gatsby';

import {
  SectionDescription,
  ProductCardList,
  Section,
  Seo,
  SectionTitle,
  SectionSubTitle,
  Hero,
  ImageGridTwoLargeFourSmall,
  LargeChild,
  SmallChild,
} from 'gatsby-theme-shopify-poulo';
import LargeBG1 from '../images/large-bg-1.png';
import LargeBG2 from '../images/large-bg-2.png';
import SmallBG1 from '../images/small-bg-1.png';
import SmallBG2 from '../images/small-bg-2.png';
import SmallBG3 from '../images/small-bg-3.png';
import SmallBG4 from '../images/small-bg-4.png';
import { Promotion } from '../hero-bgs/Promotion';
import { ColoredSection } from '../styles';

export default ({ data: { allShopifyProduct } }) => {
  const [products] = useState(allShopifyProduct.edges);

  return (
    <div>
      <Seo title="Welcome" />
      <Hero fullWidth height="50vh" background={<Promotion />}>
        <h1>Homepage</h1>
        <h3>What a shop</h3>
      </Hero>
      <Section fullWidth>
        <SectionTitle>Wazzzup, we have the best content</SectionTitle>
        <SectionDescription>
          Yeah, but your scientists were so preoccupied with whether or not they
          could, they didn't stop to think if they should. I was part of
          something special. This thing comes fully loaded. AM/FM radio,
          reclining bucket seats, and... power windows. God help us, we're in
          the hands of engineers.
        </SectionDescription>
        <ProductCardList
          products={products}
          handles={[
            'hanra-shirt',
            'henning-ss-crew',
            'rise-crew',
            'posie-crew',
          ]}
        />
      </Section>
      <Section fullWidth>
        <SectionTitle noDescription>Any place, any time!</SectionTitle>
        <ImageGridTwoLargeFourSmall gap="1px">
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
      <ColoredSection>
        <SectionTitle>Wazzup, we have the best content</SectionTitle>
        <SectionSubTitle>
          Look stylish all the time, believe us! We tried not to look good, but
          it just doesn't work!
        </SectionSubTitle>
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
    </div>
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
