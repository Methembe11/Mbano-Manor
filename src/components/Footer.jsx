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
  img { height: 40px; width: auto; margin: 0 auto; opacity: 0.92; }
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
    font-size: 13px;
    font-family: ${({ theme }) => theme.fonts.ui};
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
            f
          </a>
          <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            ig
          </a>
        </FooterSocial>
        <FooterCopy>&copy; 2026 Mbano Manor Hotel Victoria Falls. All Rights Reserved.</FooterCopy>
      </Container>
    </FooterWrap>
  );
}
