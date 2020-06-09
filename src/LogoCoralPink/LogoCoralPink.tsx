// external modules
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// internal modules
import logoCoralPink from '@/img/logo_coral_pink.png';

/** 로고 이미지 props */
type LogoProps = {
  width: string;
};

/** coral pink 로고 */
const LogoCoralPink: React.FunctionComponent<LogoProps> = ({ width }: LogoProps): JSX.Element => {
  return (
    <img
      src={logoCoralPink}
      css={css`
        width: ${width};
      `}
    />
  );
};

export default LogoCoralPink;
