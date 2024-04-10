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
    props.justify === 'yes' &&
    css`
      justify-content: space-between;
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
Row.defaultProps = { type: 'vertical', size: 'medium', justify: 'no' };

export default Row;
