import { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { NAV, LOGO } from '../data/site';
import { breakpoints } from '../theme';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.navHeight};
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  transition: background 0.5s ${({ theme }) => theme.transition},
    box-shadow 0.5s ${({ theme }) => theme.transition},
    transform 0.4s ${({ theme }) => theme.transition},
    border-color 0.5s ${({ theme }) => theme.transition};
  background: transparent;
  border-bottom: 1px solid transparent;
  ${({ $scrolled }) =>
    $scrolled &&
    css`
      background: rgba(248, 247, 242, 0.86);
      backdrop-filter: blur(18px);
      border-bottom-color: rgba(42, 42, 40, 0.08);
      box-shadow: 0 12px 40px rgba(14, 52, 54, 0.06);
    `}
  ${({ $hidden }) => $hidden && 'transform: translateY(-100%);'}
  @media (max-width: 768px) {
    height: ${({ theme }) => theme.navHeightMobile};
    padding: 0 24px;
  }
`;

const NavLogo = styled(Link)`
  height: 46px;
  transition: opacity 0.3s ease;
  &:hover { opacity: 0.85; }
  img {
    height: 100%;
    width: auto;
    filter: ${({ $dark }) => ($dark ? 'brightness(0)' : 'none')};
    transition: filter 0.5s ${({ theme }) => theme.transition};
  }
`;

const linkColor = css`
  color: ${({ theme }) => theme.colors.ivory};
  ${({ $scrolled, theme }) =>
    $scrolled &&
    css`
      color: ${theme.colors.ink};
    `}
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 26px;
  list-style: none;
  & > li { position: relative; }
  a {
    font-family: ${({ theme }) => theme.fonts.ui};
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 12px 0;
    transition: color 0.3s ease;
    white-space: nowrap;
    ${linkColor}
    &:hover, &.active { color: ${({ theme }) => theme.colors.gold}; }
  }
  .caret { font-size: 8px; margin-left: 5px; opacity: 0.7; }
  @media (max-width: 900px) {
    gap: 18px;
    a { font-size: 10px; }
  }
  @media (max-width: 768px) {
    display: none;
    ${({ $open }) =>
      $open &&
      css`
        display: flex;
        position: fixed;
        top: ${({ theme }) => theme.navHeightMobile};
        left: 0;
        right: 0;
        flex-direction: column;
        align-items: stretch;
        background: rgba(248, 247, 242, 0.98);
        backdrop-filter: blur(18px);
        padding: 24px;
        gap: 0;
        max-height: calc(100vh - ${({ theme }) => theme.navHeightMobile});
        overflow-y: auto;
        border-bottom: 1px solid rgba(42, 42, 40, 0.08);
        a {
          display: block;
          padding: 13px 8px;
          font-size: 13px;
          color: ${({ theme }) => theme.colors.ink};
        }
        .dropdown {
          position: static;
          opacity: 1;
          visibility: visible;
          transform: none;
          display: none;
          background: transparent;
          border: none;
          padding: 0 0 0 16px;
        }
        .has-dropdown.open .dropdown { display: block; }
        .has-dropdown > a { color: ${({ theme }) => theme.colors.gold}; }
      `}
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  left: -14px;
  min-width: 250px;
  background: rgba(248, 247, 242, 0.97);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(42, 42, 40, 0.08);
  border-top: 1px solid ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.radius};
  padding: 10px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: opacity 0.35s ${({ theme }) => theme.transition},
    transform 0.35s ${({ theme }) => theme.transition},
    visibility 0.35s;
  z-index: 50;
  box-shadow: 0 24px 60px rgba(14, 52, 54, 0.14);
  .has-dropdown:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  a {
    display: block;
    padding: 11px 22px;
    font-size: 10px;
    white-space: normal;
    color: ${({ theme }) => theme.colors.ink} !important;
    &:hover { color: ${({ theme }) => theme.colors.gold} !important; }
  }
`;

const NavCta = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  padding: 13px 28px;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.gold};
  background: transparent;
  transition: background 0.4s ${({ theme }) => theme.transition},
    color 0.4s ${({ theme }) => theme.transition};
  &:hover {
    background: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.ivory};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileCta = styled(NavCta)`
  display: none;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
    margin-top: 14px;
  }
`;

const MobileToggle = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 8px;
  background: none;
  border: none;
  span {
    width: 26px;
    height: 1.5px;
    background: ${({ theme }) => theme.colors.ivory};
    transition: all 0.35s ease;
    ${({ $scrolled, theme }) =>
      $scrolled &&
      css`
        background: ${theme.colors.ink};
      `}
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

function NavItem({ item, scrolled }) {
  const [open, setOpen] = useState(false);
  const isMobile = () => window.innerWidth <= 768;

  const handleClick = (e) => {
    if (item.dropdown && isMobile()) {
      e.preventDefault();
      e.stopPropagation();
      setOpen((o) => !o);
    }
  };

  if (!item.dropdown) {
    return (
      <li>
        <NavLink to={item.to} end={item.to === '/'} $scrolled={scrolled}>
          {item.label}
        </NavLink>
      </li>
    );
  }

  return (
    <li className={`has-dropdown ${open ? 'open' : ''}`}>
      <NavLink to={item.to} onClick={handleClick} $scrolled={scrolled}>
        {item.label} <span className="caret">&#9662;</span>
      </NavLink>
      <Dropdown>
        {item.dropdown.map((sub) => (
          <li key={sub.to}>
            <NavLink to={sub.to}>{sub.label}</NavLink>
          </li>
        ))}
      </Dropdown>
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const prevY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      if (y > 200) {
        setHidden(y > prevY.current);
      } else {
        setHidden(false);
      }
      prevY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <Nav $scrolled={scrolled || menuOpen} $hidden={hidden && !menuOpen}>
      <NavLogo to="/" $dark={scrolled || menuOpen}>
        <img src={LOGO} alt="Mbano Manor Hotel" />
      </NavLogo>
      <NavLinks $open={menuOpen} onClick={() => menuOpen && setMenuOpen(false)}>
        {NAV.map((item) => (
          <NavItem key={item.label} item={item} scrolled={scrolled || menuOpen} />
        ))}
        <MobileCta to="/book-now">Reserve</MobileCta>
      </NavLinks>
      <NavCta to="/book-now">Reserve</NavCta>
      <MobileToggle
        aria-label="Toggle navigation"
        $scrolled={scrolled || menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </MobileToggle>
    </Nav>
  );
}
