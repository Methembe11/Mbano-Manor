import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from './primitives';
import { FOOTER_LINKS, CONTACT, LOGO } from '../data/site';

const FooterWrap = styled.footer`
  padding: 84px 0 48px;
  background: ${({ theme }) => theme.colors.tealDeep};
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.gold};
  position: relative;
`;

const Logo = styled.div`
  margin-bottom: 44px;
  img { height: 40px; width: auto; margin: 0 auto; opacity: 0.92; background: transparent; }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 34px;
  margin-bottom: 44px;
  flex-wrap: wrap;
  a {
    font-family: ${({ theme }) => theme.fonts.ui};
    font-size: 10px;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.warmStone};
    transition: color 0.3s ease;
    &:hover { color: ${({ theme }) => theme.colors.gold}; }
  }
  @media (max-width: 768px) {
    gap: 18px 24px;
  }
`;

const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-bottom: 44px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border: 1px solid ${({ theme }) => theme.colors.lineTeal};
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.warmStone};
    transition: all 0.4s ease;
    svg {
      display: block;
      width: 16px;
      height: 16px;
      fill: currentColor;
    }
    &:hover {
      border-color: ${({ theme }) => theme.colors.gold};
      color: ${({ theme }) => theme.colors.gold};
    }
  }
`;

const FooterCopy = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 11px;
  letter-spacing: 1.5px;
  color: rgba(216, 210, 196, 0.45);
`;

export default function Footer() {
  return (
    <FooterWrap>
      <Container>
        <Logo>
          <img src={LOGO} alt="Mbano Manor Hotel" />
        </Logo>
        <FooterLinks>
          {FOOTER_LINKS.map((l) => (
            <Link key={l.to} to={l.to}>
              {l.label}
            </Link>
          ))}
        </FooterLinks>
        <FooterSocial>
          <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 21v-7h2.4l.45-3H13.5V9.15c0-.87.24-1.46 1.49-1.46H16.4V5.05c-.26-.03-1.15-.11-2.18-.11-2.16 0-3.64 1.32-3.64 3.74V11H8.25v3H10.58v7h2.92Z" />
            </svg>
          </a>
          <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 2.24c-3.14 0-3.51.01-4.75.07-1.08.05-1.66.23-2.05.38-.51.2-.88.44-1.26.82-.38.38-.62.75-.82 1.26-.15.39-.33.97-.38 2.05-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.05 1.08.23 1.66.38 2.05.2.51.44.88.82 1.26.38.38.75.62 1.26.82.39.15.97.33 2.05.38 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c1.08-.05 1.66-.23 2.05-.38.51-.2.88-.44 1.26-.82.38-.38.62-.75.82-1.26.15-.39.33-.97.38-2.05.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.05-1.08-.23-1.66-.38-2.05-.2-.51-.44-.88-.82-1.26a3.4 3.4 0 0 0-1.26-.82c-.39-.15-.97-.33-2.05-.38-1.24-.06-1.61-.07-4.75-.07Zm0 3.82a5.78 5.78 0 1 1 0 11.56 5.78 5.78 0 0 1 0-11.56Zm0 2.24a3.54 3.54 0 1 0 0 7.08 3.54 3.54 0 0 0 0-7.08Zm5.72-3.2a1.35 1.35 0 1 1-2.7 0 1.35 1.35 0 0 1 2.7 0Z" />
            </svg>
          </a>
        </FooterSocial>
        <FooterCopy>&copy; 2026 Mbano Manor Hotel Victoria Falls. All Rights Reserved.</FooterCopy>
      </Container>
    </FooterWrap>
  );
}
