import styled, { css } from 'styled-components';

const sizes = {
  tiny: css`
    width: 2rem;
    height: 2rem;
  `,
  small: css`
    width: 2.5rem;
    height: 2.5rem;
  `,
  medium: css`
    width: 3rem !important;
    height: 3rem !important;
    @media (max-width: 600px) {
      width: 2.5rem;
      height: 2.5rem;
    }
  `,
  large: css`
    width: 3.5rem;
    height: 3.5rem;
  `,
};

const StyledIcon = styled.div`
  display: flex;

  & svg {
    transition: all 0.3s;
    color: ${(props) => props.color};
    ${(props) => sizes[props.sizes]}

    &:hover {
      color: ${(props) => props.hoverColor} !important;
    }
  }
`;

function Icon({ children, color, hoverColor, sizes }) {
  return (
    <StyledIcon color={color} hoverColor={hoverColor} sizes={sizes}>
      {children}
    </StyledIcon>
  );
}

Icon.defaultProps = { sizes: 'medium' };

export default Icon;
