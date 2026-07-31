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
  padding: 0 56px;
  transition: background 0.5s ${({ theme }) => theme.transition},
    border-color 0.5s ${({ theme }) => theme.transition};
  background: transparent;
  border-bottom: 1px solid transparent;
  ${({ $scrolled }) =>
    $scrolled &&
    css`
      background: rgba(243, 238, 231, 0.92);
      backdrop-filter: blur(24px);
      border-bottom-color: rgba(10, 10, 8, 0.06);
    `}
  @media (max-width: 768px) {
    height: ${({ theme }) => theme.navHeightMobile};
    padding: 0 28px;
  }
`;

const NavLogo = styled(Link)`
  height: 38px;
  transition: opacity 0.3s ease;
  &:hover { opacity: 0.8; }
  img {
    height: 100%;
    width: auto;
    filter: ${({ $dark }) => ($dark ? 'brightness(0)' : 'none')};
    transition: filter 0.5s ${({ theme }) => theme.transition};
  }
`;

const linkBase = css`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.ink};
  transition: color 0.3s ease;
  &:hover, &.active { color: ${({ theme }) => theme.colors.gold}; }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 36px;
  list-style: none;
  a { ${linkBase} }
  @media (max-width: 1024px) {
    gap: 24px;
    a { font-size: 9px; }
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
        background: rgba(243, 238, 231, 0.98);
        backdrop-filter: blur(24px);
        padding: 28px;
        gap: 0;
        max-height: calc(100vh - ${({ theme }) => theme.navHeightMobile});
        overflow-y: auto;
        border-bottom: 1px solid rgba(10, 10, 8, 0.06);
        a {
          display: block;
          padding: 16px 0;
          font-size: 12px;
          border-bottom: 1px solid rgba(10, 10, 8, 0.05);
        }
      `}
  }
`;

const NavCta = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.ink};
  transition: color 0.3s ${({ theme }) => theme.transition};
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
  @media (max-width: 768px) {
    display: inline-block;
    margin-top: 20px;
    font-size: 9px;
  }
`;

const MobileToggle = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  padding: 6px;
  background: none;
  border: none;
  span {
    width: 22px;
    height: 1px;
    background: ${({ theme }) => theme.colors.ink};
    transition: all 0.35s ease;
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
        <NavLink to={item.to} end={item.to === '/'}>
          {item.label}
        </NavLink>
      </li>
    );
  }

  return (
    <li className={`has-dropdown ${open ? 'open' : ''}`}>
      <NavLink to={item.to} onClick={handleClick}>
        {item.label} <span className="caret">&#9662;</span>
      </NavLink>
      {open && isMobile() && (
        <ul style={{ paddingLeft: '16px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {item.dropdown.map((sub) => (
            <li key={sub.to}>
              <NavLink to={sub.to}>{sub.label}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const prevY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
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
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <Nav $scrolled={scrolled || menuOpen}>
      <NavLogo to="/" $dark={scrolled || menuOpen}>
        <img src={LOGO} alt="Mbano Manor Hotel" />
      </NavLogo>
      <NavLinks $open={menuOpen} onClick={() => menuOpen && setMenuOpen(false)}>
        {NAV.map((item) => (
          <NavItem key={item.label} item={item} scrolled={scrolled || menuOpen} />
        ))}
      </NavLinks>
      <NavCta to="/book-now">Reserve</NavCta>
      <MobileToggle
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </MobileToggle>
    </Nav>
  );
}