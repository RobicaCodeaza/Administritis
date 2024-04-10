import styled, { css } from 'styled-components';

const sizes = {
  tiny: css`
    gap: 0.4rem;
  `,
  small: css`
    gap: 0.8rem;
  `,
  medium: css`
    gap: 1.6rem;
  `,
};

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.justifyContent !== '' &&
    css`
      justify-content: ${(props) => props.justifyContent};
    `}
  ${(props) =>
    props.justify !== '' &&
    css`
      justify-items: ${(props) => props.justify};
    `}

  ${(props) =>
    props.align !== '' &&
    css`
      /* flex-wrap: nowrap; */
      align-content: ${(props) => props.align};
    `}
  ${(props) =>
    props.alignContent !== '' &&
    css`
      align-content: ${(props) => props.alignContent};
    `}
  ${(props) => sizes[props.size]};
  ${(props) =>
    props.type === 'horizontal' &&
    css`
      align-items: center;
    `}
  ${(props) =>
    props.type === 'vertical' &&
    css`
      flex-direction: column;
    `};
`;
Row.defaultProps = {
  type: 'vertical',
  size: 'medium',
  justify: '',
  align: '',
  justifyContent: 'no',
  alignContent: 'no',
};

export default Row;
