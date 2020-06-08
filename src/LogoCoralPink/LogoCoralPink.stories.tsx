// external modules
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { text, withKnobs } from '@storybook/addon-knobs';

// internal moduls
import LogoCoralPink from './LogoCoralPink';
import coralPinkLogo from '@/LogoCoralPink/planz_logo_coral_pink.png';

export default {
  title: 'components|LogoCoralPink',
  component: LogoCoralPink,
  decorators: [withKnobs],
};

export const coralPink = () => {
  const logo = text('logo', coralPinkLogo);

  return <LogoCoralPink logo={logo} />;
};
