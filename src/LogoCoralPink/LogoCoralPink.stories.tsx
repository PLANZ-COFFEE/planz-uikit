// external modules
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { text, withKnobs } from '@storybook/addon-knobs';

// internal modules
import LogoCoralPink from './LogoCoralPink';
import { LOGO_WIDTH } from '@/common/constants.tsx';

export default {
  title: 'components|LogoCoralPink',
  component: LogoCoralPink,
  decorators: [withKnobs],
};

export const coralPink = (): JSX.Element => {
  const width = text('width', LOGO_WIDTH);

  return <LogoCoralPink width={width} />;
};
