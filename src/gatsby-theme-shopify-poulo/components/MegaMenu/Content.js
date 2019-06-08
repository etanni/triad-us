import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import get from 'lodash/get';
import find from 'lodash/find';

import {
  Wrapper,
  CategoryWrapper,
  BottomCategoryWrapper,
  Title,
  Category,
  MegaMenuProduct,
} from '../../../styles/MegaMenuStyles';

const Content = ({ activeDisplayName }) => {
  const {
    allShopifyProduct: { edges: products },
  } = useStaticQuery(graphql`
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
                  fixed(width: 200) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const tops = [
    'thrive-tshirt',
    'thrive-t-shirt-green',
    'conquer-tank-black',
    'conquer-full-zip-hoodie-black',
    '101-nike',
    '103-wpn',
  ];
  const bottoms = ['thrive-tshirt', 'thrive-t-shirt-green'];

  return (
    <Wrapper>
      <Title marginMultiplier={2}>TOPS</Title>
      <Category>
        {tops.map(handle => {
          const product = find(products, ({ node }) => handle === node.handle);
          if (!product) return null;

          const {
            node,
            node: { title, images },
          } = product;
          return (
            <MegaMenuProduct
              key={node.handle}
              handle={node.handle}
              title={title}
              image={get(images, '0.localFile.childImageSharp.fixed.src')}
            />
          );
        })}
      </Category>
      <BottomCategoryWrapper>
        <CategoryWrapper>
          <Title marginMultiplier={2}>BOTTOMS</Title>
          <Category>
            {bottoms.map(handle => {
              const product = find(
                products,
                ({ node }) => handle === node.handle
              );
              if (!product) return null;

              const {
                node,
                node: { title, images },
              } = product;
              return (
                <MegaMenuProduct
                  key={node.handle}
                  handle={node.handle}
                  title={title}
                  image={get(images, '0.localFile.childImageSharp.fixed.src')}
                />
              );
            })}
          </Category>
        </CategoryWrapper>
        <CategoryWrapper>
          <Title marginMultiplier={2}>ACCESSORIES</Title>
          <Category>
            {bottoms.map(handle => {
              const product = find(
                products,
                ({ node }) => handle === node.handle
              );
              if (!product) return null;

              const {
                node,
                node: { title, images },
              } = product;
              return (
                <MegaMenuProduct
                  key={node.handle}
                  handle={node.handle}
                  title={title}
                  image={get(images, '0.localFile.childImageSharp.fixed.src')}
                />
              );
            })}
          </Category>
        </CategoryWrapper>
      </BottomCategoryWrapper>
    </Wrapper>
  );
};

export default Content;
