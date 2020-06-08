import React from 'react';
import LogoWhite from './LogoWhite';
import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'LogoWhite',
  component: LogoWhite,
  decorators: [withKnobs],
};

export const logoWhite = () => {
  const name = text('name', 'LogoWhite');

  return <LogoWhite name={name} />;
};
