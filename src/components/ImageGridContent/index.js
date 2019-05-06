import React from 'react';

import {
  Wrapper,
  Title,
  SubTitle,
  Description,
  AbsoluteButton,
} from './styles';

const ImageGridContent = ({
  color = 'white',
  button,
  title,
  subTitle,
  description,
}) => {
  return (
    <Wrapper style={{ color }}>
      {title ? <Title>{title}</Title> : null}
      {subTitle ? <SubTitle>{subTitle}</SubTitle> : null}
      {description ? <Description>{description}</Description> : null}
      {button ? <AbsoluteButton>{button}</AbsoluteButton> : null}
    </Wrapper>
  );
};

export default ImageGridContent;
