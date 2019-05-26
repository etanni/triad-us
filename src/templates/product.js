import React, { useState } from 'react';
import { graphql } from 'gatsby';
import {
  ProductCardList,
  Section,
  ProductPage,
  Hero,
  EqualColumns,
  EqualColumn,
  ImageGridTwoHalfOneFullwidth,
  ImageGridTwoHalf,
  OneHalfChild,
  FullwidthChild,
  PrimaryTitle,
  SecondaryTitle,
  SubTitle,
  Paragraph,
  useMedia,
  ButtonLink,
} from 'gatsby-theme-shopify-poulo';

import ImageGridContent from '../components/ImageGridContent';
import IconGrid from '../components/IconGrid';
import ScrollLogo from '../images/scroll-logo.png';
import { Promotion } from '../hero-bgs/Promotion';

import { SectionNoBottomPadding, SectionNoTopPadding } from '../styles';

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
          <EqualColumn>
            <SubTitle as="h2" marginMultiplier={1}>
              Lorem ipsum dolor
            </SubTitle>
            <Paragraph as="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Paragraph>
          </EqualColumn>
          <EqualColumn>
            <SubTitle as="h2" marginMultiplier={1}>
              Lorem ipsum dolor
            </SubTitle>
            <Paragraph as="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Paragraph>
          </EqualColumn>
          <EqualColumn>
            <SubTitle as="h2" marginMultiplier={1}>
              Lorem ipsum dolor
            </SubTitle>
            <Paragraph as="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Paragraph>
          </EqualColumn>
        </EqualColumns>
      </Section>
      <Section fullWidth>
        <PrimaryTitle as="h2" marginMultiplier={10}>
          OUR 3S-FORMULA
        </PrimaryTitle>
        <Hero
          background={
            <Promotion fluidImage={data.fullwidthImage.childImageSharp.fluid} />
          }
          contentPosition="center-left"
          height="80vh"
          fullWidth
        >
          <SecondaryTitle as="h2" marginMultiplier={1}>
            NO SWEAT.
          </SecondaryTitle>
          <SubTitle as="p">
            When mess hits your Triad clothes like Coffee, soda, mustard, it
            rolls off like magic leaving you looking fresh and stylish all day
            long. No confidence lost. Your clothes stay as new as the day you
            bought them.
          </SubTitle>
        </Hero>
        <Hero
          background={
            <Promotion fluidImage={data.fullwidthImage.childImageSharp.fluid} />
          }
          contentPosition="center-right"
          height="80vh"
          fullWidth
        >
          <SecondaryTitle as="h2" marginMultiplier={1}>
            NO SMELL.
          </SecondaryTitle>
          <SubTitle as="p">
            When mess hits your Triad clothes like Coffee, soda, mustard, it
            rolls off like magic leaving you looking fresh and stylish all day
            long. No confidence lost. Your clothes stay as new as the day you
            bought them.
          </SubTitle>
        </Hero>
        <Hero
          background={
            <Promotion fluidImage={data.fullwidthImage.childImageSharp.fluid} />
          }
          contentPosition="bottom-center"
          height="60vh"
          fullWidth
        >
          <SecondaryTitle as="h2" marginMultiplier={1}>
            NO STAINS.
          </SecondaryTitle>
          <SubTitle as="p">
            When mess hits your Triad clothes like Coffee, soda, mustard, it
            rolls off like magic leaving you looking fresh and stylish all day
            long. No confidence lost. Your clothes stay as new as the day you
            bought them.
          </SubTitle>
        </Hero>
      </Section>
      <SectionNoBottomPadding>
        <PrimaryTitle as="h2" marginMultiplier={5}>
          BENEFITS OF {data.shopifyProduct.title}
        </PrimaryTitle>
        <IconGrid />
      </SectionNoBottomPadding>
      <SectionNoBottomPadding fullWidth>
        <Hero
          background={
            <Promotion fluidImage={data.promotionBG.childImageSharp.fluid} />
          }
          contentPosition="bottom-center"
          height="75vh"
          fullWidth
        >
          <SecondaryTitle as="h2">Confidence Redefined</SecondaryTitle>
          <SubTitle as="h3">Style Redefined in this new collection</SubTitle>
        </Hero>
        <ImageGridTwoHalfOneFullwidth rowHeight={desktop ? 400 : 300} fullWidth>
          <OneHalfChild background="#e9e9e9">
            <ImageGridContent color="black" textAlign="left">
              <SecondaryTitle as="h2">The Secret of Triad</SecondaryTitle>
              <Paragraph as="p">
                We wanted the most performant workout and life clothes on the
                market. We achieved this with Technology called Bioco.
              </Paragraph>
            </ImageGridContent>
          </OneHalfChild>
          <OneHalfChild
            backgroundFluid={data.techImage.childImageSharp.fluid}
            backgroundAlt="Tech Image of Bioco"
          />
          <FullwidthChild
            backgroundFluid={data.fullwidthImage.childImageSharp.fluid}
            backgroundAlt="Man Working Out"
            backgroundImgStyle={{ objectPosition: 'center bottom' }}
          >
            <ImageGridContent>
              <SubTitle as="p">
                It allows our fabrics to kill any bacteria cells and therefore
                eliminate all smell from your clothes no matter how often you
                wear it. All of this, without using dangerous chemicals, that
                endanger our environment.
              </SubTitle>
            </ImageGridContent>
          </FullwidthChild>
        </ImageGridTwoHalfOneFullwidth>
      </SectionNoBottomPadding>
      <Section>
        <PrimaryTitle as="h2" marginMultiplier={10}>
          Complete your Gear
        </PrimaryTitle>
        <ProductCardList
          products={products}
          handles={['100-nike', '101-nike', '102-wpn', '103-wpn']}
        />
      </Section>
      <SectionNoTopPadding>
        <ButtonLink to="/collections" appearance="hollow">
          Shop new arrivals
        </ButtonLink>
      </SectionNoTopPadding>
      <Section fullWidth>
        <ImageGridTwoHalf>
          <OneHalfChild background={`#e9e9e9`}>
            <ImageGridContent color="black" textAlign="left">
              <Paragraph as="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </Paragraph>
            </ImageGridContent>
          </OneHalfChild>
          <OneHalfChild
            backgroundFluid={data.promotionBG.childImageSharp.fluid}
            backgroundAlt="Tech Image of Bioco"
          >
            <ImageGridContent>
              <PrimaryTitle as="h2" marginMultiplier={2}>
                ABOUT US
              </PrimaryTitle>
              <ButtonLink to="/about-us">Read More</ButtonLink>
            </ImageGridContent>
          </OneHalfChild>
        </ImageGridTwoHalf>
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
