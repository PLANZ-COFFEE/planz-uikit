// external modules
import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

// internal modules
import LogoWhite from './LogoWhite';

export default {
  title: 'LogoWhite',
  component: LogoWhite,
  decorators: [withKnobs],
};

export const logoWhite = () => {
  const name = text('name', 'LogoWhite');

  return <LogoWhite name={name} />;
};
