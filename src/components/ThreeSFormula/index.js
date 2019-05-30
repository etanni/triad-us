import React from 'react';
import { useStaticQuery, Link } from 'gatsby';
import {
  Section,
  PrimaryTitle,
  useMedia,
  SecondaryTitle,
  Paragraph,
  Button,
} from 'gatsby-theme-shopify-poulo';

import { CardWrapper, Card, CardImage, CardContent } from './styles';

const ThreeSFormula = () => {
  const { sweat, smell, stains } = useStaticQuery(graphql`
    query {
      sweat: file(relativePath: { eq: "sweat.jpeg" }) {
        childImageSharp {
          fluid(sizes: "70vh", quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      smell: file(relativePath: { eq: "smell.jpeg" }) {
        childImageSharp {
          fluid(sizes: "70vh", quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      stains: file(relativePath: { eq: "stains.jpeg" }) {
        childImageSharp {
          fluid(sizes: "70vh", quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  const tablet = useMedia({ minWidth: 768 });
  const desktop = useMedia({ minWidth: 1024 });

  return (
    <Section fullWidth={!desktop}>
      <PrimaryTitle as="h2" marginMultiplier={desktop ? 10 : 6}>
        OUR 3S FORMULA
      </PrimaryTitle>
      <CardWrapper>
        <Card>
          <CardImage
            fluid={sweat.childImageSharp.fluid}
            alt="No Sweat."
            imgStyle={{ objectFit: 'cover', objectPosition: 'center center' }}
          />
          <CardContent>
            <SecondaryTitle as="h3" color="white" marginMultiplier={1}>
              NO SWEAT.
            </SecondaryTitle>
            <Paragraph as="p" color="white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Paragraph>
          </CardContent>
        </Card>
        <Card large>
          <CardImage
            fluid={stains.childImageSharp.fluid}
            alt="No Smell."
            imgStyle={{ objectFit: 'cover', objectPosition: 'center center' }}
          />
          <CardContent>
            <SecondaryTitle as="h3" color="white" marginMultiplier={1}>
              NO SMELL.
            </SecondaryTitle>
            <Paragraph as="p" color="white" marginMultiplier={tablet ? 3 : 0}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Paragraph>
            {tablet ? (
              <Button as={Link} to="/our-tech">
                Read more
              </Button>
            ) : null}
          </CardContent>
        </Card>
        <Card>
          <CardImage
            fluid={smell.childImageSharp.fluid}
            alt="No Stains."
            imgStyle={{ objectFit: 'cover', objectPosition: 'center center' }}
          />
          <CardContent>
            <SecondaryTitle as="h3" color="white" marginMultiplier={1}>
              NO STAINS.
            </SecondaryTitle>
            <Paragraph as="p" color="white" marginMultiplier={tablet ? 0 : 3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Paragraph>
            {!tablet ? (
              <Button as={Link} to="/our-tech">
                Read more
              </Button>
            ) : null}
          </CardContent>
        </Card>
      </CardWrapper>
    </Section>
  );
};

export default ThreeSFormula;
