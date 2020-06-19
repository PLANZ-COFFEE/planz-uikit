// 외부 모듈
import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

// 내부모듈
import LogoBlack from './LogoBlack';
import { LOGO_WIDTH } from '@/common/constants';

export default {
  title: 'components|LogoBlack',
  /* 표시할 컴포넌트 */
  component: LogoBlack,
  /* Knobs 추가 */
  decorators: [withKnobs],
};

export const blackLogo = (): JSX.Element => {
  const name = text('name', 'BlackLogo');
  const width = text('width', LOGO_WIDTH);

  return <LogoBlack name={name} width={width} />;
};
