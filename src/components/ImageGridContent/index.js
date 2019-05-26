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
  children,
  button,
  title,
  subTitle,
  description,
  textAlign,
}) => {
  return (
    <Wrapper style={{ color, textAlign }}>
      {title ? <Title>{title}</Title> : null}
      {subTitle ? <SubTitle>{subTitle}</SubTitle> : null}
      {description ? <Description>{description}</Description> : null}
      {button ? <AbsoluteButton>{button}</AbsoluteButton> : null}
      {children}
    </Wrapper>
  );
};

export default ImageGridContent;
