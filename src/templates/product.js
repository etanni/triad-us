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
              FREE US SHIPPING {`&`} FREE 45 DAY RETURNS
            </SubTitle>
            <Paragraph as="p">
              Free shipping on all US orders when you spend more than $75 and
              free returns for up to 45 days.
            </Paragraph>
          </EqualColumn>
          <EqualColumn>
            <SubTitle as="h2" marginMultiplier={1}>
              PROPRIETARY 3S TECHNOLOGY
            </SubTitle>
            <Paragraph as="p">
              Everything we make features our No Sweat, No Stains, No Smell
              technology.
            </Paragraph>
          </EqualColumn>
          <EqualColumn>
            <SubTitle as="h2" marginMultiplier={1}>
              CONFIDENCE GUARANTEE
            </SubTitle>
            <Paragraph as="p">
              If you don't feel confident all day long, let us know and we'll
              make it right.
            </Paragraph>
          </EqualColumn>
        </EqualColumns>
      </Section>
      <Section fullWidth>
        <PrimaryTitle as="h2" marginMultiplier={10}>
          OUR 3S FORMULA
        </PrimaryTitle>
        <Hero
          background={
            <Promotion fluidImage={data.fullwidthImage.childImageSharp.fluid} />
          }
          contentPosition="center-left"
          height={desktop ? '80vh' : '50vh'}
          fullWidth
        >
          <SecondaryTitle as="h2" marginMultiplier={1}>
            NO SWEAT.
          </SecondaryTitle>
          <SubTitle as="p">
            Forget about embarrassing and confidence-killing sweat stains when
            going on a first date or traveling in Europe during summer. Our
            proprietary moisture-wicking technology on the inside absorbs sweat
            and pushes it to the outside to evaporate 10x faster so you feel and
            look dry without leaving a stain. It's the perfect combination for
            looking cool and confident in any situation. We've got your back.
          </SubTitle>
        </Hero>
        <Hero
          background={
            <Promotion fluidImage={data.nature.childImageSharp.fluid} />
          }
          contentPosition="center-right"
          height={desktop ? '80vh' : '60vh'}
          fullWidth
        >
          <SecondaryTitle as="h2" marginMultiplier={1}>
            NO STAINS.
          </SecondaryTitle>
          <SubTitle as="p">
            Never worry again about looking like a slob, even if you act like
            one. Coffee, soda, mustard, bird poop, whatever life (or your clumsy
            self) throws at you. Our stain-proof tech causes them all to roll
            off like magic, leaving you looking fresh and stylish all day long.
            No confidence lost.
          </SubTitle>
        </Hero>
        <Hero
          background={
            <Promotion fluidImage={data.fullwidthImage.childImageSharp.fluid} />
          }
          contentPosition="bottom-center"
          height={desktop ? '60vh' : '60vh'}
          fullWidth
        >
          <SecondaryTitle as="h2" marginMultiplier={1}>
            NO SMELL.
          </SecondaryTitle>
          <SubTitle as="p">
            No, it's not you. <br />
            Go straight from the gym to the grocery store without your clothes
            smelling like the dreaded locker room. You can even wear your new
            favorite shirt over and over and over again without needing to wash
            it every time. Our proprietary EPA-approved coconut-based technology
            eliminates manstink for good. It will never wash out even after over
            100 washes - the best in the industry.
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
          height={desktop ? '75vh' : '60vh'}
          fullWidth
        >
          <SecondaryTitle as="h2">ENGINEERED CONFIDENCE</SecondaryTitle>
          <SubTitle as="h3">
            The Thrive collection gives you the confidence to finally ask "the
            one" on that first date, rock the night sweat free at your local
            music venue, and scarf down your favorite juicy burger with the boys
            without worrying about the barbeque sauce that just dripped onto
            your chest.
          </SubTitle>
        </Hero>
        <ImageGridTwoHalfOneFullwidth rowHeight={desktop ? 600 : 700} fullWidth>
          <OneHalfChild background="#e9e9e9">
            <ImageGridContent color="black" textAlign="left">
              <SecondaryTitle
                as="h2"
                style={{ maxWidth: 600 }}
                marginMultiplier={2}
              >
                ENVIRONMENT-FIRST TECHNOLOGY
              </SecondaryTitle>
              <Paragraph as="p">
                3S tech is the only proven 99.9% effective antimicrobial on the
                market that is derived from natural ingredients (sustainable
                coconuts!). It never washes out and never leaches onto your
                skin. And unlike the environmentally harmful metals such as
                silver, gold, nanosilver (and the other 100 names that refer to
                the same thing), your conscience can be as clean as your
                clothes.
              </Paragraph>
              <Paragraph as="ul">
                <li>Safe</li>
                <li>Not harmful to pets or the environment</li>
                <li>Independant laboratory tested</li>
                <li>EPA approved</li>
                <li>Non-flammable</li>
              </Paragraph>
            </ImageGridContent>
          </OneHalfChild>
          <OneHalfChild
            backgroundFluid={data.techImage.childImageSharp.fluid}
            backgroundAlt="Tech Image of Bioco"
            hideOnMobile
          />
          <FullwidthChild
            backgroundFluid={data.nature.childImageSharp.fluid}
            backgroundAlt="Man Working Out"
            backgroundImgStyle={{ objectPosition: 'center center' }}
          >
            <ImageGridContent>
              <SubTitle as="p">
                A breakthrough in men's clothing. <br />
                Engineered for confidence with a revolutionary proprietary
                technology that changes how men work, live, and train.
                <br />
                <br />
                Made to be free.
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
          handles={['thrive-tshirt', '101-nike', '102-wpn', '103-wpn']}
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
                We started TRIAD by believing that we could change the way men
                think about clothing. Our technology, our styles, and our fit
                were created to make men more confident at work, at the gym, and
                in daily life.
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
        fluid(sizes: "100vw", quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    promotionBG: file(relativePath: { eq: "large-bg-2.png" }) {
      childImageSharp {
        fluid(sizes: "100vw", quality: 100) {
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
    nature: file(relativePath: { eq: "nature.jpeg" }) {
      childImageSharp {
        fluid(sizes: "100vw", quality: 100) {
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
