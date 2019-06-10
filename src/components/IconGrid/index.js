import React from 'react';
import styled from '@emotion/styled';
import { IoIosSnow, IoIosRose, IoIosSpeedometer } from 'react-icons/io';
import { Paragraph } from 'page-kit';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 2);
  padding: 32px 16px;
  @media (min-width: 768px) {
    width: calc(100% / 3);
    padding: 40px 16px;
  }
`;

const IconGrid = () => {
  return (
    <Wrapper>
      <Icon>
        <IoIosSpeedometer size={90} />
        <Paragraph>High quality stretch Fabric</Paragraph>
      </Icon>
      <Icon>
        <IoIosSnow size={90} />
        <Paragraph>High quality stretch Fabric</Paragraph>
      </Icon>
      <Icon>
        <IoIosRose size={90} />
        <Paragraph>High quality stretch Fabric</Paragraph>
      </Icon>
      <Icon>
        <IoIosSpeedometer size={90} />
        <Paragraph>High quality stretch Fabric</Paragraph>
      </Icon>
      <Icon>
        <IoIosSnow size={90} />
        <Paragraph>High quality stretch Fabric</Paragraph>
      </Icon>
      <Icon>
        <IoIosRose size={90} />
        <Paragraph>High quality stretch Fabric</Paragraph>
      </Icon>
    </Wrapper>
  );
};

export default IconGrid;
