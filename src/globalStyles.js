import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.ivory};
    color: ${({ theme }) => theme.colors.ink};
    overflow-x: hidden;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  img { max-width: 100%; display: block; background: ${({ theme }) => theme.colors.sand}; }
  a { text-decoration: none; color: ${({ theme }) => theme.colors.gold}; }
  ul { list-style: none; }
  button { font-family: inherit; }
  h1, h2, h3, h4, h5, h6 { font-family: ${({ theme }) => theme.fonts.display}; line-height: 1.15; }

  ::selection {
    background: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.ivory};
  }

  :focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.inkSoft};
    outline-offset: 3px;
  }

  * { scrollbar-width: thin; scrollbar-color: ${({ theme }) => theme.colors.gold} transparent; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: ${({ theme }) => theme.colors.ivory}; }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gold};
    border-radius: 3px;
  }
`;

export const Container = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 56px;
  @media (max-width: 768px) {
    padding: 0 28px;
  }
`;

export const btnBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  padding: 16px 36px;
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;
  border: 1px solid transparent;
  transition: border-color 0.45s ${({ theme }) => theme.transition},
    color 0.45s ${({ theme }) => theme.transition},
    background 0.45s ${({ theme }) => theme.transition};
  white-space: nowrap;
`;

export const BtnPrimary = styled.a`
  ${btnBase}
  color: ${({ theme }) => theme.colors.ink};
  background: transparent;
  border-color: ${({ theme }) => theme.colors.ink};
  &:hover {
    background: ${({ theme }) => theme.colors.ink};
    color: ${({ theme }) => theme.colors.ivory};
    box-shadow: none;
  }
`;

export const BtnOutline = styled.a`
  ${btnBase}
  color: ${({ theme }) => theme.colors.ink};
  background: transparent;
  border-color: rgba(10, 10, 8, 0.18);
  &:hover {
    border-color: ${({ theme }) => theme.colors.ink};
    color: ${({ theme }) => theme.colors.ink};
  }
  ${({ $dark }) =>
    $dark &&
    css`
      color: ${({ theme }) => theme.colors.ivory};
      border-color: rgba(248, 247, 242, 0.25);
      &:hover {
        border-color: ${({ theme }) => theme.colors.gold};
        color: ${({ theme }) => theme.colors.gold};
      }
    `}
`;

export const BtnWhatsapp = styled.a`
  ${btnBase}
  color: ${({ theme }) => theme.colors.ivory};
  background: ${({ theme }) => theme.colors.ink};
  border-color: transparent;
  &:hover {
    background: ${({ theme }) => theme.colors.tealDeep};
  }
`;