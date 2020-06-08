// 외부 모듈
/**@jsx jsx */
import { jsx, css } from '@emotion/core';

// 내부 모듈
import LogoPng from '@/img/logo_black.png';

const LogoBlack = () => {
  return <img css={logoImg} src={LogoPng} alt="logo" />;
};

const logoImg = css`
  max-width: 300px;
`;

export default LogoBlack;
