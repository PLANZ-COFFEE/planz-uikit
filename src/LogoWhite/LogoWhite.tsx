// external modules
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// internal modules
import logoWhite from '@/img/logo_white.png';

/** 화이트 로고 props */
export type LogoWhiteProps = {
  width: string;
};

/** logo white 컴포넌트 */
const LogoWhite: React.FunctionComponent<LogoWhiteProps> = ({ width }: LogoProps): JSX.Element => {
  return (
    <img
      src={logoWhite}
      css={css`
        width: ${width};
      `}
    />
  );
};

export default LogoWhite;
