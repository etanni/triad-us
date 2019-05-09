import React, { useState } from 'react';
import { graphql } from 'gatsby';
import {
  ProductCardList,
  Section,
  SectionTitle,
  SectionSubTitle,
  SectionDescription,
  ProductPage,
  Hero,
  EqualColumns,
  EqualColumn,
  ImageGridTwoHalfOneFullwidth,
  OneHalfChild,
  FullwidthChild,
  useMedia,
} from 'gatsby-theme-shopify-poulo';

import ImageGridContent from '../components/ImageGridContent';
import ScrollLogo from '../images/scroll-logo.png';
import { Promotion } from '../hero-bgs/Promotion';

const Product = ({ data }) => {
  const [products] = useState(data.allShopifyProduct.edges);
  const desktop = useMedia({ minWidth: 768 });

  return (
    <ProductPage
      data={data}
      scrollingLogo={ScrollLogo}
      buttonAppearance="primary"
      cartCountColor="#C10D28"
    >
      <Section>
        <EqualColumns background="#f2f2f2">
          <EqualColumn>NO SWEAT.</EqualColumn>
          <EqualColumn>NO STAINS.</EqualColumn>
          <EqualColumn>NO SMELL.</EqualColumn>
        </EqualColumns>
      </Section>
      <Section fullWidth>
        <Hero
          background={
            <Promotion fluidImage={data.promotionBG.childImageSharp.fluid} />
          }
          contentPosition="bottom-center"
          height="75vh"
          fullWidth
        >
          <SectionTitle>Always top performance</SectionTitle>
          <SectionDescription noMargin>
            Style Redefined in this new collection
          </SectionDescription>
        </Hero>
      </Section>
      <Section>
        <SectionSubTitle noMargin>
          With breathable Seamless construction, our Swiftly collection
          minimizes chafing, maximizes comfort.
        </SectionSubTitle>
      </Section>
      <Section fullWidth>
        <ImageGridTwoHalfOneFullwidth rowHeight={desktop ? 400 : 300} fullWidth>
          <OneHalfChild background={`#efefef`}>
            <ImageGridContent
              color="black"
              title="The Secret of Triad"
              description="We wanted the most performant workout and life clothes on the market. We achieved this with Technology called Bioco."
            />
          </OneHalfChild>
          <OneHalfChild
            backgroundFluid={data.techImage.childImageSharp.fluid}
            backgroundAlt="Tech Image of Bioco"
            hideOnMobile
          />
          <FullwidthChild
            backgroundFluid={data.fullwidthImage.childImageSharp.fluid}
            backgroundAlt="Man Working Out"
            backgroundImgStyle={{ objectPosition: 'center bottom' }}
          >
            <ImageGridContent subTitle="It allows our fabrics to kill any bacteria cells and therefore eliminate all smell from your clothes no matter how often you wear it. All of this, without using dangerous chemicals, that endanger our environment." />
          </FullwidthChild>
        </ImageGridTwoHalfOneFullwidth>
      </Section>
      <Section>
        <SectionTitle noDescription>Complete your Gear</SectionTitle>
        <ProductCardList
          products={products}
          handles={['100-nike', '101-nike', '102-wpn', '103-wpn']}
        />
      </Section>
    </ProductPage>
  );
};

export const query = graphql`
  query($handle: String!) {
    fullwidthImage: file(relativePath: { eq: "large-bg-1.png" }) {
      childImageSharp {
        fluid(sizes: "100vw") {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    promotionBG: file(relativePath: { eq: "large-bg-2.png" }) {
      childImageSharp {
        fluid(sizes: "75vh") {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    techImage: file(relativePath: { eq: "tech-image.png" }) {
      childImageSharp {
        fluid(sizes: "50vw") {
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
