import React from 'react';
import { PrimaryTitle } from 'gatsby-theme-shopify-poulo';

import { Wrapper, TrustedIcons } from './styles';
import { NFL } from './Icons/nfl';
import { Porsche } from './Icons/porsche';
import { CocaCola } from './Icons/coca';
import { Nascar } from './Icons/nascar';
import { Mercedes } from './Icons/mercedes';
import { MLB } from './Icons/mlb';
import { Target } from './Icons/target';
import { Pepsi } from './Icons/pepsi';
import { HomeDepot } from './Icons/homedepot';
import { Dominos } from './Icons/dominos';
import { Bestbuy } from './Icons/bestbuy';
import { Fila } from './Icons/fila';

export const Trusted = () => {
  return (
    <Wrapper>
      <PrimaryTitle as="h2" marginMultiplier={6}>
        TRUSTED BY
      </PrimaryTitle>
      <TrustedIcons>
        <NFL />
        <Porsche />
        <CocaCola />
        <Nascar />
        <Mercedes />
        <MLB />
        <Target />
        <Pepsi />
        <HomeDepot />
        <Dominos />
        <Bestbuy />
        <Fila />
      </TrustedIcons>
    </Wrapper>
  );
};
