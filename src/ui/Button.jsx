import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    border-radius: 0.25rem;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
    border-radius: 0.25rem;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
    border-radius: 0.5rem;
  `,
};

const variations = {
  primary: css`
    color: var(--color-primary-light);
    background-color: var(--color-accent2);
    text-transform: uppercase;
    &:hover {
      background-color: var(--color-accent2-dark--1);
    }
  `,
  secondary: css`
    color: var(--color-primary-dark);
    background: var(--color-primary-light);
    border: 1px solid var(--color-accent1);
    text-transform: uppercase;

    &:hover {
      background-color: var(--color-accent1);
      color: var(--color-primary-light);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled(Link)`
  display: block;
  border: none;
  text-decoration: none;
  /* box-shadow: var(--shadow-sm); */
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = { variation: 'primary', size: 'medium' };
export default Button;
