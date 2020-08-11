import * as React from 'react';

import { IconProps } from '../common/Icon';

const PlayerList = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
      <g fill={color} fillRule="evenodd" transform="translate(1 3)">
        <path d="M2.883 20.88l-.446.308c-.197.136-.466.087-.602-.11-.075-.108-.097-.244-.059-.37l.155-.519c.12-.398-.02-.83-.351-1.081l-.43-.33c-.19-.144-.227-.416-.082-.606.08-.104.202-.167.334-.17l.541-.013c.416-.01.783-.276.92-.668l.18-.512c.08-.225.326-.344.552-.265.124.044.221.141.265.265l.18.512c.137.392.503.658.92.668l.541.013c.239.005.428.204.423.443-.003.131-.066.254-.17.334l-.431.329c-.331.252-.47.683-.352 1.081l.156.52c.068.228-.062.47-.291.538-.126.038-.262.016-.37-.059l-.446-.308c-.342-.236-.795-.236-1.137 0zM2.883 13.057l-.446.308c-.197.136-.466.087-.602-.11-.075-.108-.097-.244-.059-.37l.155-.519c.12-.398-.02-.83-.351-1.081l-.43-.33c-.19-.144-.227-.416-.082-.606.08-.104.202-.167.334-.17l.541-.013c.416-.01.783-.276.92-.668l.18-.512c.08-.225.326-.344.552-.265.124.044.221.141.265.265l.18.512c.137.392.503.658.92.668l.541.013c.239.005.428.204.423.443-.003.131-.066.254-.17.334l-.431.329c-.331.252-.47.683-.352 1.081l.156.52c.068.228-.062.47-.291.538-.126.038-.262.016-.37-.059l-.446-.308c-.342-.236-.795-.236-1.137 0z" />
        <rect width="16.796" height="3" x="9.204" y="17.487" rx="1.5" />
        <rect width="16.796" height="3" x="9.204" y="9.664" rx="1.5" />
        <path d="M2.883 5.234l-.446.308c-.197.136-.466.087-.602-.11-.075-.108-.097-.244-.059-.37l.155-.519c.12-.398-.02-.83-.351-1.081l-.43-.33c-.19-.144-.227-.416-.082-.606.08-.104.202-.167.334-.17l.541-.013c.416-.01.783-.276.92-.668l.18-.512c.08-.225.326-.344.552-.265.124.044.221.141.265.265l.18.512c.137.392.503.658.92.668l.541.013c.239.005.428.204.423.443-.003.131-.066.254-.17.334l-.431.329c-.331.252-.47.683-.352 1.081l.156.52c.068.228-.062.47-.291.538-.126.038-.262.016-.37-.059l-.446-.308c-.342-.236-.795-.236-1.137 0z" />
        <rect width="16.796" height="3" x="9.204" y="1.841" rx="1.5" />
      </g>
    </svg>
  );
};

export default PlayerList;
