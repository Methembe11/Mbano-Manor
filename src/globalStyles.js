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
  img { max-width: 100%; display: block; }
  a { text-decoration: none; color: inherit; }
  ul { list-style: none; }
  button { font-family: inherit; }

  ::selection {
    background: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.ivory};
  }

  :focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.gold};
    outline-offset: 3px;
  }

  * { scrollbar-width: thin; scrollbar-color: ${({ theme }) => theme.colors.gold} transparent; }
  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background: ${({ theme }) => theme.colors.ivory}; }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.teal};
    border: 3px solid ${({ theme }) => theme.colors.ivory};
    border-radius: 8px;
  }
`;

export const Container = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 48px;
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

export const btnBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  padding: 18px 42px;
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;
  border: 1px solid transparent;
  transition: background 0.45s ${({ theme }) => theme.transition},
    color 0.45s ${({ theme }) => theme.transition},
    border-color 0.45s ${({ theme }) => theme.transition},
    box-shadow 0.45s ${({ theme }) => theme.transition};
  white-space: nowrap;
`;

export const BtnPrimary = styled.a`
  ${btnBase}
  color: ${({ theme }) => theme.colors.ivory};
  background: ${({ theme }) => theme.colors.gold};
  &:hover {
    background: ${({ theme }) => theme.colors.bronze};
    box-shadow: 0 14px 34px rgba(184, 155, 94, 0.28);
  }
`;

export const BtnOutline = styled.a`
  ${btnBase}
  color: ${({ theme }) => theme.colors.ivory};
  background: transparent;
  border-color: rgba(248, 247, 242, 0.4);
  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.gold};
  }
  ${({ $dark }) =>
    $dark &&
    css`
      color: ${({ theme }) => theme.colors.ink};
      border-color: ${({ theme }) => theme.colors.line};
      &:hover {
        border-color: ${({ theme }) => theme.colors.gold};
        color: ${({ theme }) => theme.colors.gold};
      }
    `}
`;

export const BtnWhatsapp = styled.a`
  ${btnBase}
  color: ${({ theme }) => theme.colors.ivory};
  background: ${({ theme }) => theme.colors.whatsapp};
  border-color: transparent;
  &:hover {
    background: ${({ theme }) => theme.colors.whatsappDark};
    box-shadow: 0 14px 34px rgba(47, 110, 90, 0.3);
  }
`;
