import * as React from 'react';

import { IconProps } from '../common/Icon';

const ResultList = ({ color, size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
      <g fill={color} fillRule="evenodd">
        <path
          d="M5 21.988h3v-8c0-.552-.448-1-1-1H6c-.552 0-1 .448-1 1v8zM10 21.988h3v-9c0-.552-.448-1-1-1h-1c-.552 0-1 .448-1 1v9zM0 21.988h3v-4c0-.552-.448-1-1-1H1c-.552 0-1 .448-1 1v4zM20 21.988h3v-12c0-.552-.448-1-1-1h-1c-.552 0-1 .448-1 1v12zM15 21.988h3v-8c0-.552-.448-1-1-1h-1c-.552 0-1 .448-1 1v8z"
          transform="translate(2.5 3)"
        />
        <path
          fillRule="nonzero"
          d="M20.445 1.212c.403-.342 1.001-.285 1.336.126.31.38.286.93-.037 1.281l-.087.084-7.654 6.492c-.316.269-.762.296-1.104.08l-.1-.072-2.86-2.368-7.404 5.946c-.38.305-.917.267-1.253-.072l-.079-.09c-.299-.389-.261-.938.07-1.28l.09-.081L9.36 4.834c.317-.254.752-.274 1.087-.062l.097.07 2.844 2.354 7.056-5.984z"
          transform="translate(2.5 3)"
        />
        <path
          fillRule="nonzero"
          d="M22.141 0c.513 0 .936.386.993.883l.007.117v4.697c0 .552-.448 1-1 1-.513 0-.936-.386-.993-.883l-.007-.117V2H17c-.513 0-.936-.386-.993-.883L16 1c0-.513.386-.936.883-.993L17 0h5.141z"
          transform="translate(2.5 3)"
        />
      </g>
    </svg>
  );
};

export default ResultList;
