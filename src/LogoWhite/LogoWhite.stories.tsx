// external modules
import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

// internal modules
import LogoWhite from './LogoWhite';
import { LOGO_WIDTH } from 'constants';

export default {
  title: 'components|LogoWhite',
  component: LogoWhite,
  decorators: [withKnobs],
};

export const logoWhite = (): JSX.Element => {
  const width = text('width', LOGO_WIDTH);

  return <LogoWhite width={width} />;
};
