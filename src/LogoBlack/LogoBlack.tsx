// 외부 모듈
/**@jsx jsx */
import { jsx, css } from '@emotion/core';

// 내부 모듈
import LogoPng from '@/img/logo_black.png';

type LogoBlackProps = {
  name: string;
  width: string;
};

export const LogoBlack = ({ name, width }: LogoBlackProps): JSX.Element => {
  return (
    <div>
      <div>{name}</div>
      <img
        css={css`
          width: ${width};
        `}
        src={LogoPng}
        alt="logo"
      />
      ;
    </div>
  );
};

export default LogoBlack;
