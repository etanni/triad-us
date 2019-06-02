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
      sweat: file(relativePath: { eq: "treadmill-sample.jpg" }) {
        childImageSharp {
          fluid(sizes: "70vh", quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      smell: file(relativePath: { eq: "pool-sample.jpg" }) {
        childImageSharp {
          fluid(sizes: "70vh", quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      stains: file(relativePath: { eq: "beach-sample.jpg" }) {
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
        <SecondaryTitle as="h4" color="black">
          NO SWEAT. NO STINK. NO STAINS.
        </SecondaryTitle>
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
              DON'T SWEAT IT.
            </SecondaryTitle>
            <Paragraph as="p" color="white">
            Our moisture-wicking technology absorbs 
            and evaporates sweat up to 10x faster without leaving a visible sweat stain.
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
              SNIFF TEST APPROVED.
            </SecondaryTitle>
            <Paragraph as="p" color="white" marginMultiplier={tablet ? 3 : 0}>
              Wear your clothes all week before doing 
              laundry. We spent 10 years developing the world's only 
              permanent all-natural anti-odor technology that eliminates manstink 
              for good.
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
              HOT SAUCE FRIENDLY.
            </SecondaryTitle>
            <Paragraph as="p" color="white" marginMultiplier={tablet ? 0 : 3}>
            Eat and drink what you want, when you want. A Big-Gulp Blue Slushie, 
            a California burrito, or a third glass of Merlot. Whatever you put 
            it in your face — our stain-proof tech resists them all, leaving you 
            looking fresh and stylish all day long.
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
