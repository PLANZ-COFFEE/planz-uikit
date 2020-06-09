// external modules
import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

// internal modules
import LogoWhite from './LogoWhite';
import logoImg from '@/img/logo_white.png';

export default {
  title: 'components|LogoWhite',
  component: LogoWhite,
  decorators: [withKnobs],
};

export const logoWhite = () => {
  const logo = text('logo', logoImg);

  return <LogoWhite logo={logo} />;
};
