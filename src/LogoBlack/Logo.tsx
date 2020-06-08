/**@jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

const Logo = () => {
  return <img css={logoImg} src={require('./images/Logo.png')} alt="logo" />;
};

const logoImg = css`
  max-width: 300px;
`;

export default Logo;
