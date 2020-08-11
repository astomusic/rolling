import React from 'react';
import { useHistory } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

interface LinkProps {
  children?: React.ReactNode;
  disabled?: boolean;
  newTab?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  target?: string;
  display?: string;
  padding?: string;
  disabledAnimation?: boolean;
  hash?: boolean;
  download?: string;
}

interface LinkWrapperProps {
  display?: string;
  padding?: string;
  disabled?: boolean;
  disabledAnimation?: boolean;
}

const LinkWrapper = styled.div<LinkWrapperProps>`
  display: inline-block;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  ${({ display }) => display && `display: ${display}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ disabledAnimation }) =>
    !disabledAnimation &&
    `a p, span {
    transition: 0.15s ease-in;
    border-bottom: 0.2rem solid transparent;
    &:hover {
      border-color: currentColor;
    }
  `}
`;

const Link = (props: LinkProps) => {
  const { children, disabled, onClick, target, newTab, display, padding, hash, download } = props;
  const history = useHistory();
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (onClick) {
      onClick(event);
    }

    if (hash) {
      return;
    }

    if (newTab) {
      window.open(target, '_blank');
    } else {
      history.push(target);
    }
  };

  if (disabled) {
    return (
      <LinkWrapper display={display} padding={padding} disabled disabledAnimation>
        {children}
      </LinkWrapper>
    );
  }

  if (hash) {
    return (
      <LinkWrapper display={display} padding={padding}>
        <HashLink to={target} onClick={handleClick}>
          {children}
        </HashLink>
      </LinkWrapper>
    );
  }

  return (
    <LinkWrapper display={display} padding={padding}>
      <a onClick={handleClick}>{children}</a>
    </LinkWrapper>
  );
};

export default Link;
