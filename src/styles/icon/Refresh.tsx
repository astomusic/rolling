import * as React from 'react';
import styled from 'styled-components';

import { IconProps } from '../common/Icon';

interface SvgWrapperProps {
  padding?: string;
}

const SvgWrapper = styled.svg<SvgWrapperProps>`
  ${({ padding }) => padding && `padding: ${padding}`};
`;

const Refresh = ({ color, size, padding }: IconProps) => {
  return (
    <SvgWrapper
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="13"
      viewBox="0 0 14 13"
      padding={padding}
    >
      <path
        fill="#1B7FCB"
        fillRule="evenodd"
        stroke="#1B7FCB"
        strokeWidth=".2"
        d="M8.434 11.35c-2.332.605-4.809-.348-6.094-2.283l2.663.226.057-.63-3.733-.316L1 11.966l.65.055.224-2.495c1.159 1.655 3.107 2.636 5.143 2.636.527 0 1.06-.066 1.586-.202 2.128-.553 3.806-2.179 4.379-4.244l-.63-.164c-.512 1.848-2.014 3.303-3.918 3.797M1.648 4.772l-.63-.164C1.591 2.544 3.27.918 5.398.365c2.556-.665 5.27.348 6.728 2.43l.225-2.492.649.055-.326 3.62L8.94 3.66l.057-.63 2.663.226C10.375 1.322 7.898.37 5.566.975c-1.904.495-3.406 1.95-3.918 3.797"
      />
    </SvgWrapper>
  );
};

export default Refresh;
