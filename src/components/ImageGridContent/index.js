import React from 'react';

import { Wrapper, Title, SubTitle, AbsoluteButton } from './styles';

const ImageGridContent = ({ button, title, subTitle }) => {
  return (
    <Wrapper>
      {title ? <Title>{title}</Title> : null}
      {subTitle ? <SubTitle>{subTitle}</SubTitle> : null}
      {button ? <AbsoluteButton>{button}</AbsoluteButton> : null}
    </Wrapper>
  );
};

export default ImageGridContent;
